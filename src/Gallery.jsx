const Gallery = () => {
return (
// GALLERY
<section className="section gallery" id="gallery">
    <div className="container">

        <ul className="gallery-list">

            <li className="gallery-item" data-reveal>

                <div className="gallery-card">

                    <figure className="card-banner img-holder has-before" style={{"--width": "450", "--height": "625"}}>
                        <img src="./images/gallery-1.jpg" width="450" height="625" loading="lazy" alt="The Drunken"
                            className="img-cover" />
                    </figure>

                    <div className="card-content">
                        <h3 className="h6">
                            <a href="#" className="card-title">The Drunken</a>
                        </h3>

                        <span className="card-tag">Food, Event</span>
                    </div>

                    <a href="#" className="btn-icon">
                        <img src="./images/arrow-forward.svg" width="43" height="20" loading="lazy"
                            alt="arrow-forward icon" />
                    </a>

                </div>

                <div className="gallery-card">

                    <figure className="card-banner img-holder has-before" style={{"--width": "450", "--height": "625"}}>
                        <img src="./images/gallery-2.jpg" width="450" height="625" loading="lazy"
                            alt="Lettuce Entertain" className="img-cover" />
                    </figure>

                    <div className="card-content">
                        <h3 className="h6">
                            <a href="#" className="card-title">Lettuce Entertain</a>
                        </h3>

                        <span className="card-tag">Landscape</span>
                    </div>

                    <a href="#" className="btn-icon">
                        <img src="./images/arrow-forward.svg" width="43" height="20" loading="lazy"
                            alt="arrow-forward icon" />
                    </a>

                </div>

            </li>

            <li className="gallery-item" data-reveal>

                <div className="gallery-card">

                    <figure className="card-banner img-holder has-before" style={{"--width": "450", "--height": "625"}}>
                        <img src="./images/gallery-3.jpg" width="450" height="625" loading="lazy" alt="Leaping Lizard"
                            className="img-cover" />
                    </figure>

                    <div className="card-content">
                        <h3 className="h6">
                            <a href="#" className="card-title">Leaping Lizard</a>
                        </h3>

                        <span className="card-tag">Model, Fashion</span>
                    </div>

                    <a href="#" className="btn-icon">
                        <img src="./images/arrow-forward.svg" width="43" height="20" loading="lazy"
                            alt="arrow-forward icon" />
                    </a>

                </div>

                <div className="gallery-card">

                    <figure className="card-banner img-holder has-before" style={{"--width": "450", "--height": "625"}}>
                        <img src="./images/gallery-4.jpg" width="450" height="625" loading="lazy" alt="Juan More Taco"
                            className="img-cover" />
                    </figure>

                    <div className="card-content">
                        <h3 className="h6">
                            <a href="#" className="card-title">Juan More Taco</a>
                        </h3>

                        <span className="card-tag">Architecture, Event</span>
                    </div>

                    <a href="#" className="btn-icon">
                        <img src="./images/arrow-forward.svg" width="43" height="20" loading="lazy"
                            alt="arrow-forward icon" />
                    </a>

                </div>

            </li>

            <li className="gallery-item" data-reveal>

                <div className="gallery-card">

                    <figure className="card-banner img-holder has-before" style={{"--width": "450", "--height": "625"}}>
                        <img src="./images/gallery-5.jpg" width="450" height="625" loading="lazy" alt="Goldilox Bagels"
                            className="img-cover" />
                    </figure>

                    <div className="card-content">
                        <h3 className="h6">
                            <a href="#" className="card-title">Goldilox Bagels</a>
                        </h3>

                        <span className="card-tag">People, Film</span>
                    </div>

                    <a href="#" className="btn-icon">
                        <img src="./images/arrow-forward.svg" width="43" height="20" loading="lazy"
                            alt="arrow-forward icon" />
                    </a>

                </div>

                <div className="gallery-card">

                    <figure className="card-banner img-holder has-before" style={{"--width": "450", "--height": "625"}}>
                        <img src="./images/gallery-6.jpg" width="450" height="625" loading="lazy" alt="Cookie Monstah"
                            className="img-cover" />
                    </figure>

                    <div className="card-content">
                        <h3 className="h6">
                            <a href="#" className="card-title">Cookie Monstah</a>
                        </h3>

                        <span className="card-tag">Wedding, Event</span>
                    </div>

                    <a href="#" className="btn-icon">
                        <img src="./images/arrow-forward.svg" width="43" height="20" loading="lazy"
                            alt="arrow-forward icon" />
                    </a>

                </div>

            </li>

            <li className="gallery-item" data-reveal>

                <div className="gallery-card">

                    <figure className="card-banner img-holder has-before" style={{"--width": "450", "--height": "625"}}>
                        <img src="./images/gallery-7.jpg" width="450" height="625" loading="lazy"
                            alt="Divine Pastabilities" className="img-cover" />
                    </figure>

                    <div className="card-content">
                        <h3 className="h6">
                            <a href="#" className="card-title">Divine Pastabilities</a>
                        </h3>

                        <span className="card-tag">Wedding, Model</span>
                    </div>

                    <a href="#" className="btn-icon">
                        <img src="./images/arrow-forward.svg" width="43" height="20" loading="lazy"
                            alt="arrow-forward icon" />
                    </a>

                </div>

                <div className="gallery-card">

                    <figure className="card-banner img-holder has-before" style={{"--width": "450", "--height": "625"}}>
                        <img src="./images/gallery-8.jpg" width="450" height="625" loading="lazy" alt="The Lockhart Bar"
                            className="img-cover" />
                    </figure>

                    <div className="card-content">
                        <h3 className="h6">
                            <a href="#" className="card-title">The Lockhart Bar</a>
                        </h3>

                        <span className="card-tag">Health & Wellnes</span>
                    </div>

                    <a href="#" className="btn-icon">
                        <img src="./images/arrow-forward.svg" width="43" height="20" loading="lazy"
                            alt="arrow-forward icon" />
                    </a>

                </div>

            </li>

        </ul>

        <a href="#service" className="scroll-down">
            <img src="./images/scroll-down.svg" width="40" height="66" loading="lazy" alt="mouse scroll" />
        </a>

        <img src="./images/gallery-shape.svg" width="220" height="78" loading="lazy" alt="" className="shape" />

    </div>
</section>

)
}

export default Gallery