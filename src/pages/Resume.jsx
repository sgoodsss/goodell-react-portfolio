// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
import goodellResume from "/src/assets/Sarah_Goodell_React_Portfolio_Resume.pdf"
import {Link} from 'react-router-dom'

export default function Resume() {
    return (
      <div>
        <h1>Resume</h1>
        <p>
          Click the link below to download my Resume!
        </p>
        <a className="clickDownload" href={goodellResume} download> Click to download</a>
      </div>
    );
  }
  