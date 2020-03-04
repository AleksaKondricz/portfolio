import React, {useState} from "react"
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import RuberBand from 'react-reveal/RubberBand';
import Loader from 'react-loader-spinner'
import Layout from '../layout/layout'
import projectData from '../constants/projectsData';
import projectFullContent from '../constants/projectsFullContent';
import styles from './index.module.css';
import PhotoFrame from "../components/photoFrame/photoFrame";
import { Divider, Card, TextInput, TextArea, Button, NavSlider} from "../components/components";


const EMAIL_REGEXP = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const ENDPOINT = `https://us-central1-konkop-software.cloudfunctions.net/contact`

const IndexPage = () => {
    const [cardSelected, setCardSelected] = useState(0)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const[message, setMessage] = useState('')
    const[loading, isLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async () => {
        try {
            setError(false)
            isLoading(true) 
             await axios.post(ENDPOINT, {name: fullName,  email: email,  description: message, source: 'AleksaKondricz'})
             isLoading(false)
           
            }
        catch(error){
            isLoading(false)
            setError(true)
        }
    
       
    }


    return(
    <Layout>
        <main className={styles.mainPageWrapper}>
            <div className={styles.decorativeDiv} id='home'></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
           <path fill="#fcb042" fill-opacity="1" d="M0,192L40,160C80,128,160,64,240,58.7C320,53,400,107,480,112C560,117,640,75,720,85.3C800,96,880,160,960,170.7C1040,181,1120,139,1200,128C1280,117,1360,139,1400,149.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
        <RuberBand>
        <h1 className={styles.heroTitle}>Step into my <mark>office!</mark></h1>
        </RuberBand>
        <Fade bottom>
        <section className={styles.aboutSection} id='about'>
            <div className={styles.aboutContent}>
                <h2>Who am I?</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p><p>
Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p><p>
Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
            </div>
             <img src='images/circlesDark.svg'/>
             <PhotoFrame/>
        </section>
        </Fade>
        <Fade bottom>
        <Divider label='Technologies'/>
        
        <section className={styles.techSection} id='technologies'>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
           
            <Fade bottom>
            <div className={styles.techImage}>
                <img src='images/barchart.svg'/>
            </div>
            </Fade>
        </section>
        </Fade>
        
 
        <Divider label='Projects'/>
        <section className={styles.projectsSection} id='projects'>
            <Fade left>
            <div className={styles.cardNavMobile}>
            <NavSlider updateCardContent={setCardSelected}>
            {projectData.map(p => <Card onClick={()=>setCardSelected(p.id)}  id={p.id} stylingProp={p.stylingProp} title={p.title} content={p.content} imageSrc={p.imageSrc}/>)}
            </NavSlider>
            </div>
            </Fade>
            <Fade left>
            <div className={styles.cardNav}>
           {projectData.map(p => <Card onClick={()=>setCardSelected(p.id)}  id={p.id} stylingProp={p.stylingProp} title={p.title} content={p.content} imageSrc={p.imageSrc}/>)}
           </div>
           </Fade>
           <Fade right>
           <div className={styles.cardContentWindow}>

               {projectFullContent.filter(project => project.id === cardSelected).map(project =>(
          
                <div className={styles.visibleCard }>
                     <h3><mark className={styles.highlight}>{project.title}</mark></h3>
                     <p>{project.content}</p>
                     <h6>What technologies did I use? </h6>
                     <p>{project.techStack}</p>
                     <h6>Visit the site: </h6>
                     <a target='_blank' id={styles.projectUrl} href={project.url}>{project.url}</a>
                   </div>
              
                
               ))}
              
              
           </div>
           </Fade>
        </section>
        
          <Fade bottom>
        <Divider label='Contact' />
        <section className={styles.contactSection} id='contact'>
  
            <div className={styles.contactForm} >
                <div className={styles.inputsArea}>
                   <TextInput name='fullName' type='text' label='Your Name' value={fullName} onChange={e => setFullName(e.target.value) }/>
                   <TextInput name='email' type='text' label='Your Email' useValidation validator={EMAIL_REGEXP} value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                   <TextArea name='message' type='text' placeholder='How can I help you? ' value={message} onChange={e => setMessage(e.target.value)}/>
                  {!loading ? <Button onClick={()=>handleSubmit()} type='primary' label='Reach Out' /> :
                      <Loader
                            type="ThreeDots"
                            color="#ffc107"
                            height={70}
                            width={70}
                         />}
            </div>
            {error && <p className={styles.errorMessage}>Ops! An Error has happened. Please try again.</p>}
            
        </section>
        </Fade>
        </main>
    </Layout>)
}

export default IndexPage;
