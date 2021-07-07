import React from 'react'
import { Container, Toolbar } from '@material-ui/core'
import './style.css'
import { makeStyles } from '@material-ui/core/styles'
const useStyl = makeStyles((theme) => ({
    img: {
        backgroundImage: `url(assets/nazmul.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundAttachment: 'fixed'
    },
    font: {
        fontSize: '20px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '40px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '60px'
        },
        color: '#fff'
    },
    h2: {
        fontSize: '35px',
        [theme.breakpoints.up('md')]: {
            fontSize: '45px'
        },
    }

}))
const Home = () => {
    const classes = useStyl();
    return (
        <>

            <div className={`vh-100 vw-100 border ${classes.img}`} id='home'>
                <div className=' text-center overflow-hidden mt-64'>
                    <h2 className={`overflow-hidden capitalize  ${classes.h2}`}>welcome in my personal portfolio</h2>
                    <h1 className={`home capitalize text-center ml-2 ${classes.font}`}>Hi! I am a MERN Stack Developer</h1>
                </div>
            </div>
        </>
    )
}

export default Home