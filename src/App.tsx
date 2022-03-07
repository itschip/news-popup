import React from 'react';
import './App.css';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import NrkFeed from "./features/nrk/NrkFeed";

function App() {
	return (
		<div className="App">
			<Tabs variant="enclosed" mt={2}>
				<TabList>
					<Tab>NRK</Tab>
					<Tab>VG</Tab>
				</TabList>
				<TabPanels>
					<TabPanel css={{ boxShadow: '0px -18px 33px -15px rgba(0,0,0,0.64) inset' }}>
						<NrkFeed />
					</TabPanel>
					<TabPanel>
						Loading VG feed
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
}

export default App;
