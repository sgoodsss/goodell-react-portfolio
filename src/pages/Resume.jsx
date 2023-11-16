// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

export default function Resume() {
    return (
      <div>
        <h1>Resume</h1>
        <p>
          Click the link below to download my Resume!
        </p>
        <a href='/somefile.txt' download>Click to download</a>
      </div>
    );
  }
  