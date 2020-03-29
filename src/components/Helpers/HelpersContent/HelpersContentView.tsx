import React from 'react';
import * as R from 'ramda';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { useStyles } from './HelpersContentStyle';
import { Tab as TabType } from './HelpersContentTypes';
import { elementId, a11yProps, tabsConfig } from './HelpersContentUtils';

const HelpersContent: React.FC = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newSelectedIndex: number) => {
    setSelectedIndex(newSelectedIndex);
  };

  const toTab = (tab: TabType) => (
    <Tab
      key={tab.index}
      label={tab.title}
      {...a11yProps(tab.index)}
    />
  );
  const tabsList = R.map(toTab, tabsConfig);

  const toTabPanel = (tab: TabType) => (
    <TabPanel
      key={tab.index}
      selectedIndex={selectedIndex}
      index={tab.index}
      children={tab.children}
    />
  );
  const tabPanelsList = R.map(toTabPanel, tabsConfig);

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedIndex}
        onChange={handleChange}
        aria-label="helpers-vertical-tabs"
        className={classes.tabs}
      >
        {tabsList}
      </Tabs>
      {tabPanelsList}
    </div>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  selectedIndex: any;
}

const TabPanel: React.FC<TabPanelProps> = (props: TabPanelProps) => {
  const classes = useStyles();
  const { children, selectedIndex, index, ...other } = props;

  const tabPanelId = elementId(index, 'tabpanel');
  const tabId = elementId(index, 'tab');
  const show = R.equals(selectedIndex, index);
  const hidden = R.not(show);

  return (
    <Typography
      className={classes.tabPanel}
      component="div"
      role="tabpanel"
      hidden={hidden}
      id={tabPanelId}
      aria-labelledby={tabId}
      {...other}
    >
      {show && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

export default HelpersContent;
