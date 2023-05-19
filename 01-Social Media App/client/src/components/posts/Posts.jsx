import Post from "../post/Post";

import "./posts.scss";

import { useQuery } from "@tanstack/react-query";

import { makeRequest } from "../../axios";

const Posts = () => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts").then((res) => {
      return res.data;
    })
  );

  return (
    <div>
      {error
        ? console.log("Something went wrong", error)
        : isLoading
        ? "loading"
        : data.map((post) => (
            <div className="post">
              <Post post={post} key={post.id} />
            </div>
          ))}
    </div>
  );
};

export default Posts;
