import React from "react";
import "../styles/Resume.css";
import resumeContent from "../content/resumeContent.js";

export default function Resume() {
  const { title, imageUrl, name, email, phone, resume, content } =
    resumeContent;
  return (
    <div className="res-container ">
      <div className="res-top-group ">
        <div className="rt-group-one">
          <h3 className="title">{title}</h3>
          <h4>{name}</h4>
          <text>{phone}</text>
          <text>{email}</text>
        </div>
        <img className="resume-photo" src={imageUrl} alt="Profile Photo"></img>
        <div className="download-group">
          <text>{resume.content}</text>
          <a href={resume.url} target="_blank" download>
            {React.createElement(resume.icon, { className: "icon" })}
          </a>
        </div>
      </div>
      <div className="res-bottom-group grid gap-4 laptop:grid-cols-3 large-mobile:grid-cols-1">
        {content.map((item) => (
          <div key={item.id} className="ex-group">
            <div className="ex-header">
              <i>{React.createElement(item.icon, { className: "icon" })}</i>
              <h4>{item.title}</h4>
            </div>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
