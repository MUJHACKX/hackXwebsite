import { useState } from 'react';
import TeamData from "../../data/teamData";
import FacultyCard from "../../components/FacultyCard";

const Team = () => {
  const [year, setYear] = useState(2024);

  const chiefPatron = TeamData.find((team) => team.personPosition === "CHIEF PATRON");
  const patron = TeamData.find((team) => team.personPosition === "PATRON");

  const coPatrons2023 = TeamData.filter((team) => team.personPosition === "CO-PATRON");
  const coPatrons2024 = coPatrons2023.map((coPatron) => {
    if (coPatron.personName === "Dr. Thammaiah CS") {
      return { ...coPatron, personName: "Dr. Jawar N Jangir", personImage: "/JawarJangir.jpg" };
    } else if (coPatron.personName === "Dr. Arun Shanbhag") {
      return { ...coPatron, personName: "Dr. Amit Soni", personImage: "/AmitSoni.jpg" };
    }
    return coPatron;
  });

  const secondLineMembers2023 = TeamData.filter(
    (team) =>
      team.personName === "Dr. Sandeep Chaurasia" ||
      team.personName === "Dr. Amit Soni" ||
      team.personName === "Dr. Dinesh Saini"
  );
  const secondLineMembers2024 = [
    { personName: "Dr. Sandeep Chaurasia", personImage: "/SandeepCaurasia.jpg", personPosition: "Chair", personOrganization: "" },
    { personName: "Dr. Sandeep Joshi", personImage: "/SandeepJoshi.jpeg", personPosition: "CEO AIC", personOrganization: "" },
  ];

  const thirdLineMembers2023 = TeamData.filter(
    (team) =>
      team.personName === "Dr. Neha Chaudhary" ||
      team.personName === "Dr. Santosh Kumar Vishwakarma"
  );
  const thirdLineMembers2024 = [
    { personName: "Dr. Neha Chaudhary", personImage: "/NehaChaudhary.jpg", personPosition: "Program Chair", personOrganization: "" },
  ];

  const fifthLineMembers = TeamData.filter(
    (team) =>
      team.personName === "Dr. Juhi Singh" ||
      team.personName === "Mr. Shishir Singh"
  );

  const StudentConvener1 = [{
    personImage: "/preet.jpg",
    personName: "Preet"
  }, {
    personImage: "/Dev.jpg",
    personName: "Dev Shalinkumar Agrawal"
  }, {
    personImage: "/Ayush.jpg",
    personName: "Ayush Poddar"
  }]

  const StudentConvener2 = [{
    personImage: "/Aneerban.jpg",
    personName: "Aneerban Saha"
  }, {
    personImage: "/Lakshay.png",
    personName: "Lakshya Goel"
  }, {
    personImage: "/Manya.jpg",
    personName: "Manya Goel"
  }]

  const StudentConvener2024_25 = [{
    personImage: "/naad.png",
    personName: "Naad Dantale"
  }, {
    personImage: "/rishi.png",
    personName: "Rishi Joshi"
  }, {
    personImage: "/krishna.png",
    personName: "Srishti Krishna"
  }, {
    personImage: "/pulkit.png",
    personName: "Pulkit Gupta"
  }, {
    personImage: "/roshmeet.png",
    personName: "Roshmeet Chakraborty"
  }, {
    personImage: "/image 1.png",
    personName: "Abhijeet Anand Jha"
  }]

  return (
    <div className="bg-primary flex items-center justify-center pb-[30%] md:pb-[10%] relative z-10">
      <div className="w-full md:w-[80%]">
        <h2 className="h2 text-center mb-12 text-accent pt-[20vh] font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent
            from-indigo-300 to-indigo-300 animate-text">
          {year === 2023 ? "Team HackX 2023" : "Team HackX 2024"}
        </h2>

        <div className="flex items-center w-[70%] md:w-[50%] text-xl h-16 mt-8 md:mt-16 mx-auto">
          <button
            className={`w-[50%] m-4 md:m-0 p-4 rounded ${year === 2024 ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : ''}`}
            onClick={() => setYear(2024)}
          >
            2024
          </button>
          <button
            className={`w-[50%] m-4 md:m-0 p-4 rounded ${year === 2023 ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : ''}`}
            onClick={() => setYear(2023)}
          >
            2023
          </button>
        </div>

        <div className="flex flex-col align-middle bg-primary">
          <h2 className="text-center text-4xl text-white font-bold my-4">Patron</h2>
          <hr className="mb-4" />
          <div className="flex flex-col md:flex-row justify-center items-center">
            <FacultyCard
              name={chiefPatron.personName}
              image={chiefPatron.personImage}
              line1={chiefPatron.personPosition}
              line2={chiefPatron.personOrganization}
              count={2}
            />
            <FacultyCard
              name={patron.personName}
              image={patron.personImage}
              line1={patron.personPosition}
              line2={patron.personOrganization}
              count={2}
            />
          </div>
        </div>

        <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Co-Patron</h2>
        {(
          <>
            <hr className="mb-4" />
            <div className="flex flex-col lg:flex-row items-center">
              {(year === 2023 ? coPatrons2023 : coPatrons2024).map((coPatron, index) => (
                <FacultyCard
                  key={index}
                  name={coPatron.personName}
                  image={coPatron.personImage}
                  line1={coPatron.personPosition}
                  line2={coPatron.personOrganization}
                  count={coPatrons2023.length}
                />
              ))}
            </div>
          </>
        )}

        <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Chair</h2>
        {(
          <>
            <hr className="mb-4 bg-primary" />
            <div className="flex flex-col lg:flex-row items-center">
              {(year === 2023 ? secondLineMembers2023 : secondLineMembers2024).map((member, index) => (
                <FacultyCard
                  key={index}
                  name={member.personName}
                  image={member.personImage}
                  line1={member.personPosition}
                  line2={member.personOrganization}
                  count={secondLineMembers2024.length}
                />
              ))}
            </div>
          </>
        )}

        <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Program Chair</h2>
        {(
          <>
            <hr className="mb-4 bg-primary" />
            <div className="flex flex-col md:flex-row items-center">
              {(year === 2023 ? thirdLineMembers2023 : thirdLineMembers2024).map((member, index) => (
                <FacultyCard
                  key={index}
                  name={member.personName}
                  image={member.personImage}
                  line1={member.personPosition}
                  line2={member.personOrganization}
                  count={thirdLineMembers2024.length}
                />
              ))}
            </div>
          </>
        )}

        <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Convener</h2>
        {(
          <>
            <hr className="mb-4 bg-primary" />
            <div className="flex flex-wrap justify-center md:justify-around bg-primary ">
              {fifthLineMembers.map((member, index) => (
                <FacultyCard
                  key={index}
                  name={member.personName}
                  image={member.personImage}
                  line1={member.personPosition}
                  line2={member.personOrganization}
                  count={fifthLineMembers.length}
                />
              ))}
            </div>
          </>
        )}

        {year === 2023 ? (
          <>
            <h2 className="text-center text-2xl md:text-4xl font-bold my-4 text-white bg-primary">Student Convener 2023-24</h2>
            <hr className="mb-4 bg-primary" />
            <div className="flex flex-col lg:flex-row items-center">
              {StudentConvener1.map((member, index) => (
                <FacultyCard
                  key={index}
                  name={member.personName}
                  image={member.personImage}
                  line1="Student Convener"
                  line2=""
                  count={StudentConvener1.length}
                />
              ))}
            </div>
            <div className="flex flex-col lg:flex-row items-center">
              {StudentConvener2.map((member, index) => (
                <FacultyCard
                  key={index}
                  name={member.personName}
                  image={member.personImage}
                  line1="Student Convener"
                  line2=""
                  count={StudentConvener2.length}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-center text-2xl md:text-4xl font-bold my-4 text-white bg-primary">Student Convener 2024-25</h2>
            <hr className="mb-4 bg-primary" />
            <div className="flex flex-wrap justify-center md:justify-around bg-primary">
              {StudentConvener2024_25.map((member, index) => (
                <div key={index} className="flex flex-col items-center w-[30%] p-4">
                  <FacultyCard
                    name={member.personName}
                    image={member.personImage}
                    line1="Student Convener"
                    line2=""
                    count={StudentConvener2024_25.length}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Team;
