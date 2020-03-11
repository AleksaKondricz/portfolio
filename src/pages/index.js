import React,{useState} from "react"

import Fade from 'react-reveal/Fade';
import RuberBand from 'react-reveal/RubberBand';

import projectData from '../constants/projectsData';
import projectFullContent from '../constants/projectsFullContent';

import Layout from '../layout/layout'
import { Divider,  NavSlider, PhotoFrame} from "../components/components";
import {Form} from '../containers/containers'
import {ExtendedCard, NavCard} from "../cards/cards"

import copy from '../locale/copy.json'

import styles from './index.module.css';




const renderHero = () => {
  
return(
    <>
    <div className={styles.decorativeDiv} id='home'></div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
       <path fill="#fcb042" fill-opacity="1" d="M0,192L40,160C80,128,160,64,240,58.7C320,53,400,107,480,112C560,117,640,75,720,85.3C800,96,880,160,960,170.7C1040,181,1120,139,1200,128C1280,117,1360,139,1400,149.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
    </svg>
    <RuberBand>
<h1 className={styles.heroTitle}>{copy.home['heroTitle-0']}<mark>{copy.home['heroTitle-1']}</mark></h1>
    </RuberBand>
    </>
)
}

const renderAbout = () => {
    return(
        <Fade bottom>
        <section className={styles.aboutSection} id='about'>
            <div className={styles.aboutContent}>
                <h2>{copy.about['aboutTitle']}</h2>
                <p>{copy.about['aboutContent-0']}</p>
                <p>{copy.about['aboutContent-1']}</p>
                <p>{copy.about['aboutContent-2']}</p>
            </div>
             <img src='images/circlesDark.svg' alt=''/>
             <PhotoFrame/>
        </section>
        </Fade>
    )
}

const renderTechnology = () => {
    return(
        <>
<Fade bottom>
        <Divider label='Technologies'/>
        
        <section className={styles.techSection} id='technologies'>
            <p>{copy.tech['techContent']}</p>
            <Fade bottom>
            <div className={styles.techImage}>
                <img src='images/barchart.svg' alt='Barchart of tech stack'/>
            </div>
            </Fade>
        </section>
        </Fade>
        </>
    )
}

const renderContact = () => {
    return(
        <>
        <Fade bottom>
        <Divider label='Contact' />
        <section className={styles.contactSection} id='contact'>
            <Form/>
        </section>
        </Fade>
        </>
    )
}

const IndexPage = () => {
    const [cardSelected, setCardSelected] = useState(0)
    return(
    <Layout>
        <main className={styles.mainPageWrapper}>
         {renderHero()}
         {renderAbout()}
         {renderTechnology()}
         <>
         <Divider label='Projects'/>
        <section className={styles.projectsSection} id='projects'>
            <Fade left>
            <div className={styles.cardNavMobile}>
            <NavSlider updateCardContent={setCardSelected}>
            {projectData.map(p => <NavCard onClick={()=>setCardSelected(p.id)}  id={p.id} stylingProp={p.stylingProp} title={p.title} content={p.content} imageSrc={p.imageSrc}/>)}
            </NavSlider>
            </div>
            </Fade>
            <Fade left>
            <div className={styles.cardNav}>
           {projectData.map(p => <NavCard onClick={()=>setCardSelected(p.id)}  id={p.id} stylingProp={p.stylingProp} title={p.title} content={p.content} imageSrc={p.imageSrc}/>)}
           </div>
           </Fade>
           <Fade right>
           <div className={styles.cardContentWindow}>
               {projectFullContent.filter(project => project.id === cardSelected).map(project =>(
           <ExtendedCard title={project.title} content={project.content} id={project.id} techStack={project.techStack} url={project.url}/>  
               ))}
           </div>
           </Fade>
        </section>
         </>
         {renderContact()}
        </main>
    </Layout>)
}

export default IndexPage;
