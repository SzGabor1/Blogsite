import React, { useState } from "react";
import { Post } from "./types";

interface Props {
  posts: Post[];
}

const BlogList: React.FC<Props> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.date.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="blog-list">
      <div className="searchBar">
        <form className="inputForm">
          <input
            type="text"
            placeholder="Search posts by title, date, or text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>

      {filteredPosts.map((post) => (
        <div className="blog-post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
