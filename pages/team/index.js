import { useState } from 'react';
import TeamData from "../../data/teamData";
import FacultyCard from "../../components/FacultyCard";
import Footer from '../../components/Footer';

const Team = () => {
  const [year, setYear] = useState(2024);  // Default to 2024

  // Define LinkedIn URLs for all members
  const linkedInUrls = {
    "Mr. S. Vaitheeswaran": "https://www.linkedin.com/in/vaitheeswaran/",
    "Dr. G K Prabhu": "https://www.linkedin.com/in/gkprabhu/",
    "Dr. Nitu Bhatnagar": "https://www.linkedin.com/in/nitu-bhatnagar-496980172/",
    "Dr. Thammaiah CS": "https://www.linkedin.com/in/dr-thammaiah-chekkera-6014184/",
    "Dr. Jawar N Jangir": "https://www.linkedin.com/in/commodore-dr-jawaharjangir/",
    "Dr. Arun Shanbhag": "https://www.linkedin.com/in/arunshanbhag/",
    "Dr. Amit Soni": "https://www.linkedin.com/in/dr-amit-soni-9b810812/",
    "Dr. Sandeep Chaurasia": "https://www.linkedin.com/in/sandeep-chaurasia-0457568a/",
    "Dr. Sandeep Joshi": "https://www.linkedin.com/in/dr-sandeep-joshi-7319a138/",
    "Dr. Dinesh Saini": "https://www.linkedin.com/in/dinesh-saini-4354028/",
    "Dr. Neha Chaudhary": "https://www.linkedin.com/in/dr-neha-chaudhary-2b02bb31/",
    "Dr. Santosh Kumar Vishwakarma": "https://www.linkedin.com/in/santosh-kumar-vishwakarma-68005a66/",
    "Dr. Juhi Singh": "https://www.linkedin.com/in/dr-juhi-singh-171a4873/",
    "Mr. Shishir Singh": "https://www.linkedin.com/in/shishir-chauhan-b888b2129/",
    "Preet": "https://www.linkedin.com/in/preet-kalani/",
    "Dev Shalinkumar Agrawal": "https://www.linkedin.com/in/dev-agrawal28/",
    "Ayush Poddar": "https://www.linkedin.com/in/ayush-poddar-324909245/",
    "Aneerban Saha": "https://www.linkedin.com/in/aneerban-saha/",
    "Lakshya Goel": "https://www.linkedin.com/in/ilakshya1/",
    "Manya Goel": "https://www.linkedin.com/in/manya-goel-8a6335222/",
    "Naad Dantale": "https://www.linkedin.com/in/naad/",
    "Rishi Joshi": "https://www.linkedin.com/in/rishijoshi1410/",
    "Srishti Krishna": "https://www.linkedin.com/in/shristikrishna/",
    "Pulkit Gupta": "https://www.linkedin.com/in/pulkit-gupta-abb638249/",
    "Roshmeet Chakraborty": "https://www.linkedin.com/in/roshmeet/",
    "Abhijeet Anand Jha": "https://www.linkedin.com/in/abhijeet-anand-jha-b517b7249/",
    "Samvrant Samantaray": "https://www.linkedin.com/in/samvrant-samanataray/",
    "Aeshna Kala": "https://www.linkedin.com/in/aeshna-kala-929191233/"
  };

  const getTeamMemberWithIcon = (team) => {
    return team.map((member) => ({
      ...member,
      icon: linkedInUrls[member.personName] || ""
    }));
  };

  const chiefPatron = getTeamMemberWithIcon(TeamData.filter((team) => team.personPosition === "CHIEF PATRON"))[0];
  const patron = getTeamMemberWithIcon(TeamData.filter((team) => team.personPosition === "PATRON"))[0];

  const coPatrons2023 = getTeamMemberWithIcon(TeamData.filter((team) => team.personPosition === "CO-PATRON"));
  const coPatrons2024 = getTeamMemberWithIcon(coPatrons2023.map((coPatron) => {
    if (coPatron.personName === "Dr. Thammaiah CS") {
      return { ...coPatron, personName: "Dr. Jawar N Jangir", personImage: "/JawarJangir.jpg" };
    } else if (coPatron.personName === "Dr. Arun Shanbhag") {
      return { ...coPatron, personName: "Dr. Amit Soni", personImage: "/AmitSoni.jpg" };
    }
    return coPatron;
  }));

  const secondLineMembers2023 = getTeamMemberWithIcon(TeamData.filter(
    (team) =>
      team.personName === "Dr. Sandeep Chaurasia" ||
      team.personName === "Dr. Amit Soni" ||
      team.personName === "Dr. Dinesh Saini"
  ));
  const secondLineMembers2024 = getTeamMemberWithIcon([
    { personName: "Dr. Sandeep Chaurasia", personImage: "/SandeepChaurasia.webp", personPosition: "Chair", personOrganization: "" },
    { personName: "Dr. Sandeep Joshi", personImage: "/SandeepJoshi.jpeg", personPosition: "CEO AIC", personOrganization: "" }
  ]);

  const thirdLineMembers2023 = getTeamMemberWithIcon(TeamData.filter(
    (team) =>
      team.personName === "Dr. Neha Chaudhary" ||
      team.personName === "Dr. Santosh Kumar Vishwakarma"
  ));
  const thirdLineMembers2024 = getTeamMemberWithIcon([
    { personName: "Dr. Neha Chaudhary", personImage: "/NehaChaudhary.jpg", personPosition: "Program Chair", personOrganization: "" }
  ]);
  // advisory
  const fourthLineMembers2024 = getTeamMemberWithIcon(TeamData.filter(
    (team) =>
      team.personName === "Manya Goel" ||
      team.personName === "Samvrant Samantaray" ||
      team.personName === "Aeshna Kala"
  ));
  // advisory
  const fifthLineMembers = getTeamMemberWithIcon(TeamData.filter(
    (team) =>
      team.personName === "Dr. Juhi Singh" ||
      team.personName === "Mr. Shishir Singh"
  ));

  const StudentConvener1 = getTeamMemberWithIcon([
    { personImage: "/preet.jpg", personName: "Preet" },
    { personImage: "/Dev.jpg", personName: "Dev Shalinkumar Agrawal" },
    { personImage: "/Ayush.jpg", personName: "Ayush Poddar" }
  ]);

  const StudentConvener2 = getTeamMemberWithIcon([
    { personImage: "/Aneerban.jpg", personName: "Aneerban Saha" },
    { personImage: "/Lakshay.png", personName: "Lakshya Goel" },
    { personImage: "/Manya.jpg", personName: "Manya Goel" }
  ]);

  const StudentConvener2024_25 = getTeamMemberWithIcon([
    { personImage: "/naad.png", personName: "Naad Dantale" },
    { personImage: "/rishi.png", personName: "Rishi Joshi" },
    { personImage: "/krishna.png", personName: "Srishti Krishna" },
    { personImage: "/pulkit.png", personName: "Pulkit Gupta" },
    { personImage: "/roshmeet.png", personName: "Roshmeet Chakraborty" },
    { personImage: "/image 1.png", personName: "Abhijeet Anand Jha" }
  ]);

  return (
    <div className="bg-primary flex items-center justify-center  relative z-10">
      <div className="w-full md:w-[80%]">
        <h2 className="h2 text-center mb-12 text-accent pt-[20vh] font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text">
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
              icon={chiefPatron.icon}
            />
            <FacultyCard
              name={patron.personName}
              image={patron.personImage}
              line1={patron.personPosition}
              line2={patron.personOrganization}
              count={2}
              icon={patron.icon}
            />
          </div>
        </div>

        <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Co-Patrons</h2>
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
              icon={coPatron.icon}
            />
          ))}
        </div>

        <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Chair</h2>
        <hr className="mb-4" />
        <div className="flex flex-col lg:flex-row items-center">
          {(year === 2023 ? secondLineMembers2023 : secondLineMembers2024).map((member, index) => (
            <FacultyCard
              key={index}
              name={member.personName}
              image={member.personImage}
              line1={member.personPosition}
              line2={member.personOrganization}
              count={secondLineMembers2024.length}
              icon={member.icon}
            />
          ))}
        </div>

        <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Program Chair</h2>
        <hr className="mb-4" />
        <div className="flex flex-col md:flex-row items-center">
          {(year === 2023 ? thirdLineMembers2023 : thirdLineMembers2024).map((member, index) => (
            <FacultyCard
              key={index}
              name={member.personName}
              image={member.personImage}
              line1={member.personPosition}
              line2={member.personOrganization}
              count={thirdLineMembers2024.length}
              icon={member.icon}
            />
          ))}
        </div>

        <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Convener</h2>
        <hr className="mb-4" />
        <div className="flex flex-wrap justify-center md:justify-around bg-primary ">
          {fifthLineMembers.map((member, index) => (
            <FacultyCard
              key={index}
              name={member.personName}
              image={member.personImage}
              line1={member.personPosition}
              line2={member.personOrganization}
              count={fifthLineMembers.length}
              icon={member.icon}
            />
          ))}
        </div>


        {year === 2023 ? (
          <>
            <h2 className="text-center text-2xl md:text-4xl font-bold my-4 text-white bg-primary">Student Convener 2023-24</h2>
            <hr className="mb-4" />
            <div className="flex flex-col lg:flex-row items-center">
              {StudentConvener1.map((member, index) => (
                <FacultyCard
                  key={index}
                  name={member.personName}
                  image={member.personImage}
                  line1="Student Convener"
                  line2=""
                  count={StudentConvener1.length}
                  icon={member.icon}
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
                  icon={member.icon}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">MUJ HackX 2.0 Advisories</h2>
            <hr className="mb-4" />
            <div className="flex flex-col md:flex-row items-center">
              {(year === 2024 ? fourthLineMembers2024 : fourthLineMembers2024).map((member, index) => (
                <FacultyCard
                  key={index}
                  name={member.personName}
                  image={member.personImage}
                  line1={member.personPosition}
                  line2={member.personOrganization}
                  count={fourthLineMembers2024.length}
                  icon={member.icon}
                />
              ))}
            </div>
            <h2 className="text-center text-2xl md:text-4xl font-bold my-4 text-white bg-primary">Student Convener 2024-25</h2>
            <hr className="mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center bg-primary">
              {StudentConvener2024_25.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <FacultyCard
                    name={member.personName}
                    image={member.personImage}
                    line1="Student Convener"
                    line2=""
                    count={StudentConvener2024_25.length}
                    icon={member.icon}
                  />
                </div>
              ))}
            </div>
          </>
        )}
        <Footer></Footer>
      </div>

    </div>
  );
};

export default Team;
