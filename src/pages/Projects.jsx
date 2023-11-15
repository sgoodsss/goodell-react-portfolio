// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
import BookNite from "/src/assets/Book _Nite_Generator.png"
import "./Projects.css"
// ./assets/Book_Nite_Generator.png
// ./assets/Book_Nite_Generator.png
// /assets/Book_Nite_Generator.png
// assets/Book_Nite_Generator.png

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      imgsrc: BookNite
    },
    {
      id: 2,
      title: 'Project 1',
      imgsrc: BookNite
    },
    {
      id: 3,
      title: 'Project 1',
      imgsrc: BookNite
    },
    {
      id: 4,
      title: 'Project 1',
      imgsrc: BookNite
    },
    {
      id: 5,
      title: 'Project 1',
      imgsrc: BookNite
    },
    {
      id: 6,
      title: 'Project 1',
      imgsrc: BookNite
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
          <div className="card" key={project.id}>
            <h2>{project.title}</h2>
            <img src={project.imgsrc} alt="project image" />
          </div>
          
        ))}

      </div>

      </div>
    );
  }