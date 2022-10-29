import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import CarList from "../components/CarList";
import Header from "../components/Header";
import { Intro } from "../components/Intro";
import { MenuMobile } from "../components/MenuMobile";
import { AuthConstext } from "../context/AuthContext";

export default function Cars() {
  const { isAuthenticate } = useContext(AuthConstext)

  const router = useRouter()
  useEffect(() => {
    if(!isAuthenticate) {
      router.push('/')
    }
  },[isAuthenticate, router])

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