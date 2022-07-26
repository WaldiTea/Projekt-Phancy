import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import fileIcon from "../../assets/images/file_blank.png";
import InputTag from "./InputTag";

const InputFile = (props) => {
  const [fileList, setFileList] = useState([]);

  const handlePhoto = (e) => {
    const newFile = e.target.files[0];
    props.setNewPost({ ...props.newPost, photo: newFile });
    if (newFile) {
      const updatedList = [newFile];
      setFileList(updatedList);
    }
  };

  const handleRemoveFile = () => {
    props.newPost.photo = "";
    const updatedList = [];
    setFileList(updatedList);
  };

  return (
    <>
      <div className="file-input-container">
        <div className="file-input-label">
          <FontAwesomeIcon className="input-icon" icon={faImage} />
          <p>Wähle ein Foto...</p>
        </div>
        <input
          className="file-input"
          type="file"
          name="photo"
          accept=".png, .jpg, .jpeg"
          onChange={handlePhoto}
        />
      </div>
      {fileList.length > 0 && (
        <div className="file-preview fade">
          {fileList.map((fileItem, index) => {
            return (
              <div key={index} className="file-preview-item">
                <img src={fileIcon} alt="file-icon" />
                <div className="file-preview-item-content">
                  <p>{fileItem.name}</p>
                  <p>{(fileItem.size / 1000000).toFixed(2)}MB</p>
                </div>
                <FontAwesomeIcon
                  className="file-preview-item-delete"
                  icon={faCircleXmark}
                  onClick={handleRemoveFile}
                />
              </div>
            );
          })}
          <InputTag
            newPostTags={props.newPost.tags}
            handleTags={props.handleTags}
          />
        </div>
      )}
    </>
  );
};

export default InputFile;
