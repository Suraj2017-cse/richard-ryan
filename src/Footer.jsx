
const Footer = () => {
  return (
    
     <footer className="footer">

    <div className="footer-top section" id="contact">
      <div className="container">

        <p className="section-subtitle" data-reveal>Contact Us</p>

        <h2 className="h2 section-title" data-reveal>
          Work inquiry, Job oportunities? Send Message.
        </h2>

        <a href="#" className="btn-icon" data-reveal >
          <img src="./images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
        </a>

        <img src="./images/footer-1.jpg" width="159" height="176" loading="lazy" alt="photography"
          className="abs-img abs-img-1" data-reveal />

        <img src="./images/footer-2.jpg" width="265" height="275" loading="lazy" alt="photography"
          className="abs-img abs-img-2" data-reveal />

        <img src="./images/footer-3.jpg" width="303" height="272" loading="lazy" alt="photography"
          className="abs-img abs-img-3" data-reveal  />

        <img src="./images/footer-4.jpg" width="175" height="175" loading="lazy" alt="photography"
          className="abs-img abs-img-4" data-reveal  />

        <img src="./images/footer-shape.svg" width="185" height="134" loading="lazy" alt="" className="shape" />

      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">

        <a href="#" className="logo">
          <img src="./images/logo.svg" width="40" height="40" loading="lazy" alt="Richard home" />
        </a>

        <ul className="social-list">

          <li>
            <a href="#" className="social-link">Fa.</a>
          </li>

          <li>
            <a href="#" className="social-link">Insta.</a>
          </li>

          <li>
            <a href="#" className="social-link">Tw.</a>
          </li>

        </ul>

        <p className="copyright">Made with love</p>

      </div>
    </div>

    <div className="footer-bg has-before">
      <img src="./images/footer-bg.jpg" width="1920" height="1135" loading="lazy" alt="photography"
        className="img-cover" />
    </div>

  </footer>

  )
}

export default Footer