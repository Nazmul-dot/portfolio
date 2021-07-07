import React from 'react'
import { Container, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
const useStyle = makeStyles((theme) => ({
    li: {

    }
}))
const Navbar = () => {
    return (
        <>
            <div className='container-fluid bg-dark position-fixed ' style={{ zIndex: 9999999999999 }}>
                <Container maxWidth='md' >
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container-fluid">
                            <a class="navbar-brand" href='#home'>Nazmul</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li class="nav-item mx-3">
                                        <a class="nav-link " href="/#">Home</a>
                                    </li>
                                    <li class="nav-item mx-3">
                                        <a class="nav-link" href="#about">About Me</a>
                                    </li>
                                    <li class="nav-item mx-3">
                                        <a class="nav-link" href="#service">Service</a>
                                    </li>
                                    <li class="nav-item mx-3">
                                        <a class="nav-link" href="#contact">Contact</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </Container>
            </div>
            {/* <Toolbar /> */}


        </>
    )
}

export default Navbar


