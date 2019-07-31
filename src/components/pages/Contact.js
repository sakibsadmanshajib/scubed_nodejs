import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../../assets/logo.png";
//import simple from "../../assets/1 simple.jpg";
import simple from "../../assets/contacts.jpg";
import Footer from "../footer";
import Scrooth from "../../scrooth";

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  grid-template-rows: 35vh 20vh 1fr;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  background: white;
  margin-bottom: 3rem;
`;

const LogoContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  img {
    position: relative;
    margin-left: 7em;
    max-width: 10vw;
  }
`;

const ContactContainer = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  padding-left: 4rem;
  //border: 1px solid black;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 30rem;
`;

const ContactHeadline = styled.h1`
  color: #111111;
  letter-spacing: 4px;
  font-size: 9em;
  font-family: ralewaylight;
`;

const ContactSubtitle = styled.div`
  width: 80%;
  margin-top: 0.5em;
  line-height: 1.3em;
  font-size: 2em;
  font-family: ralewayregular;
`;

const ContactInfoContainer = styled.div`
  margin-top: 1em;
  font-family: ralewayregular;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Info = styled.div`
  line-height: 1.5em;
  padding: 1em 0em;
  &:nth-child(odd) {
    grid-column: 1 / 2;
  }
  h3 {
    font-size: ralewaythin;
    font-size: 0.7em;
    padding: 0.5em 0em;
  }
`;

const ExtraImgContainer = styled.div`
  grid-column: 3;
  grid-row: 3;
  img {
    max-width: 100%;
  }
`;

class Contact extends Component {
  componentDidMount() {
    const scroll = new Scrooth({
      element: document.querySelector('.contact'),
      strength: 18,
      acceleration: 2.5,
      deceleration: .9,
    });
  }
  render() {
    return (
      <PageContainer className = "contact">
        <LogoContainer>
          <img src={logo} />
        </LogoContainer>
        <ContactContainer>
          <ContactHeadline>Contact</ContactHeadline>
          <ContactSubtitle>
            For any enquiries, or just to say hello, get in touch and contact
            us.
          </ContactSubtitle>
          <ContactInfoContainer>
            <Info>
              <h3>E-mail</h3> <span>contact@scubed.com.bd</span>
            </Info>
            <Info>
              <h3>Call us</h3> <span>+8809638012013</span>
            </Info>
            <Info>
              <h3>Address</h3>{" "}
              <span>Flat B2, House 60, 2 Janata Housing Society, Adabor, Dhaka 1207</span>
            </Info>
          </ContactInfoContainer>
        </ContactContainer>
        <ExtraImgContainer>
          <img src={simple} />
        </ExtraImgContainer>
      </PageContainer>
    );
  }
}

export default Contact;
