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
            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <Zoom>
                <div className="timeline-content">
                  <h3>Decemeber 2021</h3>
                  <p>
                    Obtained a Bachelor's Degree in Computer Science with a
                    focus on Computer Programming from Baker College. Graduated
                    with high distinction, earning Magna Cum Laude honors.
                  </p>
                </div>
              </Zoom>
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
              <h3>April 2021 - January 2022</h3>
              <p>
                I primarily spearheaded initiatives for one of the most
                substantial React Native applications globally, making an impact
                in 18 countries across 3 continents through the Levi Strauss &
                Co mobile application as a track lead of 4 developers.
              </p>
              <p>
                Key initiatives*: <br />• Pioneering the integration of Jest and
                Testing Library for the first time in the application. Following
                this, I conceived and established the app's inaugural domain
                infrastructure layer, drawing inspiration from Clean and Onion
                Architecture for an efficient, scalable solution. The benefit is
                an inversion of control from its many dependencies and unit test
                robustness on extremely critical eCom business rules. <br />•
                Showcased exemplary leadership as a Track Lead, spearheading a
                team that achieved a noteworthy 40% boost in project completion
                rates. This accomplishment stems from my dedicated focus on
                continuous discovery, delivery, adaptation and refinement
                throughout SDLC stemming from the Agile manifesto. <br />•
                Achieved a 32% lift in product conversion in the US and Canada,
                a 29% lift in India, and a 112% lift everywhere else with a
                navigational rewrite. This rewrite also boosted the CSAT
                conversion from 64% to 74% in terms of ease of navigation <br />
                • Increased efficiency and performance of Vertical Video (and
                thereby the entire application) by 420% on the Android discover
                tab, and elevated scrolling editorials through pagination of the
                entire application. The improvements were achieved by upgrading
                to ExoPlayer, extending bridge code, and implementing an
                app-wide video handling process
              </p>
              <p>
                *Please refer to my resume for a comprehensive overview of the
                key technologies I've been actively involved with.
              </p>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Experience;
