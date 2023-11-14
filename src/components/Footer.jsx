// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 

export default function Footer() {
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
        <footer className="main-footer">
                <div>
                    <a href="https://github.com/sgoodsss">GitHub</a>
                </div>

                <div>
                    <a href="www.linkedin.com/in/sarah-goodell-b51b6916a">LinkedIn</a>
                </div>

                <div>
                    <h3>Email:</h3>
                    <h4>sarahlgoodell1@gmail.com</h4>
                </div>

        </footer>
    );
}  