import React from 'react'
// State
import { useGetUsersQuery } from '../app/apiSlice'
// Components
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import BackToTop from '../components/BackToTop'
// Config
import { filteredProjects, moreInfo } from '../config'
import { updateTitle } from '../utils'

const Home = () => {
  const { data: userData } = useGetUsersQuery()

  React.useEffect(() => {
    updateTitle(`${userData.name} | Portfolio`)
  }, [userData])

  return (
    <>
      <Hero name={userData.name} />
      <main>
        {/* CAMBIAR AQUI LO QUE QUIERO PONER ( en bio={userData.bio} ) */}
        <AboutMe
          avatarUrl={userData.avatar_url}
          bio={userData.bio}
          moreInfo={moreInfo}
        />
        <Skills />
        <Projects filteredProjects={filteredProjects} />
        <Contact />
      </main>
      <BackToTop />
    </>
  )
}

export default Home
