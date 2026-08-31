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
      {/* TODO: המלצות */}
      {/* TODO: שאלות נפוצות */}
      {/* TODO: CTA אחרון + פוטר + דיסקליימר */}
    </>
  )
}

export default App
