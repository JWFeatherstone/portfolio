import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Recs",
    imgSrc: "project-imgs/recs.png",
    code: "https://github.com/JWFeatherstone/recs",
    projectLink: "https://recs-ecru.vercel.app/",
    tech: ["React", "NextJS", "TypeScript", "TailwindCSS", "Postgres", "AWS S3", "GoLang"],
    description:
      "A social media platform for sharing and discovering recommendations for books, movies, and music.",
    modalContent: (
      <>
        <p>
          As I&apos;ve gained more experience building out smaller, short-term projects and completing contract work for individual feature additions, I&apos;ve
          found myself increasingly interested in the process of building with an explicit intention of scalability and expanding my knowledge of overall
          systems design and architecture.
        </p>
        <p>
          Recs is an ongoing prototyping project, in effect, that I&apos;ve been building out in my free time as a vehicle for thinking more consciously about
          the overall structure of a fullstack application and the higher-order considerations that go into building something that isn&apos;t just functional,
          but also performant and maintainable.
        </p>
        <p>
          In many ways this continues to be a formative project for me as a result: solidifying my belief in the value of taking the time to plan and design,
          explicitly document code - using TypeScript, JSDocs, documentation, and comments - and remain ever-conscious of the bigger picture. Questions - 
          &ldquo;but how will this run?&rdquo;, &ldquo;how am I handling race conditions?&rdquo;, &ldquo;what if hundreds of users make a write request at once?&rdquo;, &ldquo;how can I limit the number of requests and refreshes I&apos;m making?&rdquo; - 
          have been the driver for decisions such as implementing a queue system for write requests, memoizing feed and search data, caching as much data as possible,
          and using cron jobs to help with everything from refreshing API tokens to creating smaller subsets of data for faster querying.
        </p>
      </>
    ),
  },
  {
    title: "CoProject",
    imgSrc: "project-imgs/co-project.png",
    code: "https://github.com/JWFeatherstone/ProjectGo",
    projectLink: "https://project-go-omega.vercel.app/browser",
    tech: ["React", "Django", "MaterialUI", "Vite", "Postgres", "Firebase"],
    description:
      "An under-construction platform designed to help Coloradans connect and collaborate around personal projects.",
    modalContent: (
      <>
        <p>
          CoProject is a web application designed to connect creators of all kinds in Colorado.
          As a former planner with lingering wannabe community organizer tendencies, this is a passion project for me that I continue to design and build solo between contracts.
        </p>
        <p>
          The tech stack uses React and Vite for the frotend, 
          while I&apos;ve been building the backend in Python/Django and Go simultaneously to better reinforce the concepts behind backend development 
          and to increase my exposure to both different languages and ORM and non-ORM database management. 
          Data is stored in Postgres and user authentication is handled through Firebase.
        </p>
        <p>
          As a long-term community-oriented project, the most instructive part of this process
           - more so than new technologies - has been in planning and designing from day one for (relative) scale and maintainability.
          Having the opportunity to really be considerate about the architecture of the project, a cohesive design and component library,
          and the end-to-end flow of data and users&apos; experiences has greatly increased my appreciation for
          the macro aspects of software development.
        </p>
      </>
    ),
  },
  {
    title: "Game Night",
    imgSrc: "project-imgs/game-night.png",
    code: "https://github.com/Game-Night-2301/game-night-fe",
    projectLink: "https://game-night-2rvq2bebx-game-night.vercel.app/",
    tech: ["React", "GraphQL / Apollo", "Redux", "GitHub Actions", "Cypress"],
    description:
      "A matchmaking application for board game events built with a team of seven developers over the course of two weeks.",
    modalContent: (
      <>
        <p>
          Game Night is a web application designed to connect board game enthusiasts
          with events and other players in their local area. Users can build a profile,
          document and share their board game collections, and receive AI-tailored lists of games to try
          based on their existing collection.
        </p>
        <p>
          I worked primarily on the frontend for this application, building from the React framework and using Apollo to handle GraphQL queries,
           Redux for global state management, and Cypress for end-to-end testing.
        </p>
        <p>
          Given the size of the team, the short time frame, and the new technologies we sought to integrate, 
          the most rewarding aspect of this project came from the opportunity to implement so many of the lessons 
          I&apos;d learned throughout Turing about working with remote, multidisciplinary teams - both as a developer and project manager. 
        </p>
        <p>
          Namely, coordinating with the backend team around the structure of the GraphQL queries and mutations reinforced the value of
          taking the time to create clear and consistent lines of communication and documentation before diving into the code, and - on the front end - 
          spending the additional time to develop and critique wire frames, component libraries, and standardized styling conventions was vital to
          allowing us to rapidly build out features in parallel.
        </p>
      </>
    ),
  },
  {
    title: "Colorado Owl Watch",
    imgSrc: "project-imgs/co-owls.png",
    code: "https://github.com/JWFeatherstone/Colorado-Owl-Watch",
    projectLink: "https://co-owl-watch.vercel.app/",
    tech: ["React", "Cypress", "Leaflet", "CSS"],
    description:
      "Allows Coloradans to monitor a personalized real-time dashboard of recent owl sightings.",
    modalContent: (
      <>
        <p>
          Using the Cornell Lab of Ornithology&apos;s eBird API, this application allows users to
          track recent owl sightings in Colorado and to dig deeper into specific species to see
          information on historical sightings and the birds&apos; behavioral, physical, and habitat characteristics. 
          Users can track specific species to receive specialized notifications via the recent sightings map.
        </p>
        <p>
          A solo project built in the space of a week, this application was an opportunity 
          to apply the fundamentals of creating a single-page application
          within the React framework and to further practice working with third-party APIs.
        </p>
        <p>
          While necessarily simple in scope, the opportunity to emulate a real-world iterative development process
          with the help of Denver Audubon and Denver Field Ornithologists members has left a lasting impression
           on my work as a frontend developer. And eBird remains the standard by which I judge my own code&apos;s documentation.
        </p>
      </>
    ),
  },
  {
    title: "Sisphyus Fitness",
    imgSrc: "project-imgs/sisphyus-fitness.png",
    code: "https://github.com/JWFeatherstone/fitlit-adriane-houda-sam-john",
    projectLink: "https://github.com/JWFeatherstone/fitlit-adriane-houda-sam-john",
    tech: ["JavaScript", "Mocha/Chai", "Leaflet"],
    description:
      "A fitness tracking application allowing users to monitor and log their fitness and health data and see their latest running routes.",
    modalContent: (
      <>
        <p>Sisphyus Fitness was a dashboard for users&apos; health and fitness data. </p>
        <p>
          An early, vanilla JavaScript project built over the course of two weeks alongside a four-person team of frontend developers,
          the primary intent behind this project was to practice using a test-driven development philosophy and workflow and to build on the team&apos;s
          experience designing and testing for accessibility.
        </p>
        <p>While an early project during my time at the Turing School, the thoughtfulness and intention
           of my team&apos;s testing-first approach and their consideration from planning onward for universal user accessibility
           has continued to inform the value I place as a developer in a considerate and inclusive approach to software development.
        </p>
      </>
    ),
  },
];
