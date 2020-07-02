import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  height: 50vh;
  background: yellowgreen;
  width: 100%;
  position: relative;
`;

const TabContent = styled.div`
  height: 100%;
  width: 100%;
  background: red;
`;

const TabPanelContainer = styled.div`
  height: 20%;
  background-color: goldenrod;
  bottom: 0;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const TabItem = styled.div`
  width: 20%;
  height: 100%;
  background-color: ${({ isTabActive }) => (isTabActive ? "white" : "#d1d1d1")};
`;

function Tabs(props) {
  const [activeTab, setActiveTab] = useState(0);

  const renderTabPanel = () => {
    const { tabList } = props;

    return tabList.map((tab, idx) => (
      <TabItem
        key={idx}
        onClick={() => setActiveTab(idx)}
        isTabActive={idx === activeTab}
      >
        {tab.label}
      </TabItem>
    ));
  };

  const renderTabContent = () => {
    const { tabList } = props;
    return <>{tabList[activeTab].content}</>;
  };

  return (
    <TabContainer>
      <TabContent>{renderTabContent()}</TabContent>
      <TabPanelContainer>{renderTabPanel()}</TabPanelContainer>
    </TabContainer>
  );
}

export default Tabs;
