import Image from "next/image";
import { TeamData } from "../../components/TeamData"
// const PujanModha = require("../../public/Team/AmitSoni.jpg");

const Team = () => {
  return <div className="h-[100] bg-primary">
    <h2 className='h2 text-center mb-12 text-accent pt-[20vh]'>TEAM</h2>
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-20 pt-30">
     {TeamData.map((teams, index) => (
                <div key={index}>
                    <div className='border p-2 bg-accent bg-opacity-10 border-accent font-mono rounded-xl'>
                        <div className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:shadow-2xl">
                            {/* <img
                                // className="object-cover rounded-lg w-full aspect-[3/4]"
                                src={teams.personImage}
                                alt={teams.personName}
                            /> */}
                            <Image
                                className="object-cover rounded-lg w-full aspect-[3/4]"
                                src={teams.personImage} 
                                width={1000}
                                height={1000}
                                alt={teams.personName}
                            ></Image>
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-accent bg-opacity-100 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-3xl font-bold text-primary">
                                    {teams.personName}
                                </p>
                                <p className="mb-4 text-lg lg:text-base text-primary">{teams.personPosition}</p>
                                <p className="mb-4 text-lg lg:text-base text-primary">{teams.personOrganization}</p>
                                {/*<p className="mb-4 text-sm text-dracula">*/}
                                {/*    {teams.personOrganization}*/}
                                {/*</p>*/}
                                {/* <div className="flex items-center justify-center">
                                    <a
                                        href={teams.personLinkedIn}
                                        className="text-accent"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.75em" viewBox="0 0 448 512" fill="#282a36"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
  </div>;
};

export default Team;
