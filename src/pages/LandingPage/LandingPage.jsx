import Header from '../Header/Header'
import MainPerfil from '../sections/SectionMain/MainPerfil'
import AboutMe from '../sections/SectionAbout/AboutMe'
import Tecnologie from '../sections/SectionTecnology/Skills'
import Projects from '../sections/SectionProjects/Projects'


import Footer from '../Footer/Footer'

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainPerfil />
        <AboutMe />
        <Tecnologie />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default LandingPage