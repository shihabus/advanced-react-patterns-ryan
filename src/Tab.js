import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  height: 50vh;
  background: yellowgreen;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TabContent = styled.div`
  height: 100%;
  width: 100%;
  background: red;
`;

const TabPanelContainer = styled.div`
  height: 20%;
  background-color: yellow;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const TabItem = styled.div`
  width: 20%;
  height: 100%;
  background-color: ${({ isTabActive, isDisabled }) =>
    isDisabled ? "#e1e1e1" : isTabActive ? "green" : "orange"};
  color: ${({ isDisabled }) => (isDisabled ? "#a1a1a1" : "#000")};
`;

function Tabs(props) {
  const [activeTab, setActiveTab] = useState(0);
  const { tabsOnBottom, tabList, disabled } = props;

  const renderTabPanel = () =>
    tabList.map((tab, idx) => {
      const isDisabled = disabled.includes(idx);
      return (
        <TabItem
          key={idx}
          onClick={() => !isDisabled && setActiveTab(idx)}
          isTabActive={idx === activeTab}
          isDisabled={isDisabled}
        >
          {tab.label}
        </TabItem>
      );
    });

  const renderTabContent = () => {
    return <>{tabList[activeTab].content}</>;
  };

  const renderContent = <TabContent>{renderTabContent()}</TabContent>;
  const renderTabs = <TabPanelContainer>{renderTabPanel()}</TabPanelContainer>;

  return (
    <TabContainer>
      {tabsOnBottom ? [renderContent, renderTabs] : [renderTabs, renderContent]}
    </TabContainer>
  );
}

export default Tabs;
