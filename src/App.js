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

const DataTab = props => {
  const { tabs, disabledTabs } = props;
  return (
    <Tabs>
      <TabsList>
        {tabs.map((tab, idx) => (
          <Tab disabled={disabledTabs.includes(idx)}>{tab.label}</Tab>
        ))}
      </TabsList>
      <TabPanels>
        {tabs.map(tab => (
          <TabPanel>{tab.content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
export default function App() {
  return (
    <AppContainer>
      <DataTab tabs={tabs} disabledTabs={[0]} />
    </AppContainer>
  );
}
