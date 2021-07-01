import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Leadership from '../components/Leadership'
import Strategy from '../components/Strategy'
import Contact from '../components/Contact'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <Topbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Hero />
      <Services />
      <About />
      <Leadership />
      <Strategy />
      <Contact />
      <Feedback />
      <Footer />
    </>
  )
}
