import React from "react";
// import Tab from "./Tab";
import styled from "styled-components";
import { Tabs, TabsList, Tab, TabPanels, TabPanel } from "./Compsables";

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
      <Tabs>
        <TabsList>
          <Tab>Home</Tab>
          <Tab>App</Tab>
          <Tab>About</Tab>
          <Tab>Help</Tab>
        </TabsList>
        <TabPanels>
          <TabPanel>Home sweet home</TabPanel>
          <TabPanel>App sweet app</TabPanel>
          <TabPanel>About sweet about</TabPanel>
          <TabPanel>Help sweet help</TabPanel>
        </TabPanels>
      </Tabs>
    </AppContainer>
  );
}
