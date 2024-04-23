import React from 'react'
import './header.css'
import Button from '../Button/Button'
import CV from '../../assets/CV_Truong_Minh_Hieu.pdf'
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'


function Header() {



    return (
        <section className='main_section header' id='home'>

            <div className='header_welcome'>
                <span>Hello! I'm a <br />Front End Developer</span>
                <div className='header_name'>
                    <span style={{ '--i': '1' }} className='letter'>T</span>
                    <span style={{ '--i': '2' }} className='letter'>R</span>
                    <span style={{ '--i': '3' }} className='letter'>U</span>
                    <span style={{ '--i': '4' }} className='letter'>O</span>
                    <span style={{ '--i': '5' }} className='letter'>N</span>
                    <span style={{ '--i': '6' }} className='letter'>G</span>
                    <span> </span>
                    <span style={{ '--i': '7' }} className='letter'>M</span>
                    <span style={{ '--i': '8' }} className='letter'>I</span>
                    <span style={{ '--i': '9' }} className='letter'>N</span>
                    <span style={{ '--i': '10' }} className='letter'>H</span>
                    <span> </span>
                    <span style={{ '--i': '11' }} className='letter'>H</span>
                    <span style={{ '--i': '12' }} className='letter'>I</span>
                    <span style={{ '--i': '13' }} className='letter'>E</span>
                    <span style={{ '--i': '14' }} className='letter'>U</span>
                </div>
                <div className='header_welcome-quote'>
                    <div>
                        <RiDoubleQuotesL />
                    </div>
                    What you are doing in your free time will define you!
                    <div>
                        <RiDoubleQuotesR />
                    </div>
                </div>
            </div>

            <div className='header_info'>
                <div className='header_info-avatar'>
                    <img src='https://res.cloudinary.com/dwp7umncy/image/upload/v1702986729/z4989930413294_4706c13f25a0eba211b745ee57e9c3b9_pduatq.jpg'></img>
                </div>
                <div className='header_info-button'>
                    <Button btnStyle='outline' btnText='Download CV' btnLink={'/'} download />
                    <Button btnStyle='primary' btnText="Let' Talk" btnLink='#contact' />
                </div>
            </div>



            <div className='header_socials'>
                <a href='https://www.instagram.com/mhieu151/' target='_blank'><AiFillInstagram /></a>
                <a href='https://www.facebook.com/m.hieu.truong.15' target='_blank'><BsFacebook /></a>
                <a href='https://github.com/hieutm1501' target='_blank'><AiFillGithub /></a>
                <div></div>
            </div>

            {/* Sub */}


            <div className='header_frame'>
                <div></div>
                <div></div>
            </div>

            <div className='header_scrolldown'><a href='#footer'>ScrollDown</a></div>


        </section>
    )
}

export default Header
