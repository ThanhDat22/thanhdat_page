import Navbar from '../components/ui/Navbar';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content">

        {/* Introduction */}
        <h1 className="intro-text">
          Hi, I'm <span className="highlight">Nguyen Thanh Dat</span> 👋
        </h1>
        <p className="description">
          Welcome to my webpage! I'm a passionate problem solver and developer, dedicated to creating meaningful digital experiences. Let's build something amazing together!
        </p>

        {/* Hook */}
        <button className="discover-btn">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Home;
