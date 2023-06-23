import React from "react";
import Card from "react-bootstrap/Card";

interface Article {
  title: string;
  subtitle: string;
  imgUrl: string;
  link: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Card
      className="article-card"
      onClick={() => (window.location.href = `${article.link}`)}
    >
      <Card.Img
        variant="top"
        src={article.imgUrl}
        className="article-card-image"
      />
      <Card.Body>
        <Card.Title className="article-card-title">{article.title}</Card.Title>
        <Card.Text className="article-card-subtitle">
          {article.subtitle}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
