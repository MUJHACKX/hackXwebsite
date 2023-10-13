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
                                    <h3 className="font-semibold text-pracula text-3xl mb-1">Oct 3 - Oct 24</h3>
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">Registration Begins</h3>
                                    <p className="leading-tight md:text-right">
                                        Register from Oct 3 - 24 for extended hackathon participation.
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
                                    <h3 className="font-semibold text-pracula text-3xl mb-1">Oct 26, 10:00 - 12:00</h3>
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">Opening</h3>
                                    <p className="leading-tight">
                                        Kick-off event, welcome, and event introduction.
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-accent md:text-right lg:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md" data-aos="fade-up"
                                >
                                    <h3 className="font-semibold text-pracula text-3xl mb-1">Oct 26-27, 12:00 - 03:00</h3>
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">Round 1</h3>
                                    <p className="leading-tight md:text-right">
                                        Participants work on initial hacking projects.
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
                                    <h3 className="font-semibold text-pracula text-3xl mb-1">Oct 27, 06:00</h3>
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">Round 1 Results</h3>
                                    <p className="leading-tight">
                                        Announce round 1 winners and achievements.
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-accent md:text-right lg:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md" data-aos="fade-up"
                                >
                                    <h3 className="font-semibold text-pracula text-3xl mb-1">Oct 27, 06:00 - 14:00</h3>
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">Round 2</h3>
                                    <p className="leading-tight md:text-right">
                                        Participants advance to the next hacking phase.
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
                                    <h3 className="font-semibold text-pracula text-3xl mb-1">Oct 27, 14:30 - 17:00</h3>
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">Presentation</h3>
                                    <p className="leading-tight">
                                        Teams present their projects and innovations.
                                    </p>
                                </div>
                            </div>
                            {/*left*/}
                            <div className="flex flex-row-reverse md:contents">
                                <div
                                    className="bg-accent md:text-right lg:w-[70%] w-full bg-opacity-10 backdrop-blur-0 border-pracula border col-start-1 col-end-5 p-4 rounded-lg my-8 ml-auto shadow-md" data-aos="fade-up"
                                >
                                    <h3 className="font-semibold text-pracula text-3xl mb-1">Oct 27, 18:00</h3>
                                    <h3 className="font-semibold text-pracula text-2xl mb-1">Result Declared</h3>
                                    <p className="leading-tight md:text-right">
                                        Announce final winners and award prizes.
                                    </p>
                                </div>
                                <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                                    <div className="h-full w-6 flex items-start justify-center">
                                        <div className="h-[50%] w-1 bg-accent pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent bg-opacity-100 backdrop-blur-0 border-pracula border shadow"
                                    ></div>
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