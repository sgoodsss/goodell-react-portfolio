// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
import goodellResume from "/src/assets/Sarah_Goodell_React_Portfolio_Resume.pdf"
import "./Resume.css"

export default function Resume() {
    return (
      <div className="resumeCenter">
        <h1>Resume</h1>
        <h3>Click the link below to download my Resume!</h3>
        <a className="clickDownload" href={goodellResume} download> Click to download</a>
      </div>
    );
  }
  