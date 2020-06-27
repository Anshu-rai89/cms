import React from "react";
import BlogList from "./components/BlogList";
const apiUrl = "http://localhost:7000/api/v1/blog";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    fetch(apiUrl)
      .then((respose) => respose.json())
      .then((data) => {
        this.setState({ blogs: data.blogs });
      });
  }
  render() {
    const { blogs } = this.state;
    console.log(blogs);
    return (
      <div className="App">
        {blogs.length > 0 ? <BlogList blogs={blogs} /> : <h2>Loading ....</h2>}
      </div>
    );
  }
}

export default App;
