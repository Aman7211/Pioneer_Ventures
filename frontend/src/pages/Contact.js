import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from  'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Contact = () => {
    const navigate = useNavigate();
    const [data, setData]= useState({firstname: "",lastname: "", email:"", mobile:"", message:""});

    const changeHandler = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      };

    const submitHandler = async(e)=>{
        e.preventDefault();
        try {
          const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/contact/form`, data);
          toast.success('Contact Form Submitted Successfully. You will get the call soon .. ');
          navigate('/'); 
        } catch (error) { 
          toast.error("Registration Failed. Try Again")
        }
    }

    return (
        <>
        <section className="defg py-12 md:py-24 ">
        <div className="  container px-4 md:px-6 overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
            <p className="text-gray-800 font-medium text-lg md:text-xl">
              Have a question or want to work together? Fill out the form below or send us an email at{" "}
              <Link to="#" className="underline">
                hello@pioneerventures.com 
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
        <section className="flex justify-center items-center min-h-screen abc">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:relative bg-[#790205] text-white p-6 rounded-lg shadow-lg h-[300px] md:h-[370px] md:ml-20 my-4 md:my-auto z-10">
                    <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
                    <ul className="">
                        <li className="flex items-start mb-4">
                        <LocationOnIcon/>
                            <span>
                                A-142 Ab Star <br />
                                Noida, Sector - 63 <br />
                                11472
                            </span>
                        </li>
                        <li className="flex items-center mb-4">
                        <EmailIcon/>
                            <span><Link to="mailto:amanrathore9811@gmail.com" className="text-white">amanrathore9811@gmail.com</Link></span>
                        </li>
                        <li className="flex items-center">
                        <CallIcon />
                            <span>702-279-3488</span>
                        </li>
                    </ul>
                    <ul className="flex mt-8">
                        <li className="mr-4"><Link to="https://www.facebook.com//" ><FacebookIcon/></Link></li>
                        <li className="mr-4"><Link to="https://www.instagram.com/"><InstagramIcon/></Link></li>
                        <li className="mr-4"><Link to="https://twitter.com/" ><TwitterIcon/></Link></li>
                        <li><Link to="https://www.linkedin.com/" ><LinkedInIcon /></Link></li>
                    </ul>
                </div>
                <div className="relative md:ml-[-70px] z-0 bg-white p-8 rounded-lg shadow-lg md:pl-[100px] mx-3 md:mr-40">
                    <h2 className="text-2xl font-semibold mb-8">Send a Message</h2>
                    <form className="formBox flex flex-wrap -mx-4" onSubmit={submitHandler}>
                        <div className=" w-full md:w-1/2 px-4 mb-4">
                        <input type="text" name='firstname' value={data.firstname} onChange={changeHandler} className="w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder:text-gray-800" placeholder='Enter First Name' required />
                        </div>
                        <div className=" w-full md:w-1/2 px-4 mb-4">
                            <input type="text" name='lastname' value={data.lastname} onChange={changeHandler} className="w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder:text-gray-800" placeholder='Enter Last Name' required />
                      
                        </div>
                        <div className=" w-full md:w-1/2 px-4 mb-4">
                            <input type="email" name='email' value={data.email} onChange={changeHandler} className="w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder:text-gray-800" placeholder='Enter Your Email' required />
                            
                        </div>
                        <div className=" w-full md:w-1/2 px-4 mb-4">
                            <input type="number" name='mobile' value={data.mobile} onChange={changeHandler} className="w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500  placeholder:text-gray-800" placeholder='Enter Your Mobile No.' required />
                          
                        </div>
                        <div className=" w-full px-4 mb-4">
                            <textarea name='message' value={data.message} onChange={changeHandler} className="w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 h-40 placeholder:text-gray-800" placeholder='Enter Your Message Here ...' required></textarea>
  
                        </div>
                        <div className=" w-full px-4 mb-4">
                            <input type="submit" value="Send" className="bg-[#790205] text-white py-2 px-5 rounded cursor-pointer hover:bg-green-900" />
                        </div>
                    </form>
                </div>
            </div>
    
        </section>
    
        </>
    );
}

export default Contact;




