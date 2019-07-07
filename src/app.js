import React, { Component } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import GlobalFonts from "./fonts.js";
import Header from "./components/header";
import Home from "./components/pages/home.js";
import Studio from "./components/pages/studio.js";
import Projects from "./components/pages/projects.js";
import ProjectPage from "./components/pages/project.js";
import Contact from "./components/pages/Contact.js";
import Skill from "./components/pages/skill.js"
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";




let slideIn = keyframes`
  from {
    transform: translateY(100vh);
  }
  to {
    transform: translateY(0vh);
  }
`;

let slideOut = keyframes`
  from {
      transform: translateY(0vh);
  }
  to {
      transform: translateY(-100vh);
  }
`;

let fadeToBlack = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

let GlobalStyles = createGlobalStyle`
  body{
    margin    : 0;
    padding   : 0;
    overflow-x: hidden;
  }
  h1, h2, h3, h4, a{
    margin         : 0;
    padding        : 0;
    text-decoration: none;
    color          : inherit;
  }

  //custom scrollbar
  ::-webkit-scrollbar{
    position: absolute;
    //display: none;
    width: .3vw;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 1vw;
    background: rgba(0,0,0,.3);
  }

  ::-webkit-scrollbar-track {
      &:start{
        background-color: black;
      }
  }



  .App{
    position: relative;
  }
  .page-enter{
    top: 0vh;
    //transform: translateY(100vh);
    position: fixed;
    z-index: 100 !important;
    animation-delay: 0s;
    animation: ${slideIn} 1.0s forwards cubic-bezier(.77,0,.36,1);
  }
  .page-exit{
    top: 0;
    position: fixed;
    z-index: -100 !important;
    animation: ${slideOut} 1.6s forwards ease-in-out;
    &:after{
      animation: ${fadeToBlack} 1.6s forwards ease-out;
      content: '';
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      z-index: 50;
      position: absolute;
      background: black;
      opacity: 0;
    }
  }

`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`


class App extends Component {
  
  constructor() {
    super();
    this.supportsHistory = "pushState" in window.history;
    this.state = {
      currentPath: null,
      SRdestroyed: true,
    };
    this.updateSRstatus = (destroyed)=>{
      this.setState({ SRdestroyed: destroyed })
      console.log("sr changed to " + destroyed)
    }
    this.onRouterChange = (prevState, nextState) => {
      console.log("prevstate");
      console.log(prevState);
    };
  }
  render() {
    return (
      
      <div className="App">      
      
                 <GlobalFonts />
        <GlobalStyles />
        <BrowserRouter forceRefresh={!this.supportsHistory}>
          <Header />

          <Route
            render={({ location }) => {
              return (

                  <TransitionGroup component={null}>
                    <CSSTransition
                      timeout={2000}
                      classNames="page"
                      key={location.key}
                    >
                      <Switch location={location}>
                        <Route
                          exact
                          path="/"
                          render={({ match }) => {
                            return <Wrapper>
                              <Home 
                              updateSRstatus={this.updateSRstatus} 
                              SRdestroyed={this.state.SRdestroyed} 
                              match={match} 
                              />
                              </Wrapper>;
                          }}
                        />
                        <Route 
                        path="/Tech" 
                        render={() => <Studio 
                        updateSRstatus={this.updateSRstatus} 
                        SRdestroyed={this.state.SRdestroyed} 
                        />} 
                        />
                        <Route
                          exact
                          path="/Projects"
                          render={({ match }) => {
                            //console.log(match);
                            return <Projects 
                            updateSRstatus={this.updateSRstatus} 
                            SRdestroyed={this.state.SRdestroyed} 
                            match={match} />;
                          }}
                        />
                        <Route
                          exact
                          path={`/Projects/:name`}
                          render={({ match }) => {
                            return <ProjectPage 
                            updateSRstatus={this.updateSRstatus} 
                            SRdestroyed={this.state.SRdestroyed} 
                            match={match.params.name} />;
                          }}
                        />
                        <Route
                          exact
                          path={`/Contact`}
                          render={({ match }) => {
                            return <Contact />;
                          }}
                        />
                        <Route
                          path={'/Skill/:name'}
                          render={({ match }) => {
                            return <Skill match={match.params.name} />;
                          }}
                        />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>

              );
            }}
          />
        </BrowserRouter>
                  
       
         
      </div>

      
      
    );
  }
}

export default App;
