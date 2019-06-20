import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import landing3 from "../../assets/landing3.jpg";
import SpecialText from "../specialText.js";
import Footer from "../footer";
import Landing from "./studio/landing";
import About from "./studio/about";
import Origin from "./studio/origin";
import Skills from "./studio/skills";
import Team from "./studio/team";

const StudioContainer = styled.div`
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  background: white;
  width: 100vw;
  margin: 0;
  padding: 0;
  transition: 0.4s;
`;

const PostSpecialText = styled.div`
  position: relative;
  left: 50vw;
  padding: 8em 1rem;
  width: 18rem;
  font-family: quicksandmedium;
  line-height: 1.4em;
  font-size: 1.1em;
  margin: 0;
`;

class PostSpecialTextClass extends Component {
  render() {
    return (
      <div>
        <PostSpecialText>
        S Cubed has started working since April of 2015. 
        And has successfully provided service to corporate offices, 
        educational institutions and non profit organizations. Our 
        customers have always been our top priority. Our team has experts 
        who directly contact you to understand and analyze your issues better  
        and try to provide the best possible solution tailored to your preferences. 
        We give customized and simple solutions to complex problems through our services.
        </PostSpecialText>
      </div>
    );
  }
}


class Studio extends Component {
  constructor() {
    super();
    this.pageWrapper = React.createRef();
    this.state = {
      rendered: false
    };
  }
  componentDidMount() {
    this.setState({
      rendered: true
    });
  }
  render() {
    return (
      <StudioContainer ref={this.pageWrapper}>
        <Landing />
        <About />
        <Skills />

        {this.state.rendered ? (
          <SpecialText
            pageWrapper={this.pageWrapper.current}
            specialText="With sustainability as our goal, we provide simple and secure tools to create and maintain your digital footprint."
            specialImg={landing3}
          />
        ) : (
          <></>
        )}

        <PostSpecialTextClass />

        {this.state.rendered ? (
          <Origin pageWrapper={this.pageWrapper.current} />
        ) : (
          <></>
        )}
        
        <Team />
        <Footer />
      </StudioContainer>
    );
  }
}

export default Studio;
