import resumePhoto from "../assets/resume-photo.jpg";
import resumeFile from "../assets/Christian-Palacios-Resume.pdf";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

import { BiSolidDownload } from "react-icons/bi";

const resumeContent = {
  title: "Resume",
  name: "Christian Palacios",
  imageUrl: `${resumePhoto}`,
  email: "christian-palacios@outlook.com",
  phone: "726-888-2244",
  resume: {
    icon: BiSolidDownload,
    content: "Download",
    url: `${resumeFile}`,
  },
  content: [
    {
      id: 1,
      title: "Education:",
      icon: FaGraduationCap,
      content:
        "I completed a full-stack coding bootcamp at UTSA, advancing my education in computer science. I also pursued Pre-computer science coursework at UTSA from January 2015 to January 2016. While I had to pause my formal education due to work commitments, this shift directed my focus towards practical coding skills and professional development.",
    },
    {
      id: 2,
      title: "Skills:",
      icon: FaCode,
      content:
        "My full-stack web development bootcamp at UTSA equipped me with a robust skill set. I am proficient in front-end technologies such as HTML5, CSS3, JavaScript, and jQuery. My back-end skills include Express.js, Node.js, MySQL, and using Sequelize for ORM purposes. I'm also skilled in MongoDB and Mongoose for database management. I have a developing expertise in React for building interactive UIs, understand the basics of Progressive Web Applications (PWAs), and am familiar with GraphQL, along with testing tools like Jest and ViTest. My command over NPM integrates these skills into a comprehensive full-stack development portfolio.",
    },
    {
      id: 3,
      title: "Work Experience:",
      icon: FaBriefcase,
      content:
        "I have extensive experience in the automotive industry where I honed skills in communication, administrative precision, and technical expertise. As an Automotive Service Admin at Volkswagen of Alamo Heights, I enhanced interdepartmental communication and effectively managed external service relations. My role as an Automotive Service Consultant involved delivering exceptional customer service and providing tailored solutions, leveraging my detailed product knowledge and technical skills. My background as an Automotive Technician, where I performed detailed vehicle diagnostics and maintenance, underscores my commitment to continuous learning and adaptation.",
    },
  ],
};

export default resumeContent;
