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
      if (href === "/projetoss") setActive("projetos");
      if (href === "/") setActive("dashboard");
      if (href === "/membros") setActive("membros");
    }
  }, [])

  return (
    <Container>
      <LinkButton href="/" active={active === "dashboard"}>
        <RiHome2Fill />
        <span>Dashboard</span>
      </LinkButton>
      <LinkButton href="/membros" active={active === "membros"}>
        <FaUserAlt />
        <span>Membros</span>
      </LinkButton>
      <LinkButton href="/projetos" active={active === "projetos"}>
        <BsBarChartFill />
        <span>Projetos</span>
      </LinkButton>
    </Container>
  )
}

export default Sidebar;