import './app.scss';
import Navbar from './component/navbar/navbar';
import Intro from './component/intro/intro';
import Contact from './component/contact/contact';
import Portfliyo from './component/portfoliyo/portfliyo';
import Testmonial from './component/testimonial/testimonial';

function App() {
  return (
    <div className='main'>
      <Navbar />
        <div className='section'>
          <Intro />
          <Portfliyo />
          <Testmonial />
          <Contact />
        </div>
    </div>

  );
}

export default App;
