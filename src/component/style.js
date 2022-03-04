import styled from "styled-components";

const Cont = styled.div``;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20%;
  font-size: 195%;
  padding-top: 2%;
  font-size: 170%;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  width: 100%;
  background-color: whitesmoke;
  color: red;
`;
const Navbar = styled.div`
  background-color: aliceblue;
  justify-content: space-around;
`;

const Container = styled.div`
  text-align: center;
  justify-content: center;
  margin: 100px;
  display: flex;
  font-size: 200%;
`;
const Footer = styled.div`
  text-align: center;
  color: red;
`;
const MainHeading = styled.h1`
  padding: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  color: red;
  background-color: blue;
`;
export const Component = styled.div`
  width: 30%;
  height: 30%;
  margin-top: -1000px;
  position: absolute;
  display: flex;
  background-color: antiquewhite;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 390px;
`;

export { Navbar, Container, MainHeading, Footer, Section, Cont, Content };
