import React, {useState} from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import {TextInput, TextArea, Button} from '../../components/components'

import styles from './form.module.css'


const EMAIL_REGEXP = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const ENDPOINT = `https://us-central1-konkop-software.cloudfunctions.net/contact`


const Form = () => {

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
    return (
   <>
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
            </>
    );
}
 
export default Form;