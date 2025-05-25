import './App.scss';
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import Skills from './components/skills';
import Services from './components/services';
import Freelancer from './components/freelancer';
import Contact from './components/contact-us';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Freelancer />
    </div>
  );
}

export default App;
