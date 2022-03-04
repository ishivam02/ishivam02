import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
import Fake from "./fake";

import {
  Navbar,
  
  Footer,
  MainHeading,
  Section,
  Cont,
  Content,
} from "./component/style";

function App() {
  return (
    <>
      <Navbar>
        <Section>
          <Cont>
            <MainHeading>Welcome To Dashboard</MainHeading>
          </Cont>
          <Content>
            <li>
              <a href="http://localhost:3001/">Home</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </Content>
        </Section>
      </Navbar>
      <Fake/>
       <hr></hr>
      <Footer>
        <footer className="footer">
          <h1>Made with Love In India</h1>
        </footer>
      </Footer>
    </>
  );
}

export default App;
