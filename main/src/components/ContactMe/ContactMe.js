import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import load from '../../assets/load2.gif'
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { VscSmiley } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";


// import imgBack from '../../assets/mailz.jpeg'
import './ContactMe.css'

export default function ContactMe() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [alertMsg, setAlertMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const numberHandler = (e) => {
        setNumber(e.target.value)
    }
    const messageHandler = (e) => {
        setMessage(e.target.value)
    }

    const submitFormHandler = async (e) => {
        e.preventDefault()
        try {
            let data = {
                name,
                email,
                number,
                message
            }
            console.log(data)
            setIsLoading(true)
            const response = await axios.post('https://mustaqportfolio.herokuapp.com/#contact', data)
            if (name.length === 0 || email.length === 0 || message.length === 0) {
                setAlertMsg(response.data.msg)
                toast.error(response.data.msg)
                setIsLoading(false)
            } else if (response.status === 200) {
                setAlertMsg(response.data.msg)
                toast.success(response.data.msg)
                setIsLoading(false)
                setName('')
                setEmail('')
                setNumber('')
                setMessage('')
            }
        } catch (error) {
            console.log(error);
        }
    }

    // const personalDetails = [
    //     "Name : MD Mustaq Ahmed",
    //     "Phone-Number : 8867322632 / 8431582522",
    //     "Email : mdmustaq.ahmed.mail@gmail.com / mustaq.ahmed.codes@gmail.com",
    //     "Current Address : Bengaluru",
    //     "Postal Address : 1/103 Islampur, Basavakalyan, Bidar Karnataka India 585331"
    // ]

    return (
        <div className='main-container'>
            <h1>CONTACT ME</h1>
            <div className="contact-me-card">
                <div className="contact-me-content">
                    <div className="contact-form">
                        <div className="title">
                            <h1 className="title-main"> Contact Form</h1>
                        </div>
                        <h2 className="primary-title">Send Your Email Here...!</h2>
                        <form className='form-controller' onSubmit={submitFormHandler}>
                            <p className='alertMsg'>{alertMsg}</p>
                            <div className="form-inputs">
                                <label htmlFor="name">Name :</label>
                                <input value={name} type="text" onChange={nameHandler} placeholder='Enter your Name' />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="email">Email :</label>
                                <input value={email} type="email" onChange={emailHandler} placeholder='Enter your Email' />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="pno">Phone-Number(Optional) :</label>
                                <input value={number} type="text" onChange={numberHandler} placeholder='Enter your Phone Number' />
                            </div>
                            <div className="form-inputs form-input-textarea">
                                <label htmlFor="message">Message :</label>
                                <textarea value={message} onChange={messageHandler} name="message" id="message" cols="30" rows="10" placeholder='Enter your Message'></textarea>
                            </div>
                            <div className="send-btn">
                                <button type="submit">Send
                                    {isLoading ? (<b className='load'>
                                        <img src={load} alt="No internet" />
                                    </b>) : ("")}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-details">
                        <h1 className="title-main center-personal-details-header"> Contact Details</h1>
                        <div className="personal-details">
                            {/* {personalDetails.map((pDetail, i) => (
                                <span key={i}>
                                    <div className="bullet-point"></div>
                                    {pDetail}
                                </span>
                            ))} */}
                            <span><VscSmiley/>  MD Mustaq Ahmed</span>
                            <span><FiPhoneCall/> 8867322632 / 8431582522</span>
                            <span><FiMail/> mdmustaq.ahmed.mail@gmail.com / mustaq.ahmed.codes@gmail.com</span>
                            <span><FiMapPin/>  Bengaluru</span>
                            <span><AiOutlineHome/> 1/103 Islampur, Basavakalyan, Bidar Karnataka India 585331 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}