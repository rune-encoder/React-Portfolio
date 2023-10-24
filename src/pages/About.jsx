import aboutContent from "../content/aboutContent.js";

import profilePhoto from "../assets/profile-photo.jpg";
import "../styles/About.css";

export default function About() {
  const { title, paragraphs, slogan } = aboutContent;

  return (
    <div className="container grid gap-2 laptop:grid-cols-3 large-mobile:grid-cols-2 mobile:grid-cols-1">
      <div className="image-group laptop:w-auto">
        <img className="profile-photo" src={profilePhoto} alt="Profile" />
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
