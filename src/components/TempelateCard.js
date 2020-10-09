import React from "react";
import "bulma/css/bulma.css";

function TempelateCard(props) {
  console.log(props.articles);
  return (
    <div>
      {props.articles.map((article) => (
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={article.author.image} alt="athorimage" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{article.title}</p>
                <p className="subtitle is-6">@{article.author.username}</p>
              </div>
            </div>

            <div className="content">
              {article.description}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              {article.tagList.map((list) => (
                <a href="#">#{list}</a>
              ))}
              <br />
              <time>{article.updatedAt}</time>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TempelateCard;
