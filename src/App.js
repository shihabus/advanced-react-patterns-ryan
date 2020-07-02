import React from "react";
import Tab from "./Tab";
import styled from "styled-components";

const AppContainer = styled.div`
  padding: 5% 10%;
`;

const tabs = [
  {
    label: "Home",
    content: "Home"
  },
  {
    label: "App",
    content: "App"
  },
  {
    label: "About",
    content: "About"
  },
  {
    label: "Help",
    content: "Help"
  }
];
export default function App() {
  return (
    <AppContainer>
      <Tab tabList={tabs} />
    </AppContainer>
  );
}
