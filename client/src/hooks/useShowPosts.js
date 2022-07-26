import { useContext, useEffect } from "react";
import { LoadingContext } from "../contexts/LoadingProvider";
import { PostContext } from "../contexts/PostProvider";

const useShowPosts = () => {
  const { postsArray, setPostsArray } = useContext(PostContext);
  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    fetch("http://localhost:9000/posts/all")
      .then((response) => response.json())
      .then((data) => {
        setPostsArray(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [setPostsArray, setIsLoading]);

  return postsArray;
};

export default useShowPosts;
