import "./navbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

function navbar() {
return (
<div className="nav">
  <div className="main">
    <div className="left">
      <a href="#intro">mayank.</a>
      <div className="number">
        <PersonIcon  />
        <span className="number-num">+91-9467474023</span>
      </div>
      <div className="email">
        <MailIcon />
        <span className="email-em">mayanksaini4455@gmail.com</span>
      </div>


    </div>
    <div className="right">
        <div className="hamburger">
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
    </div>
  </div>
</div>
)
}

export default navbar;