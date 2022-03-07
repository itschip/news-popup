import React from 'react';
import './App.css';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import NrkFeed from "./features/nrk/NrkFeed";

function App() {
	return (
		<div className="App">
			<Tabs variant="enclosed" mt={2} colorScheme="red">
				<TabList>
					<Tab fontWeight="bold">NRK</Tab>
					<Tab fontWeight="bold">VG</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<NrkFeed />
					</TabPanel>
					<TabPanel>
						VG Feed coming soon
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
}

export default App;
