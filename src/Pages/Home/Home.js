import React from "react";
import "./Home.css";
import homePageImage from "../../assests/Screenshot 2020-09-21 at 2.06.52 PM.png";
import imageOne from "../../assests/solaytic.png";
import imageTwo from "../../assests/kanba.png";
import imageThree from "../../assests/lighting.png";
import imageFour from "../../assests/ztos.png";
import imageSix from "../../assests/goldline.png";
import imageSeven from "../../assests/ideaa.png";
import imageEight from "../../assests/liva.png";
import imageNine from "../../assests/velocity-9.png";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();

  const handleClick = function () {
    history.push("/login");
  };
  return (
    <div className="home_outer">
      <div className="home_upper">
        <div className="section_one">
          <div className="header_main--text">
            <div>
              Welcome to My<span>Jobs</span>
            </div>
            <button onClick={handleClick}>Get started</button>
          </div>
          <div className="bannerImage">
            <img src={homePageImage} alt="home" />
          </div>
        </div>
        <div className="section_two">
          <span>Why us</span>
          <div className="cards">
            <div className="card card-one">
              <div className="card-heading">Get More Visibility</div>
              <div className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
            </div>
            <div className="card card-two">
              <div className="card-heading">Organize Your Candidates</div>
              <div className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
            </div>
            <div className="card card-three">
              <div className="card-heading">Verify Their Abilities</div>
              <div className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
            </div>
          </div>
        </div>
        <div className="section-three">
          <span>Companies who trust us</span>
          <div className="image-one">
            <img src={imageOne} alt="imageOne" />
            <img src={imageTwo} alt="imageTwo" />
            <img src={imageThree} alt="imageThree" />
            <img src={imageFour} alt="imageFour" />
            <img src={imageTwo} alt="imageFive" />
            <img src={imageSix} alt="imageSix" />
            <img src={imageSeven} alt="imageSeven" />
            <img src={imageEight} alt="imageEight" />
            <img src={imageNine} alt="imageNine" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
