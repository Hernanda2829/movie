import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Anime from './components/Anime';
import './style/LandingPage.css';

function App() {
  return (
    <div>
      {/*intro section*/}
      <div className="MyBG">
        <NavigationBar />
        <Intro />
      </div>
      {/*end intro*/}
      <div className="trending">
        <Trending />
      </div>
      <div className="anime">
        <Anime />
      </div>
    </div>
  );
}

export default App;
