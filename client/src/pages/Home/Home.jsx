import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalProvider";
import useShowPosts from "../../hooks/useShowPosts";
import Picture from "../../components/Post/Picture";
import { CurrentPostContext } from "../../contexts/CurrentPostProvider";
import { LoadingContext } from "../../contexts/LoadingProvider";
import Loader from "../../components/Loader/Loader";
import useDeletePost from "../../hooks/useDeletePost";

const Home = (props) => {
  const postsArray = useShowPosts();
  const { setIsModalOpen } = useContext(ModalContext);
  const { setCurrentPost } = useContext(CurrentPostContext);
  const { isLoading } = useContext(LoadingContext);

  const deletePost = useDeletePost();

  const handleModal = () => {
    setIsModalOpen(true);
    props.setIsFullPost(true);
    props.setIsFormInput(false);
  };

  const handleCurrentPost = (index) => {
    setCurrentPost(index);
  };

  return (
    <section className="section home-section">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="gallery fade">
          {postsArray
            .slice(0)
            .reverse()
            .map((picture, index) => (
              <Picture
                key={picture._id}
                onClick={() => {
                  handleModal();
                  handleCurrentPost(index);
                }}
                image={"http://localhost:9000/" + picture.photo}
                tags={picture.tags}
                delete={() => deletePost(picture._id)}
              />
            ))}
        </div>
      )}
    </section>
  );
};

export default Home;
