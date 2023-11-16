// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them
import selfie from "/src/assets/selfie.jpg"

export default function Home() {
  return (
    <div>
      <h1 className="myName">Sarah Goodell</h1>
      <img className="selfie" src={selfie} alt="Photo of Sarah Goodell" />
      <p>
        Hello, I'm Sarah Goodell, a passionate Full Stack Web Developer dedicated to crafting engaging digital experiences. My journey into the world of coding began after a fulfilling stint in Secondary Education specializing in English/Language Arts. While teaching was rewarding, my fascination with software development grew stronger with time, prompting me to transition and pursue my true passion. <br />
        <br />
        The skills honed during my teaching years have seamlessly translated into my development journey, allowing me to blend creativity, problem-solving, and effective communication in my projects. I strongly believe that my teaching background brings a unique perspective to the table, enabling me to understand user needs and create intuitive, user-friendly interfaces. <br />
        <br />
        My proficiency spans both the front and back end realms, where I leverage a diverse toolkit encompassing languages like HTML, CSS, JavaScript, and frameworks such as React and Node.js. I thrive in collaborative environments, valuing teamwork and the opportunity to learn from peers. <br />
        <br />
        Beyond coding, I cherish moments spent with my beloved chihuahua named Bolt, and finding solace in the outdoors through activities like hiking and snorkeling. These experiences recharge my creativity and often inspire innovative solutions to coding challenges. <br />
        <br />
        I am enthusiastic about creating seamless digital experiences and am excited about the prospect of contributing my skills and passion to a dynamic development team. Let's build something amazing together! <br />
      </p>
    </div>
  );
}
