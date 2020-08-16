import React from "react";
import styled from "styled-components";
import "./styles.css";

const Container = styled.div`
  background: red;
`;

const Header = styled.header`
  height: 40px;
  background: blue;
  display: flex;
  color: #fff;
  justify-content: space-between;
  position: fixed;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  padding-top: 40px;
  flex-direction: row;
  height: calc(100vh - 60px); //Aqui mostra eh feito o calculo
`;

const SideMenu = styled.aside`
  background: pink;
  width: 100px;
`;

const Content = styled.div`
  background: gray;
  flex: 1;
  overflow-y: auto;
`;

const Footer = styled.footer`
  height: 20px;
`;

export default function App() {
  return (
    <Container>
      <Header>
        <span>Título</span>
        <span>Perfil</span>
      </Header>
      <Main>
        <SideMenu>Menu</SideMenu>
        <Content>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
          <p>Teste scroll</p>
        </Content>
      </Main>
      <Footer>Footer</Footer>
    </Container>
  );
}
