import './app.scss';
import Navbar from './component/navbar/navbar';
import Intro from './component/intro/intro';
import Contact from './component/contact/contact';
import Portfliyo from './component/portfoliyo/portfliyo';
import Testmonial from './component/testimonial/testimonial';
import {useState} from 'react';
import Menu from './component/menu/menu'
function App() {
  const [menu,setmenu] = useState(false);
  return (
    <div className={"main " + ( menu ? "active2" : "")}>
      <Navbar menu={menu} setmenu={setmenu}/>
          <Menu menu={menu} setmenu={setmenu}/>
        <div className='section'>
          <Intro menu={menu} setmenu={setmenu} />
          <Portfliyo />
          <Testmonial />
          <Contact />
        </div>
    </div>

  );
}

export default App;
