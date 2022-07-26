import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
