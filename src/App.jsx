import React, { useState, useEffect } from 'react';
import './App.css';
import { Github, Linkedin, Mail, ExternalLink, Sun, Moon, Facebook, Download, X, Phone, MessageCircle } from 'lucide-react';
import { FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiCplusplus, SiC, SiHtml5, SiCss3, SiLinux } from "react-icons/si";

function App() {
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null); // For Modal

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // --- 6. Skills Section Data ---
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC size={25} /> },
        { name: "C++", icon: <SiCplusplus size={25} /> },
        { name: "Java", icon: <FaJava size={25} /> },
        { name: "JavaScript", icon: <SiJavascript size={25} /> }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact size={25} /> },
        { name: "Tailwind", icon: <SiTailwindcss size={25} /> },
        { name: "HTML5", icon: <SiHtml5 size={25} /> },
        { name: "CSS3", icon: <SiCss3 size={25} /> }
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={25} /> },
        { name: "Linux", icon: <SiLinux size={25} /> },
        { name: "MongoDB", icon: <SiMongodb size={25} /> },
        { name: "Git", icon: <FaGitAlt size={25} /> }
      ]
    }
  ];

  // --- 9. Projects Data (With Details) ---
  const projects = [
    {
      id: 1,
      title: "StyleDecor BD",
      image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=500", // Demo Image
      stack: ["React", "Tailwind CSS", "Netlify"],
      description: "A modern lifestyle e-commerce interface featuring a responsive product gallery and seamless cart functionality.",
      liveLink: "https://styledecor-bd.netlify.app/",
      repoLink: "https://github.com/Alamin23015/Style_decor_Client",
      challenges: "Implementing the responsive grid for products and managing cart state across components was challenging.",
      improvements: "Plan to add a backend with Stripe payment gateway integration."
    },
    {
      id: 2,
      title: "Habit Tracker App",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=500", // Demo Image
      stack: ["React", "Firebase", "Auth"],
      description: "A productivity application designed to track daily habits. Integrated with Firebase for secure authentication.",
      liveLink: "https://habittracker-42947.web.app",
      repoLink: "https://github.com/Alamin23015/Client-side-Habit-Tracker",
      challenges: "Syncing real-time data with Firebase Firestore and handling user authentication states properly.",
      improvements: "Adding a dark mode toggle and graphical analysis of weekly progress."
    },
    {
      id: 3,
      title: "Personal Portfolio",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500", // Demo Image
      stack: ["React", "Vite", "Lucide React"],
      description: "A minimal and responsive personal portfolio website featuring a dark/light theme toggle and smooth animations.",
      liveLink: "#",
      repoLink: "#https://github.com/Alamin23015/portfolio",
      challenges: "Ensuring the design was fully responsive and the theme toggle worked seamlessly without flickering.",
      improvements: "Will add a blog section to share my technical writing."
    }
  ];

  return (
    <div className="app-container">
      
      {/* --- 1. Navbar --- */}
      <nav className="navbar">
        <div className="container nav-content">
          <h2 className="logo">AL <span>AMIN.</span></h2>
          <div className="nav-right">
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button onClick={toggleTheme} className="theme-btn">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- 2. Designation & Intro (Hero) --- */}
      <section id="home" className="section hero">
        <div className="container hero-wrapper">
          <div className="hero-text">
            <span className="subtitle">HI, I AM</span>
            <h1>Al Amin Hossain</h1>
            {/* Designation */}
            <h2 className="gradient-text">Full Stack Developer</h2>
            <p>
              Aspiring Software Engineer & Linux Enthusiast from MBSTU. I build accessible, pixel-perfect, and performant web applications.
            </p>
            
            {/* --- 3. Resume Download Button --- */}
            <div className="btn-group">
               <a href="/resume.pdf" download="Al_Amin_Resume.pdf" className="btn btn-primary">
                 <Download size={18} style={{marginRight:'8px'}}/> Download Resume
               </a>
               {/* --- 4. Social Links --- */}
               <div className="social-links-hero">
                  <a href="https://github.com/Alamin23015" target="_blank"><Github size={24} /></a>
                  <a href="https://linkedin.com" target="_blank"><Linkedin size={24} /></a>
                  <a href="https://facebook.com" target="_blank"><Facebook size={24} /></a>
               </div>
            </div>
          </div>
          <div className="hero-img">
            <div className="img-box">
              {/* Professional Photo */}
              <img src="/portfolio.jpg" alt="Al Amin" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. About Me Section --- */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text-full">
              <p>
                <strong>My Journey:</strong> My passion for programming started during my early university days at MBSTU. I started with C and C++, building a strong foundation in logic and algorithms. Gradually, I fell in love with Web Development and the Linux ecosystem.
              </p>
              <p>
                <strong>What I Enjoy:</strong> I love solving complex problems and turning ideas into reality using code. Currently, I enjoy working with the MERN stack (MongoDB, Express, React, Node.js) to build scalable applications.
              </p>
              <p>
                <strong>Hobbies & Interests:</strong> When I'm not coding, you can find me exploring new Linux distros, playing cricket, or painting landscapes. I believe in maintaining a creative balance in life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. Educational Qualification --- */}
      <section className="section bg-alt">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <h3>B.Sc. in Information and Communication Technology (ICT)</h3>
            <p className="institution">Mawlana Bhashani Science and Technology University (MBSTU)</p>
            <p className="duration">2023 - Present</p>
            <p className="details">Focusing on Software Engineering, Data Structures, and Algorithms.</p>
          </div>
        </div>
      </section>

      {/* --- 6. Skills Section --- */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-wrapper">
            {skillCategories.map((cat, i) => (
              <div key={i} className="skill-category">
                <h3>{cat.title}</h3>
                <div className="skill-grid">
                  {cat.skills.map((skill, j) => (
                    <div key={j} className="skill-card">
                      <div className="icon">{skill.icon}</div>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 9. Projects Section (With View More Modal) --- */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-thumb" />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <div className="card-links">
                     {/* View More Button */}
                     <button onClick={() => setSelectedProject(project)} className="btn-sm">
                       View Details
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Project Details Modal --- */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
            <h2>{selectedProject.title}</h2>
            <p className="modal-desc">{selectedProject.description}</p>
            
            <div className="modal-details">
              <p><strong>🛠 Tech Stack:</strong> {selectedProject.stack.join(", ")}</p>
              <p><strong>🚧 Challenges:</strong> {selectedProject.challenges}</p>
              <p><strong>🚀 Future Plans:</strong> {selectedProject.improvements}</p>
            </div>

            <div className="modal-actions">
              <a href={selectedProject.liveLink} target="_blank" className="btn btn-primary">Live Link/ <ExternalLink size={16}/></a>
              <a href={selectedProject.repoLink} target="_blank" className="btn btn-outline">GitHub Repo <Github size={16}/></a>
            </div>
          </div>
        </div>
      )}

      {/* --- 10. Contact Information --- */}
      <section id="contact" className="section bg-alt">
        <div className="container contact-container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-info-box">
             <div className="contact-item">
               <Mail className="c-icon"/>
               <span>alamin16105@gmail.com</span>
             </div>
             <div className="contact-item">
               <Phone className="c-icon"/>
               <span>+880 1316179445</span>
             </div>
             <div className="contact-item">
               <MessageCircle className="c-icon"/>
               <span>+880 1316179445 (WhatsApp)</span>
             </div>
          </div>
        </div>
      </section>

      {/* --- 11. Footer --- */}
     <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-desc">Open for opportunities. Send me a message directly.</p>

          <form action="https://formspree.io/f/xrebjypw" method="POST" className="form-box">
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary full-width">Send Message</button>
          </form>

          <div className="social-icons">
            <a href="https://github.com/Alamin23015" target="_blank"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/al-amin-hossain-230it/" target="_blank"><Linkedin size={24} /></a>
            <a href="https://www.facebook.com/al.amin.595730" target="_blank"><Facebook size={24} /></a>
            <a href="mailto:alamin16105@gmail.com"><Mail size={24} /></a>
          </div>
          
          <p className="copyright">© 2024 Al Amin Hossain. All rights reserved.</p>
        </div>
      </section>

    </div>
  );
}

export default App;