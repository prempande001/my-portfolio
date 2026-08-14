
import Contact from "../components/Contact/Contact.jsx"

import About from "../components/About/About.jsx"
import Skills from "../components/Skills/Skills.jsx"
import Projects from "../components/Projects/Projects.jsx"
import Experience from "../components/Experience/Experience.jsx"
import Profiles from "../components/Profiles/Profiles.jsx"
import ScrollZoom from "../components/common/ScrollZoom.jsx"






function Landing() {
  return (
    <div>
      <About />

      <ScrollZoom zoomFrom={0.9}>
        <Skills />
      </ScrollZoom>

      <ScrollZoom zoomFrom={0.92}>
        <Profiles />
      </ScrollZoom>

      <ScrollZoom zoomFrom={0.9}>
        <Projects />
      </ScrollZoom>

      <ScrollZoom zoomFrom={0.92}>
        <Experience />
      </ScrollZoom>

      <ScrollZoom zoomFrom={0.94} intensity={0.7}>
        <Contact />
      </ScrollZoom>

    </div>
  )
}

export default Landing
