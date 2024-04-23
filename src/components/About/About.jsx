import React from 'react'

import './about.css'

const About = () => {

    return (
        <div>
            <section className='main_section shadow' id='about' >

                <div className='section_header'>
                    <span>Get To Know</span>
                    <h3>About Me</h3>
                </div>

                <div className='about_content'>
                    <div className='about_content-img'><img src='https://res.cloudinary.com/dwp7umncy/image/upload/v1679506034/IMG_E2083_powxsv.jpg' /></div>
                    <p>
                        Welcome to visit my personal Website!<br /> <br />
                        <span>N</span>ame: TRƯƠNG MINH HIẾU. <br />
                        <span>B</span>irthday: 15/01.<br />
                        <span>B</span>orn: a poetic place - Hà Nam. <br />
                        <span>L</span>iving:  HA Noi City, District Cau Giay. <br /><br />
                        <span>I</span>'m a a student at FPT Polytechnic and have a long-term passion for design and especially PROGRAMMING.<br />
                        <span>I</span>'m a SELF-TAUGHT front end developer looking for an entry-level position. Hope to learn and gain experience working in a front-end role towards FULL-STACK through many projects. <br /><br />
                        Also would like to learn and solve difficult problems within a team environment to help a business accelerate and grow.<br />
                        <span>F</span>urthermore, I am a guy who loves football and ... <span>"Never too late to begin!"</span>
                    </p>
                </div>

            </section>
        </div>
    )
}

export default About