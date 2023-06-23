import React from "react";
import ArticleCard from "./ArticleCard";
import ArticleFold from "../images/ARTICLE_FOLD.png";
import DPArticle from "../images/DPARTICLE.png";
import DIAP from "../images/DIAP.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Zoom from "react-reveal/Zoom";

const EitherFoldArticle = {
  title: "How Either & Fold can help propagate Errors Better",
  subtitle:
    "It's a widely recognized fact that JavaScript at its core isn't the unrivaled superior language ever conceived. Instead, contemporary languages like Go or Rust could claim this title. These languages",
  imgUrl: ArticleFold,
  link: "https://www.linkedin.com/pulse/how-either-fold-can-help-propagate-errors-better-react-john-jackson/?trackingId=XYHal2xPQY%2BwSlM3gtlORg%3D%3D",
};

const dpArticle = {
  title: "Why you should use Dependency Injection in React",
  subtitle:
    "Today, we're going to take a deep dive into the 'why' and 'how' of flipping the control of external dependencies in a React project. We know",
  imgUrl: DPArticle,
  link: "https://www.linkedin.com/pulse/lost-superpower-dependency-injection-react-john-jackson/?trackingId=huQjAtlXQBOJCS%2FfpNzavQ%3D%3D",
};

const diapArticle = {
  title: "Why you should use Dependency Injection in React",
  subtitle:
    "In the previous article, I highlighted the benefits of employing Dependency Injection within React applications. Now, with this piece, my goal is to underscore how Dependency",
  imgUrl: DIAP,
  link: "https://www.linkedin.com/pulse/why-you-should-use-diap-react-john-jackson/?trackingId=huQjAtlXQBOJCS%2FfpNzavQ%3D%3D",
};

export const Articles = () => {
  return (
    <div className="mainBackground articles">
      <Zoom>
        <h1 className="py-5">Articles</h1>
      </Zoom>
      <Container>
        <Zoom>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <ArticleCard article={EitherFoldArticle} />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <ArticleCard article={dpArticle} />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <ArticleCard article={diapArticle} />
            </Col>
          </Row>
        </Zoom>
      </Container>
    </div>
  );
};
