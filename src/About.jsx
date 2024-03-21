
const About = () => {
  return (
    // ABOUT
      <section className="section about" id="about" aria-label="about me">
        <div className="container">

          <div className="about-content">

            <h2 className="h2 section-title" data-reveal="right">
              Hi. I’m <br />
              Richard Ryan
            </h2>

            <div className="wrapper has-before"  data-reveal="right">

              <p className="section-text">
                A passionate
                <em className="em">photograher</em>
                who are working in this field for
                <em className="em">last 10 years.</em>
                I’m ready to give you my best.
              </p>

              <img src="./images/signature.png" width="151" height="92" loading="lazy" alt="signature"
                className="img" />

            </div>

          </div>

          <figure className="about-banner" data-reveal="left">

            <div className="img-holder has-before" style={{"--width": "512", "--height": "684"}}>
              <img src="./images/about-banner.jpg" width="512" height="684" loading="lazy" alt="Riachard Ryan"
                className="img-cover" />
            </div>

            <img src="./images/about-shape-1.png" width="178" height="178" loading="lazy" alt=""
              className="shape shape-1" />

            <img src="./images/about-shape-2.svg" width="659" height="653" loading="lazy" alt=""
              className="shape shape-2" />

          </figure>

          <img src="./images/about-shape-3.svg" width="239" height="232" loading="lazy" alt=""
            className="shape shape-3" />

        </div>
      </section>

  )
}

export default About