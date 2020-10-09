import React from "react";
import TempelateCard from "./TempelateCard";
import Header from "./Header";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://mighty-oasis-08080.herokuapp.com/api/articles?limit=10&offset=0"
    )
      .then((res) => res.json())
      .then((articles) => {
        console.log(articles);
        this.setState({ articles: articles.articles });
      });
  }
  render() {
    return (
      <div className="container">
        <Header updateLoggedInUser={this.props.updateLoggedInUser} />
        <div className="flex">
          <TempelateCard articles={this.state.articles} />
        </div>
      </div>
    );
  }
}
export default Home;
