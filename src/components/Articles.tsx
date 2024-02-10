import React from "react";
import ArticleCard from "./ArticleCard";
import ArticleFold from "../images/ARTICLE_FOLD.png";
import DPArticle from "../images/DPARTICLE.png";
import DIAP from "../images/DIAP.png";
import CleanArch from "../images/CleanArch.png";
import TestingStrategy from "../images/TestingStrategy.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// @ts-ignore
import Zoom from "react-reveal/Zoom";

const TestingStrategyArticle = {
  title:
    "A Closer Look at The Bizarre Testing Strategies of Most Modern Applications",
  subtitle:
    "It's startling how many developers undervalue unit tests or misunderstand their true potential. Unfortunately, I've found that most people and companies approach testing all wrong,",
  imgUrl: TestingStrategy,
  link: "https://www.linkedin.com/pulse/closer-look-bizarre-testing-strategies-most-modern-john-jackson/",
};

const dpArticle = {
  title: "Why you should use Dependency Injection in React",
  subtitle:
    "Today, we're going to take a deep dive into the 'why' and 'how' of flipping the control of external dependencies in a React project. We know",
  imgUrl: DPArticle,
  link: "https://www.linkedin.com/pulse/lost-superpower-dependency-injection-react-john-jackson/?trackingId=huQjAtlXQBOJCS%2FfpNzavQ%3D%3D",
};

const cleanArchArticle = {
  title: "Simple Understanding of Clean Architecture in React Native",
  subtitle:
    "In the vast landscape of software development, a segment of developers seeks to optimize their applications by closely tailoring them to the underlying infrastructure, ",
  imgUrl: CleanArch,
  link: "https://www.linkedin.com/pulse/simple-understanding-clean-architecture-react-native-john-jackson/?trackingId=EeqM2Q7vTgeeO93MLneT8A%3D%3D",
};

export const Articles = () => {
  return (
    <div className="articles">
      <Zoom>
        <h1 className="py-5">Blog</h1>
      </Zoom>
      <Container>
        <Zoom>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <ArticleCard article={TestingStrategyArticle} />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <ArticleCard article={dpArticle} />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <ArticleCard article={cleanArchArticle} />
            </Col>
          </Row>
        </Zoom>
      </Container>
    </div>
  );
};
