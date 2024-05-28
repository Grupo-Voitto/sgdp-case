import React, { Children, createContext, useState } from 'react'

export const SideBarContext = createContext();

export const SideBarProvider = ({children}) => {
  const [openSide, setOpenSide] = useState(false)
  const toggleSideBar = () => setOpenSide(prevTheme => !prevTheme)

  return (
    <SideBarContext.Provider value={{ openSide, toggleSideBar }}>
        {children}
    </SideBarContext.Provider>
)

};