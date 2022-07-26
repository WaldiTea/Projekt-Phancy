const Modal = (props) => {
  return (
    <div className={`modal-background ${props.styleModal}`}>
      {props.children}
    </div>
  );
};

export default Modal;
