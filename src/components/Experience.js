import React from "react";
import Zoom from "react-reveal/Zoom";

const Experience = () => {
  return (
    <div id="experience" className="experience mainBackground">
      <Zoom>
        <div className="d-flex justify-content-center my-5">
          <h1>experience</h1>
        </div>
      </Zoom>
      <Zoom>
        <div className="text-center">
          <p>
            You can see this also on my LinkedIn:&nbsp;
            <a href="https://www.linkedin.com/in/jgj0/">Connect on LinkedIn</a>
          </p>
        </div>
      </Zoom>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <Zoom>
            <div className="timeline-content">
              <h3>November 2018 - June 7 2021</h3>
              <p>
                Creates apps in the native Android SDK.
                <br />
                • Proven technical expertise in technologies such as Android
                (Java), ORM, MVX MVC architectural patterns, observers, DIAP,
                and other solid principles.
                <br />
              </p>
            </div>
          </Zoom>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <Zoom>
            <div className="timeline-content">
              <h3>Decemeber 2021</h3>
              <p>
                Graduate with a Bachelors Degree In Computer Science and a
                concentration in Computer Programming from Baker College.
                Recieved honors; <i>magna cum laude.</i>
              </p>
            </div>
          </Zoom>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <Zoom>
            <div className="timeline-content">
              <h3>April 2021 - January 2022</h3>
              <p>
                Creates apps in the React Native and Flutter Libraries. <br />
                <br />
                App Publishing and SVN Github GIT CICD
                <br />
                • Gained extensive experience in deploying websites to Bluehost,
                operating GitHub and CICD pipeline, and publishing multiple
                applications to Google Play and the Apple Store for mobile
                applications.
                <br />
                <br />
                TDD with JEST RNTL & E2E Detox ect.
                <br />
                • Performed test-driven development (TDD) and utilized
                JavaScript testing framework to create and ensure correct unit
                test cases.
                <br />
                • Explored react native testing library and employed static
                testing practice and tools for linting in TypeScript via ESLint
                and Prettier.
                <br />
                • Drove modern, reliable software development practices such as
                integration on the CICD container and configuration like husky.
                <br />
                <br />
                State Lib. Redux Flux MobX Saga Thunk
                <br />
                • Carried out extensive programming in functional and legacy
                class-based components with typescript integration, redux or
                alternatives like context, Flux, and MobX.
                <br />
                <br />
                Clean Architecture MVC OOP ect.
                <br />
                • Took ownership of utilizing and managing UI libraries like
                React Native Paper and React Native Elements.
                <br />
                • Gained hands-on experience writing decoupled systems, context,
                custom hooks, and testing to nearly 100% testing coverage.
                <br />
                • Utilized state management (MVX) with Redux and libraries like
                Async Redux Thunk, Reselect, Immer, Saga, and Async Persistence
                Storage (Local Storage) in React JS Typescript.
                <br />
                <br />
                API: RESTful GraphQL Node Express
                <br />
                • Succeeded in implementing multiple API calls (elastic search),
                Firebase and authentication library, and multiple UI design
                libraries, including React Native Elements, React Native Paper,
                and more.
                <br />• Successful develop many APIs in Mern Stack, Serverless
                Architecture, LAMBDA and AWS.
              </p>
            </div>
          </Zoom>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <Zoom>
            <div className="timeline-content">
              <h3>January 2022 - Present</h3>
              <p>
                Working for Nexient, LLC full time on levi strauss's React
                Native mobile application
                <br />
                <br />
                • Play a vital role in the front-end development of a large
                enterprise mobile application, Levi’s Mobile App, expertly
                utilizing JavaScript, Typescript, React Native and Node in both
                functional components and legacy class-based components.
                <br />
                • Lead the project to the first Unit and Functional tests by
                constructing the initial infrastructure of UTC using Jest and
                the Testing-Library, performing refactors and writing
                architectural documentation to extend testing and expedite
                recognition, integration, and extension of highly cohesive,
                decoupled clean architecture.
                <br />
                • Lead a track to 40% higher completion rate when taking over as
                a track lead. Focusing on discovery & refinement in a complete
                software development lifecycle SDLC maintaining an agile,
                collaborative culture, and fast-paced, high-pressure team
                environment.
                <br />
                • Exceptional at story pointing, managing architectural risks
                and anticipating impediments from teams, conflicts in
                dependencies and acceptance criteria in Scrum and Kanban.
                Writing code that is most possible for future requirement
                changes by employing YAGNI, abstractions and several
                architectural patterns like Dependency Injection DIAP,
                inversion, and SOLID.
                <br />
                • Worked extensively on React Native Bridge code in internal
                libraries of application dealing with video player issues, and
                wrote several features and fixed several bugs that increased
                CSAT scores on my track.
                <br />
              </p>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Experience;
