import React from "react";
import "./huddle.css";
import img from "../../assets/images/illustration-mockups.svg";
function Huddle() {
  return (
    <main>
      <div>
        <div className="content">
          <div className="Image">
            <img src={img} alt="no img" />
          </div>

          <div className="design ">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button> register</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Huddle;
