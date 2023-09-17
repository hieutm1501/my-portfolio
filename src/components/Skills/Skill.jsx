import React from 'react'
import './skill.css'
import Card from './Card'

import { AiOutlineHtml5, } from 'react-icons/ai'
import { DiCss3, DiAngularSimple, DiNodejs } from 'react-icons/di'
import { SiJavascript, SiTailwindcss, SiBootstrap, SiAntdesign, SiMongodb } from 'react-icons/si'
import { RiReactjsFill, } from 'react-icons/ri'
import { BsGit, BsFillDatabaseFill } from 'react-icons/bs'
import { TbBrandRedux, TbBrandTypescript, } from 'react-icons/tb'


const skills = ['html', 'css', 'javascript', 'reactjs', 'git', 'tailwind', 'bootstrap', 'typescript', 'redux', 'database', 'angular', 'nodejs', 'antd', 'mongodb']
const skillsColor = ['#e34f26', '#1b73ba', '#e9ca32', '#61dafb', '#e84d31', '#f2f2f2', '#45a7e1', '#2f74c0', '#7347b6', '#f68410', '#f2d96b', '#a31d23', '#ea901d', '#7347b6',]

const htmlCom = function (index) {
    const html = <AiOutlineHtml5 />
    const css = <DiCss3 />
    const javascript = <SiJavascript />
    const react = <RiReactjsFill />
    const git = <BsGit />
    const tailwind = <SiTailwindcss />
    const bootstrap = <SiBootstrap />
    const typescript = <TbBrandTypescript />
    const redux = <TbBrandRedux />
    const database = <BsFillDatabaseFill />
    const angular = <DiAngularSimple />
    const nodejs = <DiNodejs />
    const antd = <SiAntdesign />
    const mongodb = <SiMongodb />


    const skillsIcon = [html, css, javascript, react, git, tailwind, bootstrap, typescript, redux, database, angular, nodejs, antd, mongodb]

    return skillsIcon[index]
}

function Skill() {

    // const skillRef = useRef()
    // const value = useContext(topContext)

    // useEffect(() => {
    //     value[1](state => {
    //         state[0].skillTop = skillRef.current.offsetTop
    //         return state
    //     })
    // }, [])

    return (
        <section className='main_section shadow' id='skills' >

            <div className='section_header'>
                <span>What i have ?</span>
                <h3>Skills</h3>
            </div>

            <div className="skills_container">
                {skills.map((skill, index) => {
                    return <Card key={index} cardColor={skillsColor[index]} cardIcon={htmlCom(index)} cardName={skill} />
                })}
            </div>
        </section>
    )
}

export default Skill
