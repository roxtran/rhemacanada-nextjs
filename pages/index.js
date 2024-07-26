import { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Culture from "../components/Culture";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Leadership from "../components/Leadership";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Strategy from "../components/Strategy";
import Topbar from "../components/Topbar";

// import { motion } from 'framer-motion'

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {loading ? (
        <Loader loading={loading} setLoading={setLoading} />
      ) : (
        <>
          <div id="top"></div>
          <Topbar showMenu={showMenu} setShowMenu={setShowMenu} />
          <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
          <Hero />
          <Services />
          <About />
          <Culture />
          <Leadership />
          <Strategy />
          <Contact />
          <Feedback />
          <Footer />
        </>
      )}
    </>
  );
}
