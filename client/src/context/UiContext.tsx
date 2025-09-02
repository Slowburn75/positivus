// src/context/UiContext.tsx
import React, { createContext, useContext, useState } from "react";
const UiContext = createContext(null as any);
export const UiProvider: React.FC<{children:any}> = ({children})=>{
  const [navOpen, setNavOpen] = useState(false);
  return <UiContext.Provider value={{navOpen, setNavOpen}}>{children}</UiContext.Provider>;
}
export const useUi = ()=> useContext(UiContext);
