import Image from "next/image";
import styles from "./page.module.css";
import locationIcon from "../public/location-icon.png";

import social1 from "../public/social-icons-ani.png";
import social2 from "../public/social-icons-ani-1.png";
import social3 from "../public/social-icons-ani-2.png";
import social4 from "../public/social-icons-ani-3.png";
import social5 from "../public/social-icons-ani-4.png";

import resume from "../public/resume.png";

import ok from "../public/ok.png";
import ok2 from "../public/ok2.png";

import project1 from "../public/project-1.png";
import project2 from "../public/project-2.png";
import project3 from "../public/project-3.png";
import project4 from "../public/project-4.png";
import project5 from "../public/project-5.png";
import project6 from "../public/project-6.png";
import project7 from "../public/project-7.png";

export default function Home() {
  return (
    <main class="PageContainer">
      <div className="headerWrapper">
        <div className="logo">murattenil.com</div>
        <div className="location-wrapper">
          <Image width={24} height={24} src={locationIcon} /> <div>Glasgow, UK</div>
        </div>
      </div>
      <div className="bodyWrapper">
        <div className="section-one">
          <div className="name-wrapper">N. Murat Tenil</div>
          <div className="field-wrapper">Product Designer</div>
        </div>
        <div className="section-two">
          <div className="welcome">Welcome</div>
          <div className="description">I’m a designer living in Glasgow, UK. I always to aim</div>
        </div>
        <div className="socialWrapper section-three">
          <a href="https://www.instagram.com/muratenil/" target="_blank" className="each-social-wrapper">
            <Image width={20} height={24} src={social1}></Image>
            <div className="ok-wrapper">
              <Image width={13} height={13} src={ok}></Image>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/murattenil/" target="_blank" className="each-social-wrapper">
            <Image width={20} height={24} src={social2}></Image>
            <div className="ok-wrapper">
              <Image width={13} height={13} src={ok}></Image>
            </div>
          </a>
          <a href="https://www.behance.net/murattenil" target="_blank" className="each-social-wrapper">
            <Image width={20} height={24} src={social3}></Image>
            <div className="ok-wrapper">
              <Image width={13} height={13} src={ok}></Image>
            </div>
          </a>
          <a href="https://dribbble.com/murattenil" target="_blank" className="each-social-wrapper">
            <Image width={20} height={24} src={social4}></Image>
            <div className="ok-wrapper">
              <Image width={13} height={13} src={ok}></Image>
            </div>
          </a>
          <a href="https://layers.to/murattenil" target="_blank" className="each-social-wrapper">
            <Image width={20} height={24} src={social5}></Image>
            <div className="ok-wrapper">
              <Image width={13} height={13} src={ok}></Image>
            </div>
          </a>
        </div>
        <div className="section-four">...</div>
        <div className="section-five">
          <div className="welcome">Works</div>
          <div className="description">
            Lorem ipsum dolor sit amed. Lorem ipsum dolor sit amed. Lorem ipsum dolor sit amed. Lorem ipsum dolor sit
            amed. Lorem ipsum dolor sit amed.{" "}
          </div>
          <div className="projects-wrapper">
            <a href="https://cubo.com.tr/" target="_blank">
              <div className="project-each-wrapper">
                <Image width={512} height={512} src={project1}></Image>
              </div>
              <div className="project-ok-wrapper">
                <Image width={16} height={16} src={ok2}></Image>
              </div>
              <div className="onHover-projecet-each">
                <div className="project-title">CUBO</div>
                <div className="project-descr">Web Design</div>
              </div>
            </a>
            <a href="https://apps.apple.com/be/app/attelia-health-tour/id6458876242" target="_blank">
              <div className="project-each-wrapper">
                <Image width={512} height={512} src={project2}></Image>
              </div>
              <div className="project-ok-wrapper">
                <Image width={16} height={16} src={ok2}></Image>
              </div>
              <div className="onHover-projecet-each">
                <div className="project-title">Attelia</div>
                <div className="project-descr">Mobile App Design</div>
              </div>
            </a>
            <a href="" target="_blank">
              <div className="project-each-wrapper">
                <Image width={512} height={512} src={project3}></Image>
              </div>
              <div className="project-ok-wrapper">
                <Image width={16} height={16} src={ok2}></Image>
              </div>
              <div className="onHover-projecet-each">
                <div className="project-title">Tech Admire</div>
                <div className="project-descr">Product Design</div>
              </div>
            </a>
            <a href="" target="_blank">
              <div className="project-each-wrapper">
                <Image width={512} height={512} src={project4}></Image>
              </div>
              <div className="project-ok-wrapper">
                <Image width={16} height={16} src={ok2}></Image>
              </div>
              <div className="onHover-projecet-each">
                <div className="project-title">Uni Admire [WIP]</div>
                <div className="project-descr">Product Design</div>
              </div>
            </a>
            <a href="https://www.behance.net/gallery/193558665/Admire-UI-Kit-Web-Design" target="_blank">
              <div className="project-each-wrapper">
                <Image width={512} height={512} src={project5}></Image>
              </div>
              <div className="project-ok-wrapper">
                <Image width={16} height={16} src={ok2}></Image>
              </div>
              <div className="onHover-projecet-each">
                <div className="project-title">Admire UI [WIP]</div>
                <div className="project-descr">Web Design</div>
              </div>
            </a>
            <a href="https://www.behance.net/gallery/180362435/BM-Design-Brand-Identity" target="_blank">
              <div className="project-each-wrapper">
                <Image width={512} height={512} src={project6}></Image>
              </div>
              <div className="project-ok-wrapper">
                <Image width={16} height={16} src={ok2}></Image>
              </div>
              <div className="onHover-projecet-each">
                <div className="project-title">BIM DESIGN</div>
                <div className="project-descr">Branding</div>
              </div>
            </a>
            <a href="https://candycandy.co/" target="_blank">
              <div className="project-each-wrapper">
                <Image width={512} height={512} src={project7}></Image>
              </div>
              <div className="project-ok-wrapper">
                <Image width={16} height={16} src={ok2}></Image>
              </div>
              <div className="onHover-projecet-each">
                <div className="project-title">CandyCandy [WIP]</div>
                <div className="project-descr">Branding</div>
              </div>
            </a>
          </div>
        </div>
        <div className="section-six">...</div>
        <div className="section-seven">
          <a href="" target="_blank" className="socialWrapper">
            Click for my resume
            <div className="each-social-wrapper">
              <Image width={20} height={20} src={resume}></Image>
              <div className="ok-wrapper">
                <Image width={13} height={13} src={ok}></Image>
              </div>
            </div>
          </a>
        </div>
        <div className="section-eight">Lorem ipsum dolor sit amet. Name Surname</div>
        <div className="section-nine">
          <div>murattenil@icloud.com</div>
          <div>Made with 🤍</div>
        </div>
      </div>
    </main>
  );
}
