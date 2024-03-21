
const Hero = () => {


  
  
  return (
    <section className="section hero" id="home" aria-label="home">
        <div className="container">

          <img src="./images/hero-banner.png" width="322" height="322" alt="" className="hero-banner" />

          <div className="hero-content">

            <h1 className="h1 hero-title">Richard Ryan</h1>

            <div className="wrapper h2">
              {/* <strong className="strong" data-letter-effect>Photographer</strong> */}
              {/* <strong className="strong" data-letter-effect>Shutterbug</strong> */}
              <strong className="strong" data-letter-effect>Cameraman</strong>
              {/* <strong className="strong" data-letter-effect>Pacific Portraits</strong> */}
            </div>

            <p className="hero-text">15+ Years Of Experience</p>

          </div>

        </div>

        <img src="./images/hero-shape.svg" width="211" height="189" alt="" className="shape" />

      </section>
  )
}

export default Hero