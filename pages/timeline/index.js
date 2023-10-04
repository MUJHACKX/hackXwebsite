import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaRegClock,
  FaCode,
  FaTrophy,
  FaBriefcase,
  FaLaptop,
  FaMedal,
} from "react-icons/fa";

const Work = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" bg-primary">
      <div className="md:h-20 bg-primary"> 
       
      </div>
      <div className="h-20 md:h-20 bg-primary"> 
        
      </div>
      <VerticalTimeline lineColor="#2196F3">
        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${animate && "animate"}`}
          contentStyle={{
            background: "rgba(41,136,255,255)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<FaRegClock />}
        >
          <h3 className="vertical-timeline-element-title">Oct 3 - Oct 24 </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Registration Begins
          </h4>
          <p>Register from Oct 3 - 24 for extended hackathon participation.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${animate && "animate"}`}
          contentStyle={{
            background: "rgba(91,107,254,255)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Oct 26, 10 AM - 12 PM</h3>
          <h4 className="vertical-timeline-element-subtitle">Opening</h4>
          <p>Kick-off event, welcome, and event introduction.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${animate && "animate"}`}
          contentStyle={{
            background: "rgba(116,96,253,255)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">Oct 26-27, 12 PM - 3 AM</h3>
          <h4 className="vertical-timeline-element-subtitle">Round 1</h4>
          <p>Participants work on initial hacking projects.</p>
        </VerticalTimelineElement>

        {/* Add three more timeline content elements */}
        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${animate && "animate"}`}
          contentStyle={{
            background: "rgba(148,75,252,255)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<FaTrophy />}
        >
          <h3 className="vertical-timeline-element-title">Oct 27, 6 AM</h3>
          <h4 className="vertical-timeline-element-subtitle">Round 1 Results</h4>
          <p>Announce round 1 winners and achievements.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${animate && "animate"}`}
          contentStyle={{
            background: "rgba(184,71,255,255)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">Oct 27, 6 AM - 2 PM</h3>
          <h4 className="vertical-timeline-element-subtitle">Round 2</h4>
          <p>Participants advance to the next hacking phase.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${animate && "animate"}`}
          contentStyle={{
            background: "rgba(208,86,253,255)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<FaLaptop />}
        >
          <h3 className="vertical-timeline-element-title">Oct 27, 2:30 PM - 5 PM</h3>
          <h4 className="vertical-timeline-element-subtitle">Presentation</h4>
          <p>Teams present their projects and innovations.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${animate && "animate"}`}
          contentStyle={{
            background: "rgba(249,120,242,255)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<FaMedal />}
        >
          <h3 className="vertical-timeline-element-title">Oct 27, 6 PM</h3>
          <h4 className="vertical-timeline-element-subtitle">Result Declared</h4>
          <p>Announce final winners and award prizes.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Work;
