import './menu.scss';

export default function menu({menu , setmenu}){
  return (
    <div className= { "menu1 " + ( menu ? "active1" : "")}>
        <ul>
            <li><a href="#intro" onClick={()=>{setmenu(false)}}>Home</a></li>
            <li><a href="#port"  onClick={()=>{setmenu(false)}}>Portfoliyo</a></li>
            <li><a href="#test"  onClick={()=>{setmenu(false)}}>Testimonail</a></li>
            <li><a href="#contact"  onClick={()=>{setmenu(false)}}>Contact</a></li>
        </ul>
    </div>
  )
}
