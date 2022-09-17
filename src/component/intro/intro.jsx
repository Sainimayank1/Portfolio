import "./into.scss"

export default function intro( { menu ,  setmenu } ) {
  return (
    <div className="into" id="intro">
      <div className="left">
        <h3>Hi There, I'am</h3>
        <h2>Mayank.</h2>
        <div>Webdeveloper<span></span></div>
      </div>
      <div className={ "right " + ( menu ? "active_3" : "" )}>
        <div className="Image">
          <img src=".\assets\Mayank1.png" alt="image"/>
        </div>
      </div>
    </div>
  )
}
