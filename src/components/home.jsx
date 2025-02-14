
import "../App.css"
import React from "react";
import profile from "../assets/img/Adobe Express - file (2).png";
import profile1 from "../assets/img/vishaknobg.png";
import work1 from "../assets/img/work1.png";
import work2 from "../assets/img/work2.png";
import work3 from "../assets/img/work3.png";
import work4 from "../assets/img/work4.png";
import { motion } from "framer-motion";
import { useState } from "react";
import BlurText from './blur';
import { useEffect } from "react";
import {Link as ScrollLink} from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

const SkillBar = ({ skill, percentage, imgSrc }) => (
  <div className="skill-bar">
    <div className="skill-header">
      <div className="skill-info">
        <img 
          src={imgSrc} 
          alt={`${skill} icon`} 
          className="skill-icon"
        />
        <span className="skill-name">{skill}</span>
      </div>
      <span className="skill-percentage">{percentage}%</span>
    </div>
    <div className="progress-bar-bg">
      <div 
        className="progress-bar-fill"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

function Home() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'vishak101010', 
        'template_dnpblgi', 
        e.target, 
        'MwfPeF76sgnbXBAA4'
    ).then(
        (result) => {
          toast.success('mail sent successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }, 
        (error) => {
          toast.info('something went wrong !', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
    );

    e.target.reset();
};
  useEffect(() => {
    const sections = document.querySelectorAll(".skills, .work");
    const workItems = document.querySelectorAll(".work_item1");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    workItems.forEach((item) => observer.observe(item));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      workItems.forEach((item) => observer.unobserve(item));
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".nav");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector(".about");
      const aboutPhoto = document.querySelector(".about_photo");
      const aboutTitle = document.querySelector(".about_deatils h2");

      if (aboutSection) {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
          aboutPhoto.classList.add("show");
          aboutTitle.classList.add("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const skills = [
  //   { skill: "HTML5", percentage: 95, imgSrc: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  //   { skill: "CSS3", percentage: 90, imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817" },
  //   { skill: "JavaScript", percentage: 85, imgSrc: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
  //   { skill: "React", percentage: 80, imgSrc: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  //   { skill: "MongoDB", percentage: 75, imgSrc: "https://www.svgrepo.com/show/331488/mongodb.svg" },
  //   { skill: "Express.js", percentage: 80, imgSrc: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
  //   { skill: "Node.js", percentage: 85, imgSrc: "https://www.svgrepo.com/show/303360/nodejs-logo.svg" }
  // ];
  const skills = [
    'Product Design',
    'Bootstrap',
    'UI Design',
    'Html5',
    'CSS',
    'MongoDB',
    'React',
    'NodeJS',
    'ExpressJS',
    'Front-End Development',
    'Javascript',
    'Tailwind'
  ];
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
    <ToastContainer />
      <nav className="nav bd-grid">
        <div className='logo_name'>
          <a href="\" className="nav__logo">Vishak</a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><ScrollLink to="home" smooth={true} duration={500} className="nav__link active-link">Home</ScrollLink></li>
            <li className="nav__item"><ScrollLink to="about" smooth={true} duration={500} offset={-70} className="nav__link">About</ScrollLink></li>
            <li className="nav__item"><ScrollLink to="skills" smooth={true} duration={500} offset={-70} className="nav__link">Skills</ScrollLink></li>
            <li className="nav__item"><ScrollLink to="work" smooth={true} duration={500} offset={-70} className="nav__link">Work</ScrollLink></li>
            <li className="nav__item"><ScrollLink to="contact" smooth={true} duration={500} offset={-70}  className="nav__link">Contact</ScrollLink></li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="menu"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></i>
        </div>
      </nav>
      <div className="home" id='home'>
        <div className="htitle">
          <div className="home_deatils">
            <h1>HI, <br /> I'm  <label className='vishak'>Vishak</label></h1>

            <BlurText
              text="MERN-Stack Developer"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="developer"
            />
          </div>
        </div>
        <div className="hphoto">
        <motion.div
      className="himg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.2, boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.3)" }}
      whileTap={{ scale: 1.5, transition: { duration: 0.3 } }} // Expands on touch
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        src={profile}
        alt="Profile"
        className="himg-img"
        animate={{ opacity: isHovered ? 1 : 0.7 }} // Fades when not hovered
        transition={{ duration: 0.5 }}
      />
    </motion.div>
        </div>
      </div>
      <div className="about" id='about'>
         <div className="about_head">
          <h1>About Me</h1>
         </div>
         <div className="about_photo">
            <div className="aphoto">
              <img src={profile1} alt="" />
            </div>

         </div>
         <div className="about_deatils">
                <div className="about_d">
                <h2>I'm Vishakchandran VP</h2>
                <p>
                 A passionate MERN Stack Developer skilled in React.js, Node.js,<br /> Express.js, and MongoDB. With hands-on experience
                  from a six-month <br /> internship and multiple projects, I build responsive, user-friendly <br />web applications. Proficient in Git, AWS, and  Netlify,<br /> I thrive on problem-solving and continuous learning.
                </p>
                </div>
         </div>
      </div>

      <div className="skills" id="skills">
        <div className="skills_head">
        <h1>Skills</h1>
        </div>
        <div className="skills_deatils">
        <h2 className="skills-title">Professional Skills</h2>
      <p className="skills-description">
      Proficient in MERN Stack development with hands-on experience in building dynamic web applications, RESTful APIs, and database management.
       Skilled in React.js for frontend, Node.js and Express.js for backend, and MongoDB for efficient data handling.
      </p>
      <div className="skills-container">
      <div style={{ maxWidth: "69rem", margin: "0 auto", }}>
      <div
        style={{
          background: "rgba(24, 24, 27, 0.5)",
          backdropFilter: "blur(8px)",
          borderRadius: "1.5rem",
          padding: "2rem",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
          {skills.map((skill, index) => (
            <span
              key={index}
              style={{
                padding: "0.75rem 1.5rem",
                background: "rgba(0, 0, 0, 0.4)",
                borderRadius: "999px",
                color: "#d1d5db",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "rgba(0, 0, 0, 0.6)")}
              onMouseLeave={(e) => (e.target.style.background = "rgba(0, 0, 0, 0.4)")}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
      </div>
        </div>
       
      </div>
      <div className="work" id="work">
        <div className="work_head">
          <h1>Work</h1>
        </div>
        <div className="work_container">
          <div className="work_item1">
          <img src={work1} alt="" />
          </div>
          <div className="work_item1">
          <img src={work2} alt="" />
          </div>
          <div className="work_item1">
          <img src={work3} alt="" />
          </div>
          <div className="work_item1">
          <img src={work4} alt="" />
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <div className="contact_head">
          <h1>Contact</h1>
        </div>
        <div className="contact_container">
          <div className="contact_form">
            <h2>Contact Me</h2>
            <form onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" name="message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      
      <footer className="footer">
        <div className="footer_container">
          <div className="pvt">
          <p>&copy; {new Date().getFullYear()} Vishak. All Rights Reserved.</p> 
          </div>
          <div className="footer_social">
            <a href="https://github.com/vishag10" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="footer_icon" />
            </a>
            <a href="https://www.linkedin.com/in/vishakchandran/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="footer_icon" />
            </a>
            <a href="https://www.instagram.com/vi._shag?igsh=MTQ0cWZqaDlza2NpcA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="footer_icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home;