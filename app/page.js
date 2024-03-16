import Image from "next/image";
import styles from "./page.module.css";
import mockImage from "../public/mockImage.jpg";

export default function Home() {
  let Projects = [
    {
      projectName: "Project Name 1",
      projectImage: mockImage,
      peojectDescription:
        "Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. ",
    },
    {
      projectName: "Project Name 2",
      projectImage: mockImage,
      peojectDescription:
        "Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. ",
    },
    {
      projectName: "Project Name 3",
      projectImage: mockImage,
      peojectDescription:
        "Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. ",
    },
    {
      projectName: "Project Name 4",
      projectImage: mockImage,
      peojectDescription:
        "Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. ",
    },
    {
      projectName: "Project Name 5",
      projectImage: mockImage,
      peojectDescription:
        "Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet. ",
    },
  ];
  return (
    <main class="PageContainer">
      <div className="headerWrapper">
        <div className="logo">Necmettin Murat Tenil</div>
        <div className="headerNavigationWrapper">
          <a>Work</a>
          <a>Resume</a>
          <a>Contact</a>
        </div>
      </div>
      <div className="bodyWrapper">
        <div className="selfDescription">Hello! I’m a Product Designer strongly focused</div>
        <div className="selfDescription-2">on creating beautiful and functional UI’s.</div>
        <div class="projects-container">
          {Projects.map((project, index) => {
            console.log(project.projectImage);
            return (
              <div key={index} class="each-project-wrapper">
                <div class="each-project-image-wrapper">
                  <Image className="projectImage" src={project.projectImage} alt="" width={544} height={360} />
                </div>
                <div className="projectTitle">{project.projectName}</div>
                <div className="projectDescription">{project.peojectDescription}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="infoWrapper">
        <div className="inforMessage">Get in touch</div>
        <a className="mailWrapper">murattenil@icloud.com</a>
      </div>
    </main>
  );
}
