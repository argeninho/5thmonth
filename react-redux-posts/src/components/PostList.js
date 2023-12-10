import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postsSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {`User ID: ${post.userId} - ID: ${post.id} `}
          <button
            onClick={() => alert(`Title: ${post.title}\n\nBody: ${post.body}`)}
          >
            More info
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
