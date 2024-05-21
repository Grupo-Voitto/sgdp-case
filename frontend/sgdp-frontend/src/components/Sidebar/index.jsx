import React, { useEffect, useState } from 'react';
import { Container, LinkButton } from './styles';
import { RiHome2Fill } from 'react-icons/ri'
import { FaUserAlt } from 'react-icons/fa'
import { BsBarChartFill } from 'react-icons/bs'
const Sidebar = () => {
  const [active, setActive] = useState("dashboard");

  useEffect(() => {
    if (window.location?.href) {
      const href = window.location.pathname;
      console.log("HREF::", href)
      if (href === "/projetos") setActive("projetos");
      if (href === "/") setActive("dashboard");
      if (href === "/pessoas") setActive("pessoas");
    }
  }, [])

  return (
    <Container>
      <LinkButton href="/" active={active === "dashboard"}>
        <RiHome2Fill />
        <span>Dashboard</span>
      </LinkButton>
      <LinkButton href="/pessoas" active={active === "pessoas"}>
        <FaUserAlt />
        <span>Pessoas</span>
      </LinkButton>
      <LinkButton href="/projetos" active={active === "projetos"}>
        <BsBarChartFill />
        <span>Projetos</span>
      </LinkButton>
    </Container>
  )
}

export default Sidebar;