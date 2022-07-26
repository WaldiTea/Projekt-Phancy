import { useContext, useState } from "react";
import { PostContext } from "../../contexts/PostProvider";
import { ModalContext } from "../../contexts/ModalProvider";
import { CurrentPostContext } from "../../contexts/CurrentPostProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faXmark,
  faCirclePlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import InputUpdate from "./InputUpdate";
import { LoadingContext } from "../../contexts/LoadingProvider";
import Loader from "../Loader/Loader";
import useDeletePost from "../../hooks/useDeletePost";
import { DarkModeContext } from "../../contexts/DarkModeProvider";

const Post = () => {
  const { postsArray, setPostsArray } = useContext(PostContext);
  const { setIsModalOpen } = useContext(ModalContext);
  const { isDarkMode } = useContext(DarkModeContext);
  const { currentPost, setCurrentPost } = useContext(CurrentPostContext);
  const { isLoading } = useContext(LoadingContext);

  const [newTag, setNewTag] = useState("");
  const [isUpdateInput, setIsUpdateInput] = useState(false);

  const deletePost = useDeletePost();

  const handleNewTag = (e) => {
    setNewTag(e.target.value);
  };

  const length = postsArray.length;

  const nextSlide = () => {
    setCurrentPost(currentPost === length - 1 ? 0 : currentPost + 1);
  };

  const previousSlide = () => {
    setCurrentPost(currentPost === 0 ? length - 1 : currentPost - 1);
  };

  const updateNewTag = (id) => {
    fetch(`http://localhost:9000/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tag: newTag }),
    })
      .then((response) => response.json())
      .then((data) => setPostsArray(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="post-container">
          <FontAwesomeIcon
            className={`arrow left-arrow ${
              isDarkMode ? "dark-theme-font" : "light-theme-font"
            }`}
            icon={faAngleLeft}
            onClick={() => {
              previousSlide();
              setIsUpdateInput(false);
            }}
          />
          <FontAwesomeIcon
            className={`arrow right-arrow ${
              isDarkMode ? "dark-theme-font" : "light-theme-font"
            }`}
            icon={faAngleRight}
            onClick={() => {
              nextSlide();
              setIsUpdateInput(false);
            }}
          />
          <FontAwesomeIcon
            className={`close ${
              isDarkMode ? "dark-theme-font" : "light-theme-font"
            }`}
            icon={faXmark}
            onClick={() => setIsModalOpen(false)}
          />
          {postsArray
            .slice(0)
            .reverse()
            .map((post, index) => {
              return (
                <div
                  key={post._id}
                  className={index === currentPost ? "slide active" : "slide"}
                >
                  {index === currentPost && (
                    <div className="post">
                      <figure>
                        <img
                          src={"http://localhost:9000/" + post.photo}
                          alt={post.tags[0]}
                        />
                      </figure>
                      <div className="post-content-wrapper">
                        <div className="tag-container">
                          {post.tags.map((tag, i) => {
                            return (
                              <p key={i} className="tag">
                                {tag}
                              </p>
                            );
                          })}
                        </div>
                        <div className="button-wrapper">
                          <button
                            className="btn add-btn"
                            onClick={() => setIsUpdateInput(true)}
                          >
                            <FontAwesomeIcon icon={faCirclePlus} />
                            Tag
                          </button>
                          <button
                            className="btn delete-btn"
                            onClick={() => deletePost(post._id)}
                          >
                            <FontAwesomeIcon icon={faTrashCan} />
                            Löschen
                          </button>
                        </div>
                        {isUpdateInput && (
                          <InputUpdate
                            newTag={newTag}
                            handleNewTag={handleNewTag}
                            updateNewTag={() => {
                              updateNewTag(post._id);
                              setIsUpdateInput(false);
                            }}
                            closeUpdate={() => setIsUpdateInput(false)}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Post;
