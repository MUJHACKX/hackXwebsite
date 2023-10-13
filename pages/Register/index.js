import React, {useState} from "react";
import {RegisterData} from "../../components/RegisterData";

const Register = () => {
    const [reg, setReg] = useState('');

    const handleChange = (event) => {
        setReg(event.target.value);
    };
    return(
        <>
            <div className='font'>
                <div className='bg-dracula text-dracxt font-mono'>
                    <div className='font-mono text-dracxt h-auto bg-dracula sticky top-0 z-20'>
                        <div className='bg-pracula'>
                           
                        </div>
                    </div>
                    <div className='xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw]'>
                        <div className='h-screen my-auto'>
                            <div className='justify-center' >
                                <h1 className='lg:text-6xl text-4xl text-center text-pracula font-semibold pt-[2.5vh]'>REGISTER</h1>
                            </div>
                            <div>
                                <div className='items-center justify-center flex mt-[7.5vh] lg:mt-[12.5vh] mb-[5vh]'>
                                    <select value={reg} onChange={handleChange} className="h-8 lg:w-[50vw] w-full rounded-lg border-r-8 border-accent border-opacity-0 bg-secondary backdrop-blur-0 text-dracula px-4 text-sm font-semibold outline outline-1 outline-dracxt">
                                        <option selected className='bg-dracula text-pracula'>Select a Category</option>
                                        {RegisterData.map((RegData, index) => (
                                            <option className='bg-dracula text-pracula' value={RegData.value}>{RegData.data}</option>
                                        ))
                                        }

                                    </select>
                                </div>
                                <div className='items-center justify-center flex mb-[10vh]'>
                                    <div>
                                        <a href={reg} type='submit' className='hover:text-pracula mt-4 px-4 py-1 border-2 border-pracula hover:bg-accent bg-pracula rounded-lg'>
                                            SUBMIT
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-auto xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw] lg:w-[50vw] text-justify justify-center items-center'>
                                <ul className='list-disc'>
                                    <li>
                                        Click "Register Now" below to register your team.
                                    </li>
                                    <li>
                                        Team size should be minimum 2 and max upto 4.
                                    </li>
                                    <li>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, itaque.
                                    </li>
                                    <li>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure nobis earum optio modi nulla id quaerat eaque! Commodi, ratione!
                                    </li>
                                    <li>
                                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis eaque asperiores laudantium recusandae vitae neque dolores nemo aperiam praesentium earum.s
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;
