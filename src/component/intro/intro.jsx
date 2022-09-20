import "./into.scss"
import FontAwesomeIcon from "@fortawesome/fontawesome-free"
import { init } from 'ityped'
export default function intro( { menu ,  setmenu } ) {
  return (

    <div className="into" id="intro">
      <div className="left">
      <div className="wrapper">
        <h3>Hi There, I'am</h3>
        <h1>Mayank.</h1>
        <div>Webdeveloper</div>
      </div>
      <a href="#intro"><img src="./assets/arrow-down-solid.svg" alt="arrow"></img></a>
      </div>
      <div className={ "right " + ( menu ? "active_3" : "" )}>
        <div className="Image">
          <img src=".\assets\Mayank1.png" alt="image"/>
        </div>
      </div>
    </div>
  )
}
