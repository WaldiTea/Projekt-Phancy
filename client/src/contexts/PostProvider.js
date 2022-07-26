import { createContext, useState } from "react";

const PostContext = createContext();

const PostProvider = (props) => {
  const [postsArray, setPostsArray] = useState([]);

  return (
    <PostContext.Provider value={{ postsArray, setPostsArray }}>
      {props.children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
