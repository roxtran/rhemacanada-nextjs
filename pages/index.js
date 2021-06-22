import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Leadership from '../components/Leadership'
import Strategy from '../components/Strategy'

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Leadership />
      <Strategy />
    </>
  )
}
