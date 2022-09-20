import "./portfoliyo.scss";

export default function portfliyo() {
  return (
    <div className="port" id="port">
      <div className="mainport">
        <h1>PortFolio</h1>
        <ul>
          <li className="active">Featured</li>
          <li>Web App</li>
          <li>Mobile-App</li>
          <li>Design</li>
          <li>Branding</li>
        </ul>
        <div className="container">
          <div className="item">
          <img src="./assets/download.jpg" alt="bank"/>
          <h2>Banking app</h2>
          </div>
          <div className="item">
          <img src="./assets/download.jpg" alt="bank"/>
          <h2>Banking app</h2>
          </div>
          <div className="item">
          <img src="./assets/download.jpg" alt="bank"/>
          <h2>Banking app</h2>
          </div>
          <div className="item">
          <img src="./assets/download.jpg" alt="bank"/>
          <h2>Banking app</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
