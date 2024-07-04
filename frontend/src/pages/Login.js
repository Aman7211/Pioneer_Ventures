import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginForm';
import SignupForm from '../components/Login/SignupForm';
import image from '../assets/images/1.jpg';
import frameImg from '../assets/images/2.jpg'; 

export default function Login() {
    const [formType, setFormType] = useState('login'); // State to toggle between login and signup forms
    const title = "Welcome To Pioneer Ventures";
    const description1 = "We Provides the best Solution for Your Website ... ";
    const description2 = "Our one of the Verticles in the Field of IT";

    const handleFormTypeChange = (type) => {
        setFormType(type);
    };

    return (
        <>
            <div>
                <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
                    <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
                        <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
                            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
                                {title}
                            </h1>
                            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
                                <span className="text-blue-800 font-semibold">{description1}</span>{" "}
                                <span className="font-edu-sa font-bold italic mt-2 text-red-600">
                                    {description2}
                                </span>
                            </p>
                            {formType === "signup" ? <SignupForm /> : <LoginForm />}
                            {formType === "login" ? (
                                <p className=" mx-2 mt-4 text-sm">
                                    Don't have an account?{" "}
                                    <button
                                        className="text-blue-800 font-semibold"
                                        onClick={() => handleFormTypeChange("signup")}
                                    >
                                        Sign Up
                                    </button>
                                </p>
                            ) : (
                                <p className=" mx-2 mt-4 text-sm">
                                    Already have an account?{" "}
                                    <button
                                        className="text-blue-800 font-semibold"
                                        onClick={() => handleFormTypeChange("login")}
                                    >
                                        Log In
                                    </button>
                                </p>
                            )}
                        </div>
                        <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0 ">
                            <img
                                src={frameImg}
                                alt="Pattern"
                                width={410}
                                height={404}
                                loading="lazy"
                                className='rounded-xl '
                            />
                            <img
                                src={image}
                                alt="food"
                                width={558}
                                height={504}
                                loading="lazy"
                                className="absolute top-[30px] right-[75px] z-10 rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
