import React from 'react';
import './About.css';

const About = ({ Fname, Lname, descript, imageSrc, section }) => {
    return (
        <section id="about">
            <img src={imageSrc} alt={`${Fname} ${Lname}`} />
            <h2>About Me</h2>
            <p>
                Hi, I'm <span>{Fname}</span> <span>{Lname}</span>, {descript}
            </p>
            <p>
                From {section} on Dr. Yanga College Inc.
            </p>
        </section>
    );
}

export default About;

