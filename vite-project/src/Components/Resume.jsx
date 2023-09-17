import Education from "./Education";
import "./Resume.css";
import Skills from "./Skills";
import Extra from "./Extra";
import Interest from "./Interest";

function Resume() {
  return (
    <>
      <div>
        <div id="header" />
        <div className="left" />
        <div className="stuff">
          <br />
          <br />
          <h1>Resume</h1>
          <h2>Saksham Bhugra</h2>
          <hr />
          <br />
          <Interest interests={["something", "something", "something"]} />
          <Skills skills={["html", "css", "javascript"]} />
          <Education
            education={["Abes Engineering College", "FreeCodeCamp", "Udemy"]}
          />
          <Extra extras={["Gardening", "Coding", "Travelling"]}></Extra>
        </div>
        <div className="right" />
        <div id="footer">
          <h2 id="name">Saksham Bhugra</h2>
        </div>
        <div id="header" />
        <div className="left" />
      </div>
    </>
  );
}

export default Resume;
