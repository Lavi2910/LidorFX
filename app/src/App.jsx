import './App.css'
import { NavBar } from './UI/Navbar'
import { MainSection } from './UI/MainSection'
import { Data } from './UI/Data'
import { Results } from './UI/Results'
import { AboutMe } from './UI/AboutMe'
import { ResultsWall } from './UI/ResultsWall'
import { ForWho } from './UI/ForWho'
import { Method } from './UI/Method'
import { Pricing } from './UI/Pricing'
import { Testimonials } from './UI/Testimonials'
import { FAQ } from './UI/FAQ'
import { Footer } from './UI/Footer'

function App() {

  return (
    <>
      <NavBar/>
      <MainSection/>
      <Data/>
      <AboutMe/>
      <ForWho/>
      <Method/>
      <ResultsWall/>
      <Results/>
      <Pricing/>
      <Testimonials/>
      <FAQ/>
      {/* TODO: CTA אחרון */}
      <Footer/>
    </>
  )
}

export default App
