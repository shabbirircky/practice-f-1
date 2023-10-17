import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import Hero from './Hero'
import Footer from './Footer'
import SectionOne from './SectionOne'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl font-bold text-red-700 underline">
        Hello world!
      </h1>
      <br />
      <NavBar />
      <br />
      <div className="rating gap-1">
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" checked />
        <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
        <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" checked />
        <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" checked />
        <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" checked />
      </div>
      <br />
      <Contact />
      <br />
      <Hero />
      <br />
      <SectionOne />
      <br />

      <Footer />
    </>
  )
}

export default App
