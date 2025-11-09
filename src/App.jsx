import React, { useEffect, useRef } from 'react'
import pawerlImg from './assets/pawerl.png';
// filename in assets is `AquaS.png` (capitalization matters on some systems)
import aquasImg from './assets/AquaS.png';

export default function App() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMove = (e) => {
      cursor.style.left = e.clientX - 10 + 'px'
      cursor.style.top = e.clientY - 10 + 'px'
    }

    const onEnter = () => {
      cursor.style.width = '40px'
      cursor.style.height = '40px'
      cursor.style.background = 'rgba(0, 212, 255, 0.3)'
    }

    const onLeave = () => {
      cursor.style.width = '20px'
      cursor.style.height = '20px'
      cursor.style.background = 'rgba(0, 212, 255, 0.2)'
    }

    document.addEventListener('mousemove', onMove)
    const hoverables = document.querySelectorAll('a, .project-card, .experience-card, .skill-category')
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  // add scroll listener to change nav style when page scrolls
  useEffect(() => {
    const nav = document.querySelector('nav')
    if (!nav) return
    const onScroll = () => {
      if (window.scrollY > 36) nav.classList.add('scrolled')
      else nav.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    // run once
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    const targets = document.querySelectorAll('.project-card, .experience-card, .skill-category, .section-title, .hero h1')
    targets.forEach(el => {
      // mark pre-reveal state; CSS will define animation when .reveal is added
      el.classList.add('pre-reveal')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div>
        <div id="cursor" ref={cursorRef}></div>

      <nav>
        <div className="logo">Srinivasan D</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <h1>Crafting Digital Experiences</h1>
        <p>Versatile developer with expertise in Web Development, Java, and Python programming. Passionate about machine learning and innovative solutions that make a difference.</p>
        <a href="#contact" className="cta-button">Let's Connect</a>
      </section>

     <section id="projects">
  <h2 className="section-title">Featured Projects</h2>
  <p className="section-subtitle">Innovative solutions that blend technology with purpose</p>
  <div className="projects-grid">
          <div className="project-card">
       <div className="project-image">
         <img
           src={pawerlImg}
           alt="Pawerl - smart pet tag"
           onError={(e) => {
             // fallback to a simple SVG data URL if the imported image fails to load
             e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="100%" height="100%" fill="%2312121b"/><text x="50%" y="50%" fill="%23a0a0a0" font-size="36" font-family="Arial, Helvetica, sans-serif" text-anchor="middle">Pawerl</text></svg>'
           }}
         />
    </div>
      <h3>Pawerl</h3>
      <p>Developing a smart pet tag that uses AI to monitor an animal's heartbeat, analyze health patterns, and predict potential health conditions for early detection and timely care.</p>
      <div className="project-tools">
        <span className="tool-tag">Python</span>
        <span className="tool-tag">Google Cloud</span>
        <span className="tool-tag">IoT Sensors</span>
        <span className="tool-tag">AI/ML</span>
      </div>
    </div>

    <div className="project-card">
    <div className="project-image">
  <img
    src={aquasImg}
    alt="AquaS - concept deployment module"
    onError={(e) => {
      e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="100%" height="100%" fill="%2312121b"/><text x="50%" y="50%" fill="%23a0a0a0" font-size="36" font-family="Arial, Helvetica, sans-serif" text-anchor="middle">AquaS</text></svg>'
    }}
  />
</div>


      <h3>AquaS</h3>
      <p>Designing a compact, high-efficiency missile launcher to enhance the operational capabilities of the Indian Navy, ensuring rapid deployment and precision targeting.</p>
      <div className="project-tools">
        <span className="tool-tag">C++</span>
        <span className="tool-tag">Python</span>
        <span className="tool-tag">Embedded Systems</span>
        <span className="tool-tag">IoT</span>
      </div>
    </div>
  </div>

      </section>

      <section id="experience">
        <h2 className="section-title">Thoughts from my world, to yours</h2>
        <p className="section-subtitle">Professional journey and contributions</p>
        <div className="experience-list">
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Xtract.io</h3>
                <h4>Intern - Web Development (Intern Management System)</h4>
              </div>
              <span className="experience-date">June - July 2025 (Full-time)</span>
            </div>
            <ul>
              <li>Contributed to the development of an Intern Management System with a focus on creating a responsive and intuitive frontend interface</li>
              <li>Designed modules for intern registration, task allocation, and progress tracking to simplify workflows</li>
              <li>Optimized application performance and implemented features for secure and efficient data handling</li>
              <li>Collaborated with the team to ensure scalability and usability</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>TRELANZ</h3>
                <h4>Intern - Web Development, Business Development Analyst, Data Analytics</h4>
              </div>
              <span className="experience-date">September 2024 (Remote)</span>
            </div>
            <ul>
              <li>Developed and optimized web applications, enhancing functionality and user experience</li>
              <li>Applied data processing techniques to extract insights for strategic decision-making</li>
              <li>Demonstrated proficiency in problem-solving, adaptability, and collaborative development</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2 className="section-title">My Process & Expertise</h2>
        <p className="section-subtitle">Crafted through continuous learning and hands-on experience</p>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">WordPress</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Soft Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">Leadership</span>
              <span className="skill-tag">Communication</span>
              <span className="skill-tag">Time Management</span>
              <span className="skill-tag">Team Work</span>
              <span className="skill-tag">Problem Solving</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Certifications</h3>
            <div className="skill-tags">
              <span className="skill-tag">Google Digital Marketing</span>
              <span className="skill-tag">CISCO Networking</span>
              <span className="skill-tag">Stanford IoT</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Leadership</h3>
            <div className="skill-tags">
              <span className="skill-tag">Chief Sergeant At Arms</span>
              <span className="skill-tag">Public Relations Officer</span>
              <span className="skill-tag">NSS Member</span>
              <span className="skill-tag">School Pupil Leader</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2 className="section-title">Let's Build Something Amazing</h2>
        <div className="contact-info">
          <p className="section-subtitle">Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          <div className="contact-links">
            <a href="mailto:aravindsrinivasan2006@gmail.com">Email Me</a>
            <a href="https://www.linkedin.com/in/srinivasan--d/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="tel:+919363672714">Call Me</a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Srinivasan D. All rights reserved. | Chennai, India</p>
      </footer>
    </div>
  )
}
//srinivasan