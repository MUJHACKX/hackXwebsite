import Image from "next/image";
import { TeamData } from "../../components/TeamData";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Team = () => {
  const [show, setShow] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
    setShow(true);
  }, [controls]);

  const chiefPatron = TeamData.find((team) => team.personPosition === "CHIEF PATRON");
  const patron = TeamData.find((team) => team.personPosition === "PATRON");
  const coPatrons = TeamData.filter((team) => team.personPosition === "CO-PATRON");
  const secondLineMembers = TeamData.filter(
    (team) =>
      team.personName === "Dr. Sandeep Chaurasia" ||
      team.personName === "Dr. Amit Soni" ||
      team.personName === "Dr. Dinesh Saini"
  );
  const thirdLineMembers = TeamData.filter(
    (team) =>
      team.personName === "Dr. Neha Chaudhary" ||
      team.personName === "Dr. Santosh Kumar Vishwakarma"
  );
  const fifthLineMembers = TeamData.filter(
    (team) =>
      team.personName === "Dr. Juhi Singh" ||
      team.personName === "Mr. Shishir Singh"
  );

  return (
    <div className="bg-primary min-h-screen w-screen">
      <h2 className="h2  text-center mb-12 text-accent pt-[20vh]">TEAM</h2>

      <div className="flex flex-col align-middle w-full bg-primary ">
  <h2 className="text-center text-4xl text-white font-bold my-4">Patron</h2>
  <hr className="mb-4" />
  <div className="flex flex-wrap justify-center md:justify-around">
    {chiefPatron && (
      <div className="flex flex-col " style={{ maxWidth: '300px' }}>
        <div className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl hover:-translate-y-2 ">
          <Image
            className="object-cover rounded-lg w-100 h-150 lg:w-64 lg:h-64"
            src={chiefPatron.personImage}
            width={700}
            height={1000}
            alt={chiefPatron.personName}
          ></Image>
        </div>
        <div className="px-5 py-4 text-white text-center flex-grow">
          <h1 className="mb-4 text-3xl font-bold text-white">{chiefPatron.personName}</h1>
          <h2 className="mb-4 text-lg lg:text-base text-white">{chiefPatron.personPosition}</h2>
          <h3 className="mb-4 text-lg lg:text-base text-white">{chiefPatron.personOrganization}</h3>
        </div>
      </div>
    )}

    {patron && (
      <div className="flex flex-col items-start" style={{ maxWidth: '300px' }}>
        <div className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl hover:-translate-y-2 ">
          <Image
            className="object-cover rounded-lg w-100 h-150 lg:w-64 lg:h-64"
            src={patron.personImage}
            width={700}
            height={1000}
            alt={patron.personName}
          ></Image>
        </div>
        <div className="px-5 py-4 text-white text-center flex-grow">
          <p className="mb-4 text-3xl font-bold text-white">{patron.personName}</p>
          <p className="mb-4 text-lg lg:text-base text-white">{patron.personPosition}</p>
        </div>
      </div>
    )}
  </div>
</div>
{coPatrons.length > 0 && (
  <>
    <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Co-Patron</h2>
    <hr className="mb-4" />
    <div className="flex flex-wrap justify-center md:justify-around bg-primary">
      {coPatrons.map((coPatron, index) => (
        <div key={index} className="flex flex-col " style={{ maxWidth: '300px' }}>
          <div className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl hover:-translate-y-2 ">
            <Image
              className="object-cover rounded-lg w-100 h-150 lg:w-64 lg:h-64"
              src={coPatron.personImage}
              width={700}
              height={1000}
              alt={coPatron.personName}
            ></Image>
          </div>
          <div className="px-5 py-4 text-white text-center flex-grow">
            <p className="mb-4 text-3xl font-bold text-white overflow-hidden text-ellipsis whitespace-nowrap">
              {coPatron.personName}
            </p>
            <p className="mb-4 text-lg lg:text-base text-white">{coPatron.personPosition}</p>
            <p className="mb-4 text-lg lg:text-base text-white">{coPatron.personOrganization}</p>
          </div>
        </div>
      ))}
    </div>
  </>
)}

        {secondLineMembers.length > 0 && (
          <>
            <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Chair</h2>
            <hr className="mb-4 bg-primary" />
            <div className="flex flex-wrap justify-center md:justify-around bg-primary ">
            {secondLineMembers.map((member, index) => (
  <div key={index} className="flex flex-col " style={{ maxWidth: '300px' }}>
    <div className="relative overflow-hidden transition duration-300 transform rounded-lg hover:scale-105 hover:shadow-3xl hover:-translate-y-2 ">
      <Image
        className="object-cover rounded-lg w-100 h-150 lg:w-64 lg:h-64"
        src={member.personImage}
        width={700}
        height={1000}
        alt={member.personName}
      ></Image>
    </div>
    <div className="px-5 py-4 text-white text-center flex-grow">
      <p className="mb-4 text-3xl font-bold text-white overflow-hidden text-ellipsis whitespace-nowrap">
        {member.personName}
      </p>
      <p className="mb-4 text-lg lg:text-base text-white">{member.personPosition}</p>
      <p className="mb-4 text-lg lg:text-base text-white">{member.personOrganization}</p>
    </div>
  </div>
))}
            </div>
          </>
        )}

        {thirdLineMembers.length > 0 && (
          <>
            <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Program Chair</h2>
            <hr className="mb-4 bg-primary" />
            <div className="flex flex-wrap justify-center md:justify-around bg-primary ">
            {thirdLineMembers.map((member, index) => (
  <div key={index} className="flex flex-col " style={{ maxWidth: '300px' }}>
    <div className="relative overflow-hidden transition duration-300 transform rounded-lg hover:scale-105 hover:shadow-3xl hover:-translate-y-2 ">
      <Image
        className="object-cover rounded-lg w-100 h-150 lg:w-64 lg:h-64"
        src={member.personImage}
        width={700}
        height={1000}
        alt={member.personName}
      ></Image>
    </div>
    <div className="px-5 py-4 text-white text-center flex-grow">
      <p className="mb-4 text-3xl font-bold text-white overflow-hidden text-ellipsis whitespace-nowrap">
        {member.personName}
      </p>
      <p className="mb-4 text-lg lg:text-base text-white">{member.personPosition}</p>
      <p className="mb-4 text-lg lg:text-base text-white">{member.personOrganization}</p>
    </div>
  </div>
))}
            </div>
          </>
        )}

{fifthLineMembers.length > 0 && (
  <>
    <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Convener</h2>
    <hr className="mb-4 bg-primary" />
    <div className="flex flex-wrap justify-center md:justify-around bg-primary ">
      {fifthLineMembers.map((member, index) => (
        <div key={index} className="flex flex-col " style={{ maxWidth: '300px' }}>
          <div className="relative overflow-hidden transition duration-300 transform rounded-lg hover:scale-105 hover:shadow-3xl hover:-translate-y-2 ">
            <Image
              className="object-cover rounded-lg w-100 h-150 lg:w-64 lg:h-64"
              src={member.personImage}
              width={700}
              height={1000}
              alt={member.personName}
            ></Image>
          </div>
          <div className="px-5 py-4 text-white text-center flex-grow">
            <p className="mb-4 text-3xl font-bold text-white overflow-hidden text-ellipsis whitespace-nowrap">
              {member.personPosition}
            </p>
            <p className="mb-4 text-lg lg:text-base text-white">{member.personOrganization}</p>
          </div>
        </div>
      ))}
    </div>
  </>
)}
</div>
   
  );
};

export default Team;
