import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Tools from '../components/Tools'
import Projects from '../components/Projects'
import Aboutme from '../components/Aboutme'

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Tools />
            <Projects />
            <Aboutme />
        </>
    )
}

export default Home