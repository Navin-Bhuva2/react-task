import React from "react";
import { Tabs } from "react-bootstrap";
import ZsTabsWrapper from "./zsTabsStyle";
const ZsTabs = props => {
  const { children, activeTab, setActiveTab, tabStyle, bsPrefix } = props;
  return (
    <ZsTabsWrapper style={tabStyle}>
      {bsPrefix !== undefined ? (
        <Tabs
          id="tab"
          activeKey={activeTab}
          onSelect={k => setActiveTab(k)}
          bsPrefix={bsPrefix}>
          {children}
        </Tabs>
      ) : (
          <Tabs id="tab" activeKey={activeTab} onSelect={k => setActiveTab(k)}>
            {children}
          </Tabs>
        )}
    </ZsTabsWrapper>
  );
};
export default ZsTabs;