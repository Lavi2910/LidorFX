import './App.css'
import { NavBar } from './UI/Navbar'
import { MainSection } from './UI/MainSection'
import { Data } from './UI/Data'
import { Results } from './UI/Results'
import { LidorResults } from './UI/LidorResults'
import { AboutMe } from './UI/AboutMe'

function App() {

  return (
    <>
      <NavBar/>
      <MainSection/>
      <Data/>
      <AboutMe/>
      <Results/>
    </>
  )
}

export default App
