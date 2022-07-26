import { createContext, useState } from "react";

const CurrentPostContext = createContext();

const CurrentPostProvider = (props) => {
  const [currentPost, setCurrentPost] = useState(0);

  return (
    <CurrentPostContext.Provider value={{ currentPost, setCurrentPost }}>
      {props.children}
    </CurrentPostContext.Provider>
  );
};

export { CurrentPostContext, CurrentPostProvider };
