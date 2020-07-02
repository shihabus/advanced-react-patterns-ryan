import React, { useState } from "react";
import { TabContainer, TabPanelContainer, TabContent, TabItem } from "./Tab";

export const Tabs = props => {
  const [activeTab, setActiveTab] = useState(1);

  const { children } = props;

  const propedChildren = React.Children.map(children, child => {
    return React.cloneElement(child, {
      activeTab,
      setActiveTab
    });
  });
  return <TabContainer>{propedChildren}</TabContainer>;
};

export const TabsList = props => {
  const { children, activeTab, setActiveTab } = props;
  const propedChildren = React.Children.map(children, (child, idx) => {
    return React.cloneElement(child, {
      isActiveTab: idx === activeTab,
      setActiveTab: () => setActiveTab(idx),
      idx
    });
  });
  return <TabPanelContainer>{propedChildren}</TabPanelContainer>;
};

export const Tab = props => {
  const { children, isActiveTab, setActiveTab, disabled } = props;
  return (
    <TabItem
      onClick={() => !disabled && setActiveTab()}
      isTabActive={isActiveTab}
      isDisabled={disabled}
    >
      {children}
    </TabItem>
  );
};

export const TabPanels = props => {
  const { children, activeTab } = props;
  return <TabContent>{children[activeTab]}</TabContent>;
};

export const TabPanel = props => {
  const { children } = props;
  return children;
};
