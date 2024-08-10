import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function App() {
  return (
    <div className="card">
      <Photo />
      <Info name=" Tahir Dinçer " />
      <div className="skillsContainer">
        <Skills name="HTML" color="rgba(244, 39, 39, 0.779)" />
        <Skills name="CSS" color="purple" />
        <Skills name="JavaScript" color="yellow" />
        <Skills name="GIT" color="red" />
        <Skills name="SASS" color="pink" />
      </div>
    </div>
  );
}

function Photo() {
  return (
    <div>
      <img
        src="https://scontent.fist6-1.fna.fbcdn.net/v/t1.18169-9/26906979_10213347827202847_6430283862069665432_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=53a332&_nc_ohc=EnNVuBs_sd0Q7kNvgGjmqEh&_nc_ht=scontent.fist6-1.fna&oh=00_AYBEZzR0dHAJL6cPQ4sAMct_WUb3ZL0UJGv6YGitMCXIUA&oe=66DEE923"
        alt="Photo"
      />
    </div>
  );
}

function Info(props) {
  return (
    <div className="info">
      <h1> {props.name} </h1>
      <p> Web developer. Currently learning React. </p>
    </div>
  );
}

function Skills(props) {
  return (
    <div className="skillContainer">
      <a href="#" style={{ backgroundColor: props.color }}>
        {props.name}
      </a>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
