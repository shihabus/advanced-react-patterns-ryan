import React, { useState } from "react";
import styled from "styled-components";

export const TabContainer = styled.div`
  height: 50vh;
  background: yellowgreen;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TabContent = styled.div`
  height: 100%;
  width: 100%;
  background: ${({ bg }) => bg || ""};
  padding: 5% 10%;
  font-size: 20px;
  color: #fff;
`;

export const TabPanelContainer = styled.div`
  height: 20%;
  background-color: #27304b;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const TabItem = styled.div`
  width: 20%;
  padding: 5% 0px;
  height: 100%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isTabActive, isDisabled }) =>
    isDisabled ? "#878C9B" : isTabActive ? "#00D290" : "#fff"};
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
