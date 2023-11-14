// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
// WHEN I load the portfolio the first time

export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
        <nav className="main-header-menu">
            <section
                style={{
                    display: 'flex',
                    fontFamily: 'helvetica',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >
                <div style={linkStyle}>
                    <a href="#">Sarah Goodell</a>
                </div>

                <div style={linkStyle}>
                    <a href="#">Contact</a>
                </div>

                <div style={linkStyle}>
                    <a href="#">Projects</a>
                </div>

                <div style={linkStyle}>
                    <a href="#">Resume</a>
                </div>

            </section>
        </nav>
    );
}  