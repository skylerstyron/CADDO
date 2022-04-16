import logo from "./Assets/Images/Caddo.png";
import "./App.css";
import { SocialMediaIconsReact } from "social-media-icons-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="CADDO" />
        <p>COMING SOON</p>
        <a 
          className="signup" 
          target="_blank"
          href="https://mailchi.mp/4242cf928245/caddo-sign-up" rel="noreferrer">SIGN UP</a>
        <div className="social-icons">
          <div className="social yt">
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="0"
              borderStyle="solid"
              icon="youtube"
              iconColor="rgba(224,224,224,1)"
              backgroundColor="rgba(26,166,233,0)"
              iconSize="5"
              roundness="20%"
              url="https://www.youtube.com/channel/UCGj6EficYllH7q7crQ-QoLA"
              target="_blank"
              size="60"
            />
          </div>
          <div className="social insta">
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="0"
              borderStyle="solid"
              icon="instagram"
              iconColor="rgba(224,224,224,1)"
              backgroundColor="rgba(26,166,233,0)"
              iconSize="5"
              roundness="20%"
              url="https://www.instagram.com/caddohunt/"
              target="_blank"
              size="60"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
