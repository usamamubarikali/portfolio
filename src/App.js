import './App.scss';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Bio from './components/bio/Bio';
import Skills from './components/skills/Skills';
import RecentWork from './components/recentWork/RecentWork';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Bio />
      <Skills />
      <RecentWork />
      <div className="testimonials">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}

export default App;
