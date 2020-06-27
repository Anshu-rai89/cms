import React from "react";

const Blog = (props) => {
  const { blog } = props;
  let color;
  if (blog.category == "education") color = "green";
  else if (blog.category == "tech") color = "yellow";
  else color = "brown";
  return (
    <div className="card ">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title"> Author {blog.author}</span>

        <span
          style={{ marginTop: "-55px", marginLeft: "270px", color: "black" }}
          className={`btn waves-effect ${color}`}
        >
          {blog.category}
        </span>

        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default Blog;
