import React from "react";
// import Tab from "./Tab";
import styled from "styled-components";
import { Tabs, TabsList, Tab, TabPanels, TabPanel } from "./Compsables";
import { FaBed, FaPlane, FaCamera, FaMobile } from "react-icons/fa";
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
          <Tab disabled>
            <FaBed />
          </Tab>
          <Tab>
            <FaPlane />
          </Tab>
          <Tab>
            <FaCamera />
          </Tab>
          <Tab>
            <FaMobile />
          </Tab>
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
