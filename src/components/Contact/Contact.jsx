import React, { useRef, useEffect, useContext } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
// import { topContext } from '../../App'
import { SiGmail } from 'react-icons/si'
import { RiMessengerLine } from 'react-icons/ri'

function Contact() {

    // const contactRef = useRef()
    // const value = useContext(topContext)
    const form = useRef()

    // useEffect(() => {
    //     value[1](state => {
    //         state[0].contactTop = contactRef.current.offsetTop
    //         return state
    //     })
    // }, [])

    function handleSubmit(e) {
        e.preventDefault()
        emailjs.sendForm('service_0ank5du', 'template_m8mac28', form.current, 'XozuwMD8NleOuyKIO')
        alert('Email sent!')
        e.target.reset()
    }

    return (
        <section className='main_section' id='contact' >

            <div className='section_header'>
                <span>Get In Touch</span>
                <h3>Contact Me</h3>
            </div>

            <div className="contact_container">
                <div className="contact_container-left">

                    <form className="main_drop" onSubmit={(e) => handleSubmit(e)} ref={form}>
                        <input name='name' type="text" placeholder='Your Full Name' required />
                        <input name='mail' type="email" placeholder='Your Email' required />
                        <textarea name='message' id="" rows='8' placeholder='Your Message' required />
                        <button type='submit'>Send Message</button>
                    </form>

                </div>

                <div className="contact_container-right">
                    <div className="sub_drop">
                        <SiGmail />
                        <a href="mailto:hieuhop2003@gmail.com" target='_blank'>Send Email</a>
                    </div>
                    <div className="sub_drop">
                        <RiMessengerLine />
                        <a href='https://m.me/m.hieu.truong.15/' target='_blank'>Send Message</a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Contact
