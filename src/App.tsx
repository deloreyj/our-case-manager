import './Firebase';
import React from 'react';
import { Provider, darkTheme, Grid, View } from '@adobe/react-spectrum';
import './App.css';

import Header from './components/Header/Header';

function App() {
	return (
		<Provider theme={darkTheme} colorScheme="dark">
			<View
				paddingX="size-200"
				height="100vh"
				width="calc(100vw - var(--spectrum-global-dimension-size-200, var(--spectrum-alias-size-200)))"
			>
				<Grid
					areas={['header header header', 'sidebar content .']}
					columns={['size-3400', '1fr', 'size-3400']}
					rows={['size-800', '1fr']}
					height="100%"
				>
					<Header />
					<View borderEndWidth="thin" borderColor="dark" gridArea="sidebar">
						Sidebar
					</View>
					<View gridArea="content" paddingX="size-200">
						Content
					</View>
				</Grid>
			</View>
		</Provider>
	);
}

export default App;
