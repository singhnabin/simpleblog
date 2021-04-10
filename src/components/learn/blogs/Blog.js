import React from "react";
import "./Blog.css";

function Blog({ title, dateTime }) {
  return (
    <div className="blog">
      <h2>{title}</h2>
      <h4>Posted on: {dateTime}</h4>
    </div>
  );
}

export default Blog;
