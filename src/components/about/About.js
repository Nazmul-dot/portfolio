import React from 'react'
import { Container, Toolbar } from '@material-ui/core'
const About = () => {
    return (
        <>
            {/* <Toolbar /> */}
            <div className='min-vh-100 w-screen px-3  d-flex justify-content-center align-items-center  ' id='about'>
                <div className='ml-2 mr-5 my-2 shadow-2xl'>
                    <h1 className={`text-center mt-16  overflow-hidden`}>About Me</h1>
                    <hr className='w-3/12 mx-auto' />
                    <div className='container-fluid '>
                        <div className='row'>
                            <div className='col-md-4 mx-auto  '>
                                <div className='h-full w-full d-flex align-items-center'>
                                    <img src="assets/nazu.JPG" className='my-2' style={{ borderRadius: '10px' }} alt="" />
                                </div>
                            </div>
                            <div className='col-md-4 mx-auto  d-flex align-items-md-start flex-column'>
                                <h2 className='overflow-hidden'>Info</h2>
                                <hr className='w-2/12' />
                                <div className='  md:mt-10'>
                                    <div>
                                        <span ><b>Name</b>  : Nazmul Haque Shakil</span><br />
                                        <span ><b>Profession</b>  : Full Mern Stack Developer</span><br />
                                        <span className='text-xl' style={{ color: '#00CED1' }}><b style={{ color: '#800080' }}>Email</b>   : nazmulhaq606834@gmail.com</span><br />
                                        <span className='text-xl' style={{ color: '#00CED1' }}><b style={{ color: '#800080' }}>Phone</b>  : +8801516064143</span>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-4 mx-auto  py-3'>
                                <h2 className='overflow-hidden'>Skill</h2>
                                <hr className='w-2/12' />
                                <div>
                                    <span>Html/Css/Bootstrap/Tailwaind/SCSS/Material Ui/Styled Componend</span>
                                    <div class="progress mr-2">
                                        <div class="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                                </div>
                                <div>
                                    <span>Java Scrript/Jquery</span>
                                    <div class="progress mr-2">
                                        <div class="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                                    </div>
                                </div>
                                <div>
                                    <span>Reactjs</span>
                                    <div class="progress mr-2">
                                        <div class="progress-bar" role="progressbar" style={{ width: '87%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                                    </div>
                                </div>
                                <div>
                                    <span>Nodejs/Express/MongoDB</span>
                                    <div class="progress mr-2">
                                        <div class="progress-bar" role="progressbar" style={{ width: '87%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                                    </div>
                                </div>
                                <div>
                                    <span>Firebase/Heroku</span>
                                    <div class="progress mr-2">
                                        <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-10 mx-auto shadow-2xl my-4 rounded-lg'>
                                <h3 className='text-center overflow-hidden text-purple-600'>Know me</h3>
                                <hr className='w-3/12 mx-auto' />
                                <p>
                                    An aspiring MERN Stack Developer.I lost myself when I dive into the codes. I am a professional web designer and developer.No project is too big or too small for me. Recently I have completed react and node js. I am expertise in Html5,Css3,Javascript,Bootstrap,Jquery,React,Node JS,Express JS,Mongo DB.

                                    Resourceful Web Developer lends hands-on approach to customizing web presence strategy. More than 2 years of experience working closely with Web Development to outline organizational needs and translate them into extensive lines of code that support objectives. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Specialty supporting intricate backend needs and lending assistance throughout webpage lifecycle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
