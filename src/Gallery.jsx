import { useState, useEffect } from "react";

const Gallery = () => {

const [projectData, setProjectData] = useState([])
// console.log(projectData);

const url = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';
useEffect(() => {
const fetchData = async () => {
try {
const response = await fetch(url);
if (!response.ok) {
throw new Error('Network response was not ok');
}
const data = await response.json();
setProjectData(data.user.projects)

} catch (error) {
console.error("There was a problem fetching the data:", error);
}
};

fetchData();
}, [url]);

return (
// GALLERY
<section className="section gallery" id="gallery">
    <div className="container">

        <ul className="gallery-list">

            {
            projectData.map((data)=>{
            return( 
            <li key={data._id} className="gallery-item" data-reveal>

                <div className="gallery-card">

                    <figure className="card-banner img-holder has-before" style={{"--width": "450", "--height": "625"}}>
                        <img src={data.image.url} width="450" height="625" loading="lazy" alt="The Drunken"
                            className="img-cover" />
                    </figure>

                    <div className="card-content">
                        <h3 className="h6">
                            <a href="#" className="card-title">{data.title}</a>
                        </h3>

                        <span className="card-tag">{(data.techStack.length > 1) ? data.techStack + "," : data.techStack
                                }</span> </div> <a href="#" className="btn-icon">
                                <img src="./images/arrow-forward.svg" width="43" height="20" loading="lazy"
                                    alt="arrow-forward icon" />
                                </a>

                    </div>

                    <div className="gallery-card">

                        <figure className="card-banner img-holder has-before"
                            style={{"--width": "450", "--height": "625"}}>
                            <img src={data.image.url} width="450" height="625" loading="lazy" alt="Lettuce Entertain"
                                className="img-cover" />
                        </figure>

                        <div className="card-content">
                            <h3 className="h6">
                                <a href="#" className="card-title">{data.title}</a>
                            </h3>

                            <span className="card-tag">{(data.techStack.length > 1) ? data.techStack + "," : data.techStack
                                }</span>
                        </div>

                        <a href="#" className="btn-icon">
                            <img src="./images/arrow-forward.svg" width="43" height="20" loading="lazy"
                                alt="arrow-forward icon" />
                        </a>

                    </div>

            </li>
            )
            })
            }
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