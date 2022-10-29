import { useState } from "react";
import CarList from "../components/CarList";
import Header from "../components/Header";
import { Intro } from "../components/Intro";
import { MenuMobile } from "../components/MenuMobile";

export default function Cars() {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

  function handleSetMenuIsVisible() {
    setMenuIsVisible(true)
  }
  
  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header handleSetMenuIsVisible={handleSetMenuIsVisible} />
      <Intro />
      <CarList />
    </>
  )
}