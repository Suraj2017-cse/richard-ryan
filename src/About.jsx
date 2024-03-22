import { useEffect, useState } from "react";


const About = () => {
const [aboutData, setAboutData] = useState([])
const [revealed, setRevealed] = useState([]);
console.log(aboutData.avatar);

useEffect(() => {
const scrollReveal = () => {
document.querySelectorAll("[data-reveal]").forEach((el, index) => {
const elementIsInScreen = el.getBoundingClientRect().top < window.innerHeight / 1.15; setRevealed(prev=> {
  const newState = [...prev];
  newState[index] = elementIsInScreen;
  return newState;
  });
  });
  };

  window.addEventListener("scroll", scrollReveal);
  scrollReveal(); // Initial call to reveal elements in viewport on load

  return () => window.removeEventListener("scroll", scrollReveal);
  }, []);


  // Data Fatch
  const url = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';
  useEffect(() => {
  const fetchData = async () => {
  try {
  const response = await fetch(url);
  if (!response.ok) {
  throw new Error('Network response was not ok');
  }
  const data = await response.json();
  setAboutData(data.user.about)
  } catch (error) {
  console.error("There was a problem fetching the data:", error);
  }
  };

  fetchData();
  }, [url]); // Dependency array with URL ensures this effect runs when the URL changes

  return (
  <section className="section about" id="about" aria-label="about me">
    <div className="container">

      <div className="about-content">

        <h2 className={revealed ? "h2 section-title revealed" : "h2 section-title" } data-reveal="right">
          Hi. I’m <br />
          {aboutData.name}
        </h2>

        <div className={revealed ? "wrapper has-before revealed" : "wrapper has-before" } data-reveal="right">

          <p className="section-text">
            A passionate
            <em className="em"> {aboutData.title} </em>
            who are working in this field for
            <em className="em"> last {aboutData.exp_year} years. </em>
            I’m ready to give you my best.
          </p>

          <img src="./images/signature.png" width="151" height="92" loading="lazy" alt="signature" className="img" />

        </div>

      </div>

      <figure className={revealed ? "about-banner revealed" : "about-banner" } data-reveal="left">

        <div className="img-holder has-before" style={{"--width": "512", "--height": "684"}}>
          <img src={aboutData.avatar} width="512" height="684" loading="lazy" alt="Riachard Ryan"
            className="img-cover" />
        </div>

        <img src="./images/about-shape-1.png" width="178" height="178" loading="lazy" alt=""
          className="shape shape-1" />

        <img src="./images/about-shape-2.svg" width="659" height="653" loading="lazy" alt=""
          className="shape shape-2" />

      </figure>

      <img src="./images/about-shape-3.svg" width="239" height="232" loading="lazy" alt="" className="shape shape-3" />

    </div>
  </section>

  )
  }

  export default About