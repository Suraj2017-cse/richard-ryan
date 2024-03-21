import { useState, useEffect } from "react";


const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [isfixed, setIsFixed] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const closeNav = () => {
    setIsActive(false);
  };

  // Assuming you have CSS classes that match these conditions
  const navBarClasses = isActive ? "navbar active" : "navbar";
  const overlayClasses = isActive ? "overlay active" : "overlay";
//   const bodyClasses = isActive ? "body active" : "body";

useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Attach scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
return (
<header className={isfixed ? "header active": "header"} data-header>
    <div className="container">

        <a href="#" className="logo">
            <img src="./images/logo.svg" width="40" height="40" alt="Richard home" />
        </a>

        <button className="nav-open-btn" aria-label="open menu" data-nav-toggler onClick={toggleNav}>
            <img src="./images/menu.svg" width="17" height="17" alt="menu icon" />
        </button>

        <nav className={navBarClasses} data-navbar>

            <div className="navbar-top">
                <a href="#" className="logo">
                    <img src="./images/nav-logo.svg" width="140" height="40" alt="Richard home" className="img" />
                </a>

                <button className="nav-close-btn" aria-label="close menu" data-nav-toggler onClick={toggleNav}>
                    <span className="span one"></span>
                    <span className="span two"></span>
                </button>
            </div>

            <ul className="navbar-list">

                <li className="navbar-item">
                    <a href="#home" className="navbar-link" data-nav-link>Home</a>
                </li>

                <li className="navbar-item">
                    <a href="#gallery" className="navbar-link" data-nav-link>Gallery</a>
                </li>

                <li className="navbar-item">
                    <a href="#about" className="navbar-link" data-nav-link>About</a>
                </li>

                <li className="navbar-item">
                    <a href="#services" className="navbar-link" data-nav-link>Services</a>
                </li>

                <li className="navbar-item">
                    <a href="#portfolio" className="navbar-link" data-nav-link>Portfolio</a>
                </li>

                <li className="navbar-item">
                    <a href="#contact" className="navbar-link" data-nav-link>Contact us</a>
                </li>

            </ul>

            <button className="login-btn">
                <img src="./images/user.svg" width="21" height="21" alt="user icon" />

                <span className="span">Login</span>
            </button>

            <p className="navbar-title">My Address</p>

            <address className="navbar-text">
                3287 Indiana Avenue, Waialua, Hawaii
            </address>

            <p className="navbar-text">
                Urgent issue? call us at
                <a href="tel:8085613846" className="contact-link">808-561-3846</a>
            </p>

        </nav>

        <div className={overlayClasses} data-nav-toggler data-overlay onClick={closeNav}></div>

    </div>
</header>

)
}

export default Header