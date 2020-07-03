import React, { useState } from "react";
// import Tab from "./Tab";
import styled from "styled-components";
import { Tabs, TabsList, Tab, TabPanels, TabPanel } from "./ContextTab";
import { FaBed, FaPlane, FaCamera, FaMobile, FaSchool } from "react-icons/fa";
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

const COLORS = ["red", "green", "blue", "violet", "brown"];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AppContainer>
      <Tabs
        defaultActiveIndex={2}
        activeIndex={activeIndex}
        onChange={index => setActiveIndex(index)}
      >
        <>
          <TabsList>
            <Tab>
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
            <Tab>
              <FaSchool />
            </Tab>
          </TabsList>
        </>
        <>
          <TabPanels bg={COLORS[activeIndex] || ""}>
            <TabPanel>Home sweet home</TabPanel>
            <TabPanel>
              <div>
                <p>App sweet app</p>
                <button onClick={() => setActiveIndex(4)}>Go to School</button>
              </div>
            </TabPanel>
            <TabPanel>About sweet about</TabPanel>
            <TabPanel>Help sweet help</TabPanel>
            <TabPanel>School sweet school</TabPanel>
          </TabPanels>
        </>
      </Tabs>
    </AppContainer>
  );
}
