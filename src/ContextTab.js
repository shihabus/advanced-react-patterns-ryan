import React, { useState, useContext } from "react";
import { TabContainer, TabPanelContainer, TabContent, TabItem } from "./Tab";

const TabContext = React.createContext({
  activeTab: 0
});

TabContext.displayName = "TabContext";

export const Tabs = props => {
  const { children } = props;

  const [activeTab, setActiveTab] = useState(props.defaultActiveIndex || 1);

  const isControlled = props.activeIndex !== null;

  const handleTabChange = index => {
    props.onChange(index);
    if (!isControlled) {
      setActiveTab(index);
    }
  };

  return (
    <TabContext.Provider
      value={{
        activeTab: isControlled ? props.activeIndex : activeTab,
        setActiveTab: handleTabChange
      }}
    >
      <TabContainer>{children}</TabContainer>
    </TabContext.Provider>
  );
};

export const TabsList = props => {
  const { activeTab, setActiveTab } = useContext(TabContext);

  const { children } = props;
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
  const { activeTab } = useContext(TabContext);
  const { children, bg } = props;

  return <TabContent bg={bg}>{children[activeTab]}</TabContent>;
};

export const TabPanel = props => {
  const { children } = props;
  return children;
};
