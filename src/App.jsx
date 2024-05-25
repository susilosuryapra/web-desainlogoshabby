import styles from './App.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Creation } from './components/Creation/Creation';
import { Gallery } from './components/Gallery/Gallery';
import { Testimoni } from './components/Testimoni/Testimoni';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Creation />
      <Gallery />
      <Testimoni />
      <Contact />
    </div>
  );
}

export default App;
