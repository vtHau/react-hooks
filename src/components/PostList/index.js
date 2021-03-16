import React from "react";

function PostList(props) {
  const { postList } = props;
  return (
    <div>
      <ul>
        {postList.map((post, key) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
