import { useContext } from "react";
import { ModalContext } from "../contexts/ModalProvider";
import { PostContext } from "../contexts/PostProvider";

const useDeletePost = () => {
  const { setPostsArray } = useContext(PostContext);
  const { setIsModalOpen } = useContext(ModalContext);

  const deletePost = (id) => {
    fetch(`http://localhost:9000/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => setPostsArray(data))
      .catch((err) => console.log(err));

    setIsModalOpen(false);
  };

  return deletePost;
};

export default useDeletePost;
