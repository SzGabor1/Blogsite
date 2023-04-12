import React from 'react';

interface Post {
  id: number;
  title: string;
  date: string;
  content: string;
}

interface Props {
  posts: Post[];
}

function BlogList(props: Props) {
  return (
    <div className="blog-list">
      {props.posts.map((post) => (
        <div className="blog-post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
