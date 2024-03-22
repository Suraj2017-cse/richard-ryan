import About from './About'
import './App.css'
import BackTopButton from './BackTopButton'
import Category from './Category'
import CustomCursor from './CustomCurser'
import Footer from './Footer'
import Gallery from './Gallery'
import Header from './Header'
import Hero from './Hero'
import Portfolio from './Portfolio'
import Services from './Services'

function App() {

return (
<>
  <Header />
  <main>
    <article>
      {/* HERO */}
      <Hero />
      {/* GALLERY & PROJECTS */}
      <Gallery />
      {/* CATEGORY */}
      <Category />
      {/* ABOUT */}
      <About />
      {/* SERVICES */}
      <Services />
      {/* PORTFOLIO */}
      <Portfolio />

    </article>
  </main>
  {/* FOOTER */}
  <Footer />
  {/* - #BACK TO TOP */}
  <BackTopButton />
  {/* - #CUSTOM CURSOR */}
  <CustomCursor />

</>
)
}

export default App