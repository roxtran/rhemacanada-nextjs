import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Leadership from '../components/Leadership'

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Leadership />
    </>
  )
}
