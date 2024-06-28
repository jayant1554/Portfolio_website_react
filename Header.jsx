import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  border-radius: 8px 8px 0 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Navigation = styled.nav`
  text-align: center;
  margin-top: 10px;
`;

const NavLink = styled.a`
  display: inline-block;
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #80c4e9;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Jayant Bisht</Title>
      <Subtitle>B.Tech Student | Passionate about Data Science and AI/ML</Subtitle>
      <Navigation>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#interests">Interests</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
