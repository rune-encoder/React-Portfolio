import unityBiz from "../assets/project-photos/project-unitybiz.png"
import techBlog from "../assets/project-photos/project-tech-blog.png"
import noteLogger from "../assets/project-photos/project-note-logger.png"
import vroomu from "../assets/project-photos/project-vroomu.png"
import weatherDashboard from "../assets/project-photos/project-weather-dashboard.png"
import workDay from "../assets/project-photos/project-work-day.png"
import codeQuiz from "../assets/project-photos/project-code-quiz.png"
import passwordGenerator from "../assets/project-photos/project-password-generator.png"

const portfolioContent = {
  title: "Portfolio",
  projects: [
    {
      id: 1,
      title: "Unity Biz",
      imageUrl: `${unityBiz}`,
      deployedLink: "https://unitybiz-fd2efb602da8.herokuapp.com/",
      githubRepo: "https://github.com/rune-encoder/UnityBiz"
    },
    {
      id: 2,
      title: "Ultimate Tech Blog",
      imageUrl: `${techBlog}`,
      deployedLink: "https://u-tech-blog-84c6469a8f10.herokuapp.com/",
      githubRepo: "https://github.com/rune-encoder/Ultimate-Tech-Blog"
    },
    {
      id: 3,
      title: "Note Logger",
      imageUrl: `${noteLogger}`,
      deployedLink: "https://note-logger-03a612b15e73.herokuapp.com/",
      githubRepo: "https://github.com/rune-encoder/Note-Logger"
    },
    {
      id: 4,
      title: "Vroomu: A Vehicle Service Guide",
      imageUrl: `${vroomu}`,
      deployedLink: "https://gera1313.github.io/Vroomu-A-Vehicle-Service-Guide/",
      githubRepo: "https://github.com/rune-encoder/Vroomu-A-Vehicle-Service-Guide"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      imageUrl: `${weatherDashboard}`,
      deployedLink: "https://rune-encoder.github.io/Weather-Dashboard/",
      githubRepo: "https://github.com/rune-encoder/Weather-Dashboard"
    },
    {
      id: 6,
      title: "Work Day Scheduler",
      imageUrl: `${workDay}`,
      deployedLink: "https://rune-encoder.github.io/Work-Day-Scheduler/",
      githubRepo: "https://github.com/rune-encoder/Work-Day-Scheduler"
    },
    {
      id: 7,
      title: "Code Quiz",
      imageUrl: `${codeQuiz}`,
      deployedLink: "https://rune-encoder.github.io/Code-Quiz/",
      githubRepo: "https://github.com/rune-encoder/Code-Quiz"
    },
    {
      id: 8,
      title: "Password Generator",
      imageUrl: `${passwordGenerator}`,
      deployedLink: "https://rune-encoder.github.io/Password-Generator/",
      githubRepo: "https://github.com/rune-encoder/Password-Generator"
    }
  ]
}

export default portfolioContent;