// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
import BookNite from "/src/assets/Book _Nite_Generator.png"
import LeapToSuccess from "/src/assets/leap-to-success.png"
import JATE from "/src/assets/JATE.png"
import techTalk from "/src/assets/techTalk.png"
import weatherDashboard from "/src/assets/weatherDashboard.png"
import passwordGenerator from "/src/assets/passwordGenerator.png"
import "./Projects.css"

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: 'Leap To Success',
      imgsrc: LeapToSuccess,
      linkToApp: "https://aads10323-501dfea30cfd.herokuapp.com/",
      linkToGithub: "https://github.com/akcodes29/Leap-To-Success"
    },
    {
      id: 2,
      title: 'Book Nite Generator',
      imgsrc: BookNite,
      linkToApp: "https://abbyjo.github.io/book-nite/",
      linkToGithub: "https://github.com/abbyjo/book-nite"
    },
    {
      id: 3,
      title: 'Just Another Text Editor',
      imgsrc: JATE,
      linkToApp: "https://jate-text-editorrrr-f83f7ed9278f.herokuapp.com/",
      linkToGithub: "https://github.com/sgoodsss/text-editor"
    },
    {
      id: 4,
      title: 'Tech Talk!',
      imgsrc: techTalk,
      linkToApp: "https://tech-talkkk-cdde123120cc.herokuapp.com/",
      linkToGithub: "https://github.com/sgoodsss/tech-blog"
    },
    {
      id: 5,
      title: '5 Day Weather Forecast',
      imgsrc: weatherDashboard,
      linkToApp: "https://sgoodsss.github.io/weather-dashboard/",
      linkToGithub: "https://github.com/sgoodsss/weather-dashboard"
    },
    {
      id: 6,
      title: 'Password Generator',
      imgsrc: passwordGenerator,
      linkToApp: "https://sgoodsss.github.io/pw-generator/",
      linkToGithub: "https://github.com/sgoodsss/pw-generator"
    }
  ]

    return (
      <div>
        <h1>My Work</h1>
  
        <div className="projectAlign" style={{
          display: "flex",
          maxWidth: "1200px",
          margin: "0 auto",
          flexWrap: "wrap"
        }}>

        {projects.map(project => (
          <a className="linkToProject" href={project.linkToApp}>
          <div className="card" key={project.id}>
            <h2>{project.title}</h2>
            <a className="linkToGithub" href={project.linkToGithub}>Link to GitHub Repo</a>
            <img src={project.imgsrc} alt="project image" />
          </div>
          </a>
        ))}

      </div>

      </div>
    );
  }