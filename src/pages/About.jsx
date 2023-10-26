import aboutContent from "../content/about-content.json";

import profilePhoto from "../assets/profile-photo.jpg";
import "../styles/About.css";

export default function About() {
  const { title, paragraphs, slogan, name, role } = aboutContent;

  return (
    <div className="about-container grid gap-4 laptop:grid-cols-3 large-mobile:grid-cols-1">
      <div className="image-group laptop:w-auto">
        <img className="profile-photo" src={profilePhoto} alt="Profile" />
        <div className="profile-desc">
          <p>
            {name}
            <br></br>
            {role}
          </p>
        </div>
      </div>
      <div className="about-group laptop:col-span-2">
        <h3 className="title">{title}</h3>
        {paragraphs.map((paragraph) => (
          <p className="about-info" key={paragraph.id}>
            {paragraph.text}
          </p>
        ))}
        <br />
        <h3 className="slogan">{slogan}</h3>
      </div>
    </div>
  );
}
