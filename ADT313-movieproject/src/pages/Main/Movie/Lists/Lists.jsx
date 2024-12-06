import { useNavigate } from 'react-router-dom';
import { useEffect, useContext, useCallback } from 'react';
import { AuthContext } from '../../../../utils/context/AuthContext';
import axios from 'axios';
import './Lists.css';

const Lists = () => {
    const navigate = useNavigate();
    const { lists } = useContext(AuthContext);
    const { setListDataMovie } = useContext(AuthContext);
    const { auth } = useContext(AuthContext);

    const getMovies = useCallback(() => {
        // Get the movies from the API or database
        axios.get('/movies').then((response) => {
            setListDataMovie(response.data);
        });
    }, [setListDataMovie]);

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    const handleDelete = (id) => {
        const isConfirm = window.confirm(
            'Are you sure that you want to delete this Movie including the casts, photos and videos on it?'
        );
        if (isConfirm) {
            axios
                .delete(`/movies/${id}`, {
                    headers: {
                        Authorization: `Bearer ${auth.accessToken}`,
                    },
                })
                .then(() => {
                    // Update list by modifying the movie list array
                    const tempLists = [...lists];
                    const index = lists.findIndex((movie) => movie.id === id);
                    if (index !== undefined || index !== -1) {
                        tempLists.splice(index, 1);
                        setListDataMovie(tempLists);
                    }

                    // Alternatively, update list by requesting again from the API
                    // getMovies();
                }).catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className="bg-custom">
            <div className="top-context">
                <h2>List of Movies</h2>
                <button
                    type="button"
                    className="btn-top btn-primary"
                    onClick={() => {
                        navigate('/main/movies/form');
                    }}
                >
                    Create new
                </button>
            </div>
            <div className="table-responsive mt-3">
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>TmdbID</th>
                            <th>Popularity</th>
                            <th>Release Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lists.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center">
                                    <strong>Movie not found or Created.</strong>
                                </td>
                            </tr>
                        ) : (
                            lists.map((movie, index) => (
                                <tr key={movie.id}>
                                    <td>{index + 1}</td>
                                    <td>{movie.id}</td>
                                    <td>{movie.title}</td>
                                    <td>{movie.tmdbId}</td>
                                    <td>{movie.popularity}</td>
                                    <td>{movie.releaseDate}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-warning btn-sm me-2"
                                            onClick={() => {
                                                navigate(
                                                    '/main/movies/form/' +
                                                    movie.id +
                                                    '/cast-and-crews/' + movie.tmdbId
                                                );
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm ms-2"
                                            onClick={() => handleDelete(movie.tmdbId)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Lists;
