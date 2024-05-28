import React, { useContext, useEffect, useState } from 'react';
import { Container, LinkButton } from './styles';
import { RiHome2Fill } from 'react-icons/ri'
import { FaUserAlt } from 'react-icons/fa'
import { BsBarChartFill } from 'react-icons/bs'
import { SideBarContext } from '../../SidebarContext';

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");

  const { openSide } = useContext(SideBarContext);

  useEffect(() => {
    if (window.location?.href) {
      const href = window.location.pathname;
      if (href === "/projetos") setActive("projetos");
      if (href === "/") setActive("dashboard");
      if (href === "/membros") setActive("membros");
    }
  }, [])

  return (
    <Container open={openSide}>
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