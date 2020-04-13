import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { ColorPanel } from '../../components/ColorPanel';
import { SidePanel } from '../../components/SidePanel';
import { Messages } from '../../components/Messages';
import { MetaPanel } from '../../components/MetaPanel';

const App = () => {
	return (
		<Grid columns="equal" className="app" style={{ background: '#eee' }}>
			<ColorPanel />
			<SidePanel />
			<Grid.Column style={{ marginLeft: 320 }}>
				<Messages />
			</Grid.Column>
			<Grid.Column widht={4}>
				<MetaPanel />
			</Grid.Column>

		</Grid>
	);
};

export default App;
