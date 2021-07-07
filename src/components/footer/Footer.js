import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
const Footer = () => {
    return (
        <>
            <footer className='bg-gray-500 text-center py-2'>
                <div>
                    <a className='' target='_blank' href="https://www.facebook.com/">
                        <FacebookIcon className='text-white ml-5 ' style={{ fontSize: '40px' }} />
                    </a>
                    <a target='_blank' href="https://www.instagram.com/">
                        <InstagramIcon className='text-white ml-5' style={{ fontSize: '40px' }} />
                    </a>
                    <a target='_blank' href="">
                        <TwitterIcon className='text-white ml-5' style={{ fontSize: '40px' }} />
                    </a>
                </div>
                <h3 className='overflow-hidden text-white'>
                    @{new Date().getFullYear()} Copyright:Nazmul Haque
                </h3>
            </footer>
        </>
    )
}

export default Footer
