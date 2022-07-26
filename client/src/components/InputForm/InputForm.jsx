import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../contexts/PostProvider";
import { ModalContext } from "../../contexts/ModalProvider";
import InputFile from "./InputFile";

import FormButtons from "./FormButtons";

const InputForm = () => {
  const { setPostsArray } = useContext(PostContext);
  const { setIsModalOpen } = useContext(ModalContext);

  const [newPost, setNewPost] = useState({
    photo: "",
    tags: "",
  });

  const navigate = useNavigate();

  const handleTags = (e) => {
    setNewPost({ ...newPost, tags: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", newPost.photo);
    formData.append("tags", newPost.tags);

    fetch("http://localhost:9000/posts/add", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => setPostsArray(data))
      .catch((err) => console.log(err));

    setIsModalOpen(false);
    navigate("/");
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div className="form-container fade">
      <form className="form" encType="multipart/form-data">
        <InputFile
          newPost={newPost}
          setNewPost={setNewPost}
          newPostTags={newPost}
          handleTags={handleTags}
        />

        <FormButtons
          handleSubmit={handleSubmit}
          handleCloseModal={handleCloseModal}
        />
      </form>
    </div>
  );
};

export default InputForm;
