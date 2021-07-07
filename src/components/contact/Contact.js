import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import validator from 'validator';
import emailjs from 'emailjs-com';

const initial = {
    name: '',
    email: '',
    message: ''
}
const Contact = () => {
    const [data, setdata] = useState(initial)
    const handlechange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const { name, email, message } = data;
    // const submit = async (e) => {
    //     try {
    //         if (validator.isEmail(data.email) && !validator.isEmpty(data.email)) {
    //             const result = await axios.post('/sendEmail', data)
    //             toast.success('your message sent successfully, Thank you for your message', {
    //                 position: "bottom-left",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             })
    //         } else {
    //             toast.warning('your email is empty or not valid! plz enter a valid email', {
    //                 position: "bottom-left",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             })
    //         }
    //         setdata(initial)
    //     } catch (error) {
    //         console.log(error)
    //         toast.warning('your message do not send, plz cheak your email and enter a currect email', {
    //             position: "bottom-left",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         })
    //     }

    // }

    function sendEmail(e) {
        // alert('hi')
        e.preventDefault();
        if (validator.isEmail(data.email) && !validator.isEmpty(data.email)) {
            emailjs.sendForm('service_jkpjz4h', 'template_ridxc89', e.target, 'user_sLAy6xyJiefeOWeb3e84s')
                .then((result) => {
                    console.log(result.text);
                    toast.success('your message sent successfully, Thank you for your message', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    setdata(initial)
                }, (error) => {
                    console.log(error.text);
                    toast.warning('your message do not send, plz cheak your email and enter a currect email', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                });
        } else {
            toast.warning('your email is empty or not valid! plz enter a valid email', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }

    }
    return (
        <>
            <div className='min-h-screen w-screen mb-5' id='contact'>
                <div className='w-full'>
                    <div className='row '>
                        <div className='col-md-10 mx-auto text-center'>
                            <h1 className={`text-center mt-16 overflow-hidden`}>Contact</h1>
                            <hr className='w-3/12 mx-auto' />
                        </div>
                        <div className='col-md-12 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 mx-auto ' style={{ height: '80vh' }}>
                                    <img className='w-full h-full' src="assets/jaconda-1.png" alt="" />
                                </div>
                                <div className='col-md-6 mx-auto '>
                                    <form class="row mt-md-5" onSubmit={sendEmail}>
                                        <div class="col-8 mx-auto mt-5">
                                            <input name='name' value={name} onChange={handlechange} type="text" class="form-control" placeholder="First name" aria-label="First name" placeholder='Enter your Name' />
                                        </div>
                                        <div class="col-8 mx-auto mt-5">
                                            <input name='email' value={email} onChange={handlechange} type="email" class="form-control" placeholder="First name" aria-label="First name" placeholder='Enter your Email' />
                                        </div>
                                        <div class="col-8 mx-auto mt-5">
                                            <textarea name='message' value={message} onChange={handlechange}
                                                class="form-control" id="exampleFormControlTextarea1" rows="7" placeholder='Youe Message' ></textarea>
                                        </div>
                                        <div class="col-8 mx-auto my-2">
                                            <Button type='submit' variant='contained' color='primary' fullWidth >send</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default Contact