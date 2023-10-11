import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Link as ScrollLink, Element } from 'react-scroll'; // Mengimpor Link dari react-scroll

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="header">
            <nav className="sidebar">
              <a href="foto.jpeg" className="logo"></a>
              <ScrollLink to="home" smooth={true} duration={500} spy={true} offset={-50} activeClass="active-link">
                Home
              </ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} spy={true} offset={-50} activeClass="active-link">
                About
              </ScrollLink>
              <ScrollLink to="experience" smooth={true} duration={500} spy={true} offset={-50} activeClass="active-link">
                Experience
              </ScrollLink>
              <ScrollLink to="skills" smooth={true} duration={500} spy={true} offset={-50} activeClass="active-link">
                Skills
              </ScrollLink>
              <ScrollLink to="awards" smooth={true} duration={500} spy={true} offset={-50} activeClass="active-link">
                Awards
              </ScrollLink>
              <ScrollLink to="interest" smooth={true} duration={500} spy={true} offset={-50} activeClass="active-link">
                Interest
              </ScrollLink>
            </nav>
          </header>

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>

          <Element name="home">
            <Home />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="awards">
            <Awards />
          </Element>
          <Element name="interest">
            <Interest />
          </Element>
        </div>
      </BrowserRouter>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <section className="home" id="home">
        <div className="home-content">
          <h3><span class="first-color">Nanda Sya</span><span class="second-color">rla Hariyanti</span></h3>
          <h2><span class="first-color">+6285604520146</span><span class="second-color">  - nandasyarla58911@gmail.com</span></h2>
          <p>I'm an individual passionate about technology and programming. I'm always looking for ways to enhance my knowledge and skills in software developmentI. 'm committed to learning and continuously growing as a software developer.</p>
        </div>
      </section>
    );
  }
}

class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="about-text">
          <h3>about me</h3>
          <p>I am a dedicated student currently pursuing my Bachelor's degree in Informatics at UPN Veteran Jawa Timur. My journey in the field of technology and computer science has been an exciting one, and I am passionate about all things related to information technology.</p>
          <p>One of my key interests lies in frontend development. I find joy in crafting user-friendly and visually appealing websites and web applications. It's fascinating to see how a few lines of code can bring a website to life and create a seamless user experience.</p>
          <p>As a student, I'm committed to expanding my knowledge in the ever-evolving world of technology. I believe in continuous learning and improvement, and I'm excited to contribute to the world of web development in the near future.</p>
          <p>Thank you for visiting my profile and sharing in my passion for technology and frontend development.</p>
        </div>
      </section>
    );
  }
}

class Experience extends Component {
  render() {
    return (
      <section className="experience" id="experience">
        <div className="experience-text">
          <h3>Experience</h3>

          <table>
            <tr>
              <td>Search Engine Optimization Copywriter - Yogyakarta, Indonesia </td>
              <td class="periode">September 2022 </td>
            </tr>
          </table>
          <p class="cont">CV Rumah Mesin</p>
          <li>Assisting in optimizing website content and implementing SEO strategies to improve organic search rankings.</li>
          <li>Conducting keyword research, optimizing meta tags, and analyzing website traffic and keyword performance. </li>
          <li>Write articles with 10000 ++ words every day according to popular keywords </li>
          <br></br>
          <table>
            <tr>
              <td>Leadership in Society Socialization - Surabaya, Indonesia </td>
              <td class="periode">April 2023 </td>
            </tr>
          </table>
          <p class="cont">Vice Chairperson of Execution</p>
          <li>Plan and coordinate the event, including creating the event program, establishing a timeline, and developing a budget.</li>
          <li>Conducting keyword research, optimizing meta tags, and analyzing website traffic and keyword performance. </li>
          <br></br>
          <table>
            <tr>
              <td>PEMIRA Informatika 2023  - Surabaya, Indonesia  </td>
              <td class="periode">Jan 2023 - Feb2023</td>
            </tr>
          </table>
          <p class="cont">Public Relation division members</p>
          <li>Write and edit press releases, social media posts, and other communication materials related to the event.</li>
          <li>Manage and coordinate effective communications with the public. </li>
          <br></br>
          <table>
            <tr>
              <td>PEMABA 2022 - Surabaya, Indonesia</td>
              <td class="periode">August 2022</td>
            </tr>
          </table>
          <p class="cont">Mentor division members</p>
          <li>Responsible for helping new students understand the academic system, including the selection of courses, the registration process, and academic policies.</li>
          <li>Plan and organize orientation activities, such as campus tours, welcome sessions, group discussions, and team-building exercises.</li>

        </div>
      </section>
    );
  }
}

class Skills extends Component {
  render() {
    return (
      <section className="skills" id="skills">
        <div className="skills-text">
          <h3>skill</h3>

          <h5>Hard skill</h5>
          <table>
            <tr>
              <td><li class="skil">C++</li></td>
              <td><li class="skil">PHP</li></td>
            </tr>
            <tr>
              <td><li class="skil">HTML</li></td>
              <td><li class="skil">Figma UI/UX</li></td>
            </tr>
            <tr>
              <td><li class="skil">CSS</li></td>
              <td><li class="skil">CANVA</li></td>
            </tr>
            <tr>
              <td><li class="skil">SQL</li></td>
              <td><li class="skil">Microsoft Office</li></td>
            </tr>
          </table>

          <h5>Soft skill</h5>
          <table>
            <tr>
              <td><li class="skil">Problem Solving++</li></td>
              <td><li class="skil">Team Work</li></td>
            </tr>
            <tr>
              <td><li class="skil">Analytical Thinking</li></td>
              <td><li class="skil">Communication </li></td>
            </tr>
            <tr>
              <td><li class="skil">Discipline</li></td>
              <td><li class="skil">Attention to Detail</li></td>
            </tr>
            <tr>
              <td><li class="skil" >Time Management</li></td>
            </tr>
          </table>


        </div>
      </section>
    );
  }
}

class Awards extends Component {
  render() {
    return (
      <section className="awards" id="awards">
        <div className="awards-text">
          <h3>awards</h3>
          <li>SMK Do Well Digisocial Fest 2020 PT Telkom Indonesia (Persero) Tbk - Participant </li>
          <li>RPL INDUSTRIAL UKK Certificate 2021 - SMK Telkom Malang</li>
        </div>
      </section>
    );
  }
}

class Interest extends Component {
  render() {
    return (
      <section className="interest" id="interest">
        <div className="interest-text">
          <h3>interest</h3>
          <p>I have a variety of interests that keep me engaged and enthusiastic. Here are some of the things I'm passionate about: </p>
          <p>One of my primary interests is web development. I enjoy creating responsive and user-friendly websites. Front-end development, in particular, excites me because it allows me to bring designs to life and provide a great user experience.</p>
          <p>I'm a tech enthusiast and always eager to learn about the latest advancements in the tech world. From gadgets and software to emerging technologies, I find it fascinating to stay up-to-date and explore how these innovations can improve our lives. </p>
          <p>While I'm passionate about technology, I also love spending time outdoors. Hiking, cycling, and nature exploration are some of my favorite activities. It's a great way to relax, stay active, and connect with the natural world. </p>
          <p>In addition to my love for technology and the great outdoors, I have a keen interest in culinary arts. Cooking has become a creative outlet for me, allowing me to experiment with flavors and techniques. I find joy in preparing delicious meals and sharing them with friends and family.</p>
        
        </div>
      </section>
    );
  }
}

export default App;
