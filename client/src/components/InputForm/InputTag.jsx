const InputTag = (props) => {
  return (
    <input
      className="tag-input"
      type="text"
      placeholder="Vergebe einen Tag"
      name="tags"
      value={props.newPostTags.tags}
      onChange={props.handleTags}
    />
  );
};

export default InputTag;
