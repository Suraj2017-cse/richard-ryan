import { useEffect, useState } from "react";

const Portfolio = () => {

    const [revealed, setRevealed] = useState([]);

useEffect(() => {
const scrollReveal = () => {
document.querySelectorAll("[data-reveal]").forEach((el, index) => {
const elementIsInScreen = el.getBoundingClientRect().top < window.innerHeight / 1.15; 
setRevealed(prev=> {
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
    
return (
<section className="section portfolio" id="portfolio" aria-labelledby="portfolio-label">
    <div className="container">

        <div className="portfolio-list">

            <div className="wrapper">

                <h2 className={revealed ? "h2 section-title revealed" :"h2 section-title"} id="portfolio-label" data-reveal>My Recent Work.</h2>

                <div className={revealed ? "portfolio-card revealed" :"portfolio-card"} data-reveal>

                    <figure className="card-banner img-holder has-before" style={{"--width": "700", "--height": "605"}}>
                        <img src="./images/portfolio-1.jpg" width="700" height="605" loading="lazy" alt="Shoe Promo"
                            className="img-cover" />
                    </figure>

                    <div className="card-content">
                        <h3 className="h4">
                            <a href="#" className="card-title">Shoe Promo</a>
                        </h3>

                        <p className="card-tag">Product</p>
                    </div>

                    <a href="#" className="btn-icon" aria-label="See more">
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                            <path d="M0 10H41" stroke="black" strokeWidth="2" />
                            <path d="M33 1L41.9 10.2727L33 19" stroke="black" strokeWidth="2" />
                        </svg>
                    </a>

                </div>

                <div className={revealed ? "portfolio-card revealed" :"portfolio-card"} data-reveal>

                    <figure className="card-banner img-holder has-before"
                        style={{"--width": "700", "--height": "1091"}}>
                        <img src="./images/portfolio-2.jpg" width="700" height="1091" loading="lazy" alt="Wedding Shot"
                            className="img-cover" />
                    </figure>

                    <div className="card-content">
                        <h3 className="h4">
                            <a href="#" className="card-title">Wedding Shot</a>
                        </h3>

                        <p className="card-tag">Wedding</p>
                    </div>

                    <a href="#" className="btn-icon" aria-label="See more">
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                            <path d="M0 10H41" stroke="black" strokeWidth="2" />
                            <path d="M33 1L41.9 10.2727L33 19" stroke="black" strokeWidth="2" />
                        </svg>
                    </a>

                </div>

            </div>

            <div className="wrapper">

                <div className={revealed ? "portfolio-card revealed" :"portfolio-card"} data-reveal>

                    <figure className="card-banner img-holder has-before"
                        style={{"--width": "700", "--height": "1000"}}>
                        <img src="./images/portfolio-3.jpg" width="700" height="1000" loading="lazy" alt="Fashion Show"
                            className="img-cover" />
                    </figure>

                    <div className="card-content">
                        <h3 className="h4">
                            <a href="#" className="card-title">Fashion Show</a>
                        </h3>

                        <p className="card-tag">Fashion, Model</p>
                    </div>

                    <a href="#" className="btn-icon" aria-label="See more">
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                            <path d="M0 10H41" stroke="black" strokeWidth="2" />
                            <path d="M33 1L41.9 10.2727L33 19" stroke="black" strokeWidth="2" />
                        </svg>
                    </a>

                </div>

                <div className={revealed ? "portfolio-card revealed" :"portfolio-card"} data-reveal>

                    <figure className="card-banner img-holder has-before" style={{"--width": '700', "--height": "850"}}>
                        <img src="./images/portfolio-4.jpg" width="700" height="850" loading="lazy" alt="Jumbo Barger"
                            className="img-cover" />
                    </figure>

                    <div className="card-content">
                        <h3 className="h4">
                            <a href="#" className="card-title">Jumbo Barger</a>
                        </h3>

                        <p className="card-tag">Food</p>
                    </div>

                    <a href="#" className="btn-icon" aria-label="See more">
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                            <path d="M0 10H41" stroke="black" strokeWidth="2" />
                            <path d="M33 1L41.9 10.2727L33 19" stroke="black" strokeWidth="2" />
                        </svg>
                    </a>

                </div>

            </div>

        </div>

        <img src="./images/portfolio-shape.svg" width="286" height="232" loading="lazy" alt="" className="shape" />

    </div>
</section>

)
}

export default Portfolio