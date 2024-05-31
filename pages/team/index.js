import TeamData from "../../data/teamData";
import FacultyCard from "../../components/FacultyCard";

const Team = () => {
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

  const StudentConvener1 = [{
    personImage: "/preet.jpg",
    personName: "Preet",
    personLinkedIn:"https://www.linkedin.com/in/preet-kalani/"
  }, {
    personImage: "/Dev.jpg",
    personName: "Dev Shalinkumar Agrawal",
    personLinkedIn:"https://www.linkedin.com/in/dev-agrawal28/"
  }, {
    personImage: "/Ayush.jpg",
    personName: "Ayush Poddar",
    personLinkedIn:"https://www.linkedin.com/in/ayush-poddar-324909245/"
  }]

  const StudentConvener2 = [{
    personImage: "/Aneerban.jpg",
    personName: "Aneerban Saha",
    personLinkedIn:"https://www.linkedin.com/in/aneerban-saha/"
  }, {
    personImage: "/Lakshay.png",
    personName: "Lakshya Goel",
    personLinkedIn:"https://www.linkedin.com/in/ilakshya1/"
  }, {
    personImage: "/Manya.jpg",
    personName: "Manya Goel",
    personLinkedIn:"https://www.linkedin.com/in/manya-goel-8a6335222/"
  }]

  return (
    <div className="bg-primary flex items-center justify-center pb-[30%] md:pb-[10%]">
      <div className="w-full md:w-[80%]">
        <h2 className="h2 text-center mb-12 text-accent pt-[20vh] font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent
            from-indigo-300 to-indigo-300 animate-text">TEAM</h2>

        <div className="flex flex-col align-middle bg-primary ">
          <h2 className="text-center text-4xl text-white font-bold my-4">Patron</h2>
          <hr className="mb-4"/>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <FacultyCard
              name={chiefPatron.personName}
              image={chiefPatron.personImage}
              line1={chiefPatron.personPosition}
              line2={chiefPatron.personOrganization}
              icon={chiefPatron.personLinkedIn}  // corrected prop
              count={2}
            />
            <FacultyCard
              name={patron.personName}
              image={patron.personImage}
              line1={patron.personPosition}
              line2={patron.personOrganization}
              icon={patron.personLinkedIn}  // corrected prop
              count={2}
            />
          </div>
        </div>
        <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Co-Patron</h2>
        {(
          <>
            <hr className="mb-4"/>
            <div className="flex flex-col lg:flex-row items-center">
              {coPatrons.map((coPatron, index) => (
                <FacultyCard
                  key={index}
                  name={coPatron.personName}
                  image={coPatron.personImage}
                  line1={coPatron.personPosition}
                  line2={coPatron.personOrganization}
                  icon={coPatron.personLinkedIn}  // corrected prop
                  count={coPatrons.length}
                />
              ))}
            </div>
          </>
        )}

        <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Chair</h2>
        {(
          <>
            <hr className="mb-4 bg-primary"/>
            <div className="flex flex-col lg:flex-row items-center">
              {secondLineMembers.map((member, index) => (
                <FacultyCard
                  key={index}
                  name={member.personName}
                  image={member.personImage}
                  line1={member.personPosition}
                  line2={member.personOrganization}
                  icon={member.personLinkedIn}  // corrected prop
                  count={secondLineMembers.length}
                />
              ))}
            </div>
          </>
        )}

        <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Program Chair</h2>
        {(
          <>
            <hr className="mb-4 bg-primary"/>
            <div className="flex flex-col md:flex-row items-center">
              {thirdLineMembers.map((member, index) => (
                <FacultyCard
                  key={index}
                  name={member.personName}
                  image={member.personImage}
                  line1={member.personPosition}
                  line2={member.personOrganization}
                  icon={member.personLinkedIn}  // corrected prop
                  count={thirdLineMembers.length}
                />
              ))}
            </div>
          </>
        )}

        <h2 className="text-center text-4xl font-bold my-4 text-white bg-primary">Convener</h2>
        {(
          <>
            <hr className="mb-4 bg-primary"/>
            <div className="flex flex-wrap justify-center md:justify-around bg-primary ">
              {fifthLineMembers.map((member, index) => (
                <FacultyCard
                  key={index}
                  name={member.personName}
                  image={member.personImage}
                  line1={member.personPosition}
                  line2={member.personOrganization}
                  icon={member.personLinkedIn}  // corrected prop
                  count={fifthLineMembers.length}
                />
              ))}
            </div>
          </>
        )}

        <h2 className="text-center text-2xl md:text-4xl font-bold my-4 text-white bg-primary">Student Convener
          2023-24</h2>
        {(
          <>
            <hr className="mb-4 bg-primary"/>
            <div className="flex flex-col lg:flex-row items-center">
              {StudentConvener1.map((member, index) => (
                <FacultyCard
                  key={index}
                  name={member.personName}
                  image={member.personImage}
                  line1="Student Convener"
                  line2=""
                  icon={member.personLinkedIn}  // added icon prop
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
                  icon={member.personLinkedIn}  // added icon prop
                  count={StudentConvener2.length}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>

  );
};

export default Team;
