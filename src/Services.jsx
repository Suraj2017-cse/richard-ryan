import { useState, useEffect } from 'react';

const Services = () => {

const [revealed, setRevealed] = useState([]);
const [serviceData, setServiceData] = useState([])
//  const [isLoading, setIsLoading] = useState(true);
// const showData = serviceData.user.services

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
  setServiceData(data.user.services)
  } catch (error) {
  console.error("There was a problem fetching the data:", error);
  }
  };

  fetchData();
  }, [url]); // Dependency array with URL ensures this effect runs when the URL changes


  return (
  <section className="section service" id="service" aria-labelledby="service-lable">

    <p className="section-subtitle container" id="service-lable">My Services</p>

    <ul className="service-list">

      {
        serviceData.map((data)=>{
          return(
                <li key={data._id} data-reveal className={revealed ? 'revealed' : '' }>
        <div className="service-card container">

          <img src={data.image.url} width="340" height="380" loading="lazy" alt="Wedding Photography"
            className="img" />

          <div>
            <h3 className="h3 card-title">{data.name}</h3>

            <p className="card-subtitle">
             {data.desc}
            </p>
          </div>

          <a href="#" className="btn-icon" aria-label="See more">
            {data.charge}
          </a>

        </div>
      </li>
          )
        })
      }

        {/* <li data-reveal className={revealed ? 'revealed' : '' }>
        <div className="service-card container">

          <img src="./images/service-1.jpg" width="340" height="380" loading="lazy" alt="Wedding Photography"
            className="img" />

          <div>
            <h3 className="h3 card-title">Wedding Photography</h3>

            <p className="card-subtitle">
              Aut temporibus qui vero.
            </p>
          </div>

          <a href="#" className="btn-icon" aria-label="See more">
            454
          </a>

        </div>
      </li>

      <li data-reveal>
        <div className="service-card container">

          <img src="./images/service-2.jpg" width="340" height="380" loading="lazy" alt="Event Organiser"
            className="img" />

          <div>
            <h3 className="h3 card-title">Event Organiser</h3>

            <p className="card-subtitle">
              Nobis, magni modi ipsa culpa.
            </p>
          </div>

          <a href="#" className="btn-icon" aria-label="See more">
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
              <path d="M0 10H41" stroke="white" strokeWidth="2" />
              <path d="M33 1L41.9 10.2727L33 19" stroke="white" strokeWidth="2" />
            </svg>
          </a>

        </div>
      </li>

      <li data-reveal>
        <div className="service-card container">

          <img src="./images/service-3.jpg" width="340" height="380" loading="lazy" alt="Product Marketing"
            className="img" />

          <div>
            <h3 className="h3 card-title">Product Marketing</h3>

            <p className="card-subtitle">
              Tenetur porro repellendus!
            </p>
          </div>

          <a href="#" className="btn-icon" aria-label="See more">
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
              <path d="M0 10H41" stroke="white" strokeWidth="2" />
              <path d="M33 1L41.9 10.2727L33 19" stroke="white" strokeWidth="2" />
            </svg>
          </a>

        </div>
      </li>

      <li data-reveal>
        <div className="service-card container">

          <img src="./images/service-4.jpg" width="340" height="380" loading="lazy" alt="Videography" className="img" />

          <div>
            <h3 className="h3 card-title">Videography</h3>

            <p className="card-subtitle">
              Amet consectetur adipisicing elit
            </p>
          </div>

          <a href="#" className="btn-icon" aria-label="See more">
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
              <path d="M0 10H41" stroke="white" strokeWidth="2" />
              <path d="M33 1L41.9 10.2727L33 19" stroke="white" strokeWidth="2" />
            </svg>
          </a>

        </div>
      </li> */}

    </ul>

  </section>

  )
  }

  export default Services