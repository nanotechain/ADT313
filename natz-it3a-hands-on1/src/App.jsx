import './App.css';
import Header from './Property/Layout/Header/Header';
import About from './Property/Details/About';
import Footer from './Property/Layout/Footer/Footer';
import profilePic from './Property/Assets/2x2 profile.jpg';

function App() {
  const userInfo = {
    Fname: 'Nathaniel',
    Lname: 'Gonzales',
    section: 'BSIT-3A',
    descript: 'Lazy Ambitious Person.',
    imageSrc: profilePic
  };

  return (
    <div className="App">
      <Header />
      <About
        Fname={userInfo.Fname}
        Lname={userInfo.Lname}
        descript={userInfo.descript}
        imageSrc={userInfo.imageSrc}
        section={userInfo.section}
      />
      <Footer />
      {/* Uncomment the following components if needed
      <Name Fname={userInfo.Fname} Lname={userInfo.Lname} />
      <Section section={userInfo.section} />
      <Description descript={userInfo.descript} />
      */}
    </div>
  );
}

export default App;