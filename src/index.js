import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// import App from "./App";

function App() {
  return (
    <>
      <Avatar
        name="Da Man"
        tagline="lmao got em"
        img="https://randomuser.me/api/portraits/lego/6.jpg"
      />
      {/* <Avatar
        name="Da Man 2"
        tagline="got em twice"
        img="https://randomuser.me/api/portraits/lego/0.jpg"
      /> */}
      <WorkExperience id="1" profile="da man">
        <Company name="lego store" startDate="jan 1527" endDate="mar 2019" />
        <Company name="candy land" startDate="apr 2020" endDate="may 2020" />
        <Company
          name="farmers market"
          startDate="june 2023"
          endDate="present"
        />
      </WorkExperience>
      <Portfolio>
        <Project image="https://picsum.photos/id/80/200/300" />
        <Project image="https://picsum.photos/id/90/200/300" />
        <Project image="https://picsum.photos/id/225/200/300" />
        <Project />
      </Portfolio>
    </>
  );
}

function Avatar(props) {
  return (
    <div className="profile-container">
      <div className="profile_img">
        <img src={props.img} alt=""></img>
      </div>
      <div>
        <p className="profile">i am {props.name}</p>
        <p className="profile-tagline">{props.tagline}</p>
      </div>
    </div>
  );
}

function WorkExperience(props) {
  return (
    <div>
      <h1>Work Experience</h1>
      <ul className="work">
        {props.children}
        {/* { id: "1", profile: "da man", children: [Company, Company. Company]} */}
      </ul>
    </div>
  );
}

function Company(props) {
  return (
    <li>
      <h2 className="work-title">
        <span className="company-name">{props.name} </span>
        <span className="company-dates">
          {props.startDate} – {props.endDate}
        </span>
      </h2>
      <p>
        bilibalabilibala bilibalabilibala bilibalabilibala bilibalabilibala
        bilibalabilibala
      </p>
    </li>
  );
}

function Portfolio(props) {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="portfolio">{props.children}</div>
    </div>
  );
}

function Project(props) {
  let image;
  if (!props.image) {
    image = "https://placehold.co/600x400";
  } else {
    image = props.image;
  }
  return (
    <div className="project">
      <div className="project-image">
        <img src={image} alt="project img" />
      </div>
      <div className="project-description">
        <p>
          bilibalabilibala bilibalabilibala bilibalabilibala bilibalabilibala
          bilibalabilibala
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
