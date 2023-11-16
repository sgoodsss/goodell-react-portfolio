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
      linkToApp: "",
      linkToGithub: ""
    },
    {
      id: 2,
      title: 'Book Nite Generator',
      imgsrc: BookNite
    },
    {
      id: 3,
      title: 'Just Another Text Editor',
      imgsrc: JATE
    },
    {
      id: 4,
      title: 'Tech Talk!',
      imgsrc: techTalk
    },
    {
      id: 5,
      title: '5 Day Weather Forecast',
      imgsrc: weatherDashboard
    },
    {
      id: 6,
      title: 'Password Generator',
      imgsrc: passwordGenerator
    }
  ]

    return (
      <div>
        <h1>My Work</h1>
  
        <div style={{
          display: "flex",
          maxWidth: "1200px",
          margin: "0 auto",
          flexWrap: "wrap"
        }}>

        {projects.map(project => (
          <a href="">
          <div className="card" key={project.id}>
            <h2>{project.title}</h2>
            <img src={project.imgsrc} alt="project image" />
          </div>
          </a>
        ))}

      </div>

      </div>
    );
  }