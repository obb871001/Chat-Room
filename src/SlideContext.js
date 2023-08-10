import React, { createContext, useContext, useState } from "react";

const SlideContext = createContext();

export const SlideProvider = ({ children }) => {
  const [isSlide, setIsSlide] = useState(false);

  return (
    <SlideContext.Provider value={{ isSlide, setIsSlide }}>
      {children}
    </SlideContext.Provider>
  );
};

export const useSlideContext = () => useContext(SlideContext);
