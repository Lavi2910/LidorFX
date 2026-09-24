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
import { FAQ } from './UI/Faq'
import { Footer } from './UI/Footer'
import { AccessibilityMenu } from './UI/Components/AccessibilityMenu'

function App() {

  return (
    <>
      <a href="#main-content" className="skip-link">דילוג לתוכן הראשי</a>
      <NavBar/>
      <main id="main-content" tabIndex={-1} className="outline-none">
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
      </main>
      <Footer/>
      <AccessibilityMenu/>
    </>
  )
}

export default App
