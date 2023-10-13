import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Schedule = () => {
    useEffect(() => {
        AOS.init({
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            debounceDelay: 50,
            throttleDelay: 99,
            offset: 120,
            // delay: 200,
            duration: 400,
            easing: 'ease',
            anchorPlacement: 'top-bottom',

        });
    }, [])
    return(
        <div className='bg-primary bg-fixed'>
            <div className='md:pb-[10%] pb-[30%] pt-[35%] md:pt-[10%] h-full bg-primary'>
                <div className='justify-center flex' data-aos="fade-up">
                    {/*component*/}
                    <div className="bg-primary bg-fixed container justify-center items-center justify-items-center align-middle flex">
                        <div
                            className="bg-primary bg-fixed flex flex-col md:grid grid-cols-9 text-dracxt"
                        >
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents" >
                                <div
                                    className="bg-accent md:text-right lg:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md" data-aos="fade-up"
                                >
                                    <h3 className="font-semibold text-pracula text-4xl mb-1">OCTOBER 06</h3>
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">21:00</h3>
                                    <p className="leading-tight md:text-right">
                                        Problem Statements will be released on Website
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-end justify-center">
                                        <div className="h-[50%] w-1 bg-accent pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-accent pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-accent w-full lg:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-8 mr-auto shadow-md" data-aos="fade-up"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">21:00 - 00:00</h3>
                                    <p className="leading-tight">
                                        Participant are to choose their Problem Statement on which They'll work and submit the Statement on Forms
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-accent md:text-right lg:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md" data-aos="fade-up"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">23:00</h3>
                                    <p className="leading-tight md:text-right">
                                        Introductory Section With Ieee Executive Guest (Online)
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-accent pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-accent pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-accent w-full lg:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-8 mr-auto shadow-md" data-aos="fade-up"
                                >
                                    <h3 className="font-semibold text-pracula text-4xl mb-1">OCTOBER 07</h3>
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">00:00</h3>
                                    <p className="leading-tight">
                                        Hackathon Starts!!
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-accent md:text-right lg:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md" data-aos="fade-up"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">11:00 - 13:00</h3>
                                    <p className="leading-tight md:text-right">
                                        Mentoring session 1(Cisco WebX Meet)
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-accent pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-accent pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-accent w-full lg:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-8 mr-auto shadow-md" data-aos="fade-up"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">14:00 - 26:00</h3>
                                    <p className="leading-tight">
                                        Evaluation session 1
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-accent md:text-right lg:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md" data-aos="fade-up"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">18:00 - 20:00</h3>
                                    <p className="leading-tight md:text-right">
                                        Mentoring session 2(Cisco WebX Meet)
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-accent pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-accent pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-accent w-full lg:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-8 mr-auto shadow-md" data-aos="fade-up"
                                >
                                    <h3 className="font-semibold text-pracula text-4xl mb-1">OCTOBER 08</h3>
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">11:00 - 13:00</h3>
                                    <p className="leading-tight">
                                        Mentoring session 3(Cisco WebX Meet)
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-accent md:text-right lg:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md" data-aos="fade-up"
                                >
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">14:00 - 16:00</h3>
                                    <p className="leading-tight md:text-right">
                                        Evaluation session 2
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-center justify-center">
                                        <div className="h-full w-1 bg-accent pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                            </div>
                            {/*right*/}
                            <div className="flex md:contents">
                                <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                                    <div className="h-[50%] w-6 flex items-start justify-center">
                                        <div className="h-full w-1 bg-accent pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
                                </div>
                                <div
                                    className="bg-accent w-full lg:w-[70%] bg-opacity-10 backdrop-blur-0 border-pracula border col-start-6 col-end-10 p-4 rounded-lg my-8 mr-auto shadow-md" data-aos="fade-up"
                                >

                                    <h3 className="font-semibold text-pracula text-2xl mb-1">18:00 - 23:59</h3>
                                    <p className="leading-tight">
                                        Submission Form will be open
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-dracula text-dracxt font-mono'>
                    <div className='xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw]'>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Schedule;