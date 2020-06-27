import React from "react";
import Blog from "./Blog";
const Bloglist = (props) => {
  const { blogs } = props;
  return (
    <div className="card ">
      {blogs.map((blog) => (
        <Blog blog={blog} />
      ))}
    </div>
  );
};

export default Bloglist;
