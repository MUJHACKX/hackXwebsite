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
    <motion.div
      className="h-[100] bg-primary"
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      <h2 className="h2 text-center mb-12 text-accent pt-[20vh]">TEAM</h2>
      <motion.div
        className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-20 pt-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {chiefPatron && (
          <div>
            <div className="border p-2 bg-accent bg-opacity-10 border-accent font-mono rounded-xl">
              <motion.div
                className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  className="object-cover rounded-lg w-full aspect-[3/4]"
                  src={chiefPatron.personImage}
                  width={1000}
                  height={1000}
                  alt={chiefPatron.personName}
                ></Image>
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-accent bg-opacity-100 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-3xl font-bold text-primary">{chiefPatron.personName}</p>
                  <p className="mb-4 text-lg lg:text-base text-primary">{chiefPatron.personPosition}</p>
                  <p className="mb-4 text-lg lg:text-base text-primary">{chiefPatron.personOrganization}</p>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {patron && (
          <div>
            <div className="border p-2 bg-accent bg-opacity-10 border-accent font-mono rounded-xl">
              <motion.div
                className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  className="object-cover rounded-lg w-full aspect-[3/4]"
                  src={patron.personImage}
                  width={1000}
                  height={1000}
                  alt={patron.personName}
                ></Image>
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-accent bg-opacity-100 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-3xl font-bold text-primary">{patron.personName}</p>
                  <p className="mb-4 text-lg lg:text-base text-primary">{patron.personPosition}</p>
                  <p className="mb-4 text-lg lg:text-base text-primary">{patron.personOrganization}</p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </motion.div>

      {coPatrons.length > 0 && (
        <motion.div
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-20 pt-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {coPatrons.map((coPatron, index) => (
            <div key={index}>
              <div className="border p-2 bg-accent bg-opacity-10 border-accent font-mono rounded-xl">
                <motion.div
                  className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    className="object-cover rounded-lg w-full aspect-[3/4]"
                    src={coPatron.personImage}
                    width={1000}
                    height={1000}
                    alt={coPatron.personName}
                  ></Image>
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-accent bg-opacity-100 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-3xl font-bold text-primary">{coPatron.personName}</p>
                    <p className="mb-4 text-lg lg:text-base text-primary">{coPatron.personPosition}</p>
                    <p className="mb-4 text-lg lg:text-base text-primary">{coPatron.personOrganization}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {secondLineMembers.length > 0 && (
        <motion.div
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-20 pt-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {secondLineMembers.map((member, index) => (
            <div key={index}>
              <div className="border p-2 bg-accent bg-opacity-10 border-accent font-mono rounded-xl">
                <motion.div
                  className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    className="object-cover rounded-lg w-full aspect-[3/4]"
                    src={member.personImage}
                    width={1000}
                    height={1000}
                    alt={member.personName}
                  ></Image>
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-accent bg-opacity-100 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-3xl font-bold text-primary">{member.personName}</p>
                    <p className="mb-4 text-lg lg:text-base text-primary">{member.personPosition}</p>
                    <p className="mb-4 text-lg lg:text-base text-primary">{member.personOrganization}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {thirdLineMembers.length > 0 && (
        <motion.div
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-20 pt-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {thirdLineMembers.map((member, index) => (
            <div key={index}>
              <div className="border p-2 bg-accent bg-opacity-10 border-accent font-mono rounded-xl">
                <motion.div
                  className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    className="object-cover rounded-lg w-full aspect-[3/4]"
                    src={member.personImage}
                    width={1000}
                    height={1000}
                    alt={member.personName}
                  ></Image>
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-accent bg-opacity-100 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-3xl font-bold text-primary">{member.personName}</p>
                    <p className="mb-4 text-lg lg:text-base text-primary">{member.personPosition}</p>
                    <p className="mb-4 text-lg lg:text-base text-primary">{member.personOrganization}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {fifthLineMembers.length > 0 && (
        <motion.div
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-20 pt-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {fifthLineMembers.map((member, index) => (
            <div key={index}>
              <div className="border p-2 bg-accent bg-opacity-10 border-accent font-mono rounded-xl">
                <motion.div
                  className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    className="object-cover rounded-lg w-full aspect-[3/4]"
                    src={member.personImage}
                    width={1000}
                    height={1000}
                    alt={member.personName}
                  ></Image>
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-accent bg-opacity-100 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-3xl font-bold text-primary">{member.personName}</p>
                    <p className="mb-4 text-lg lg:text-base text-primary">{member.personPosition}</p>
                    <p className="mb-4 text-lg lg:text-base text-primary">{member.personOrganization}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Team;
