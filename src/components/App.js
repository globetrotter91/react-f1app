import React from 'react';

import SeasonList from './container/SeasonList';
/**
 * @React Stateless/Dumb Component
 * @name App
 * @description creates a basic layout/container for the app
 * If we were to use REDUX for state management, the component can be created to 
 * a Stateful/Smart Component and store can be provided.
 */
export default function App() {
	return (
		<div className="container m-t-30">
			<div className="row">
				<div className="col-md-12">
					<h2>F1 Seasons Report 2005-2015</h2>
					<p>Click on a season to see races</p>
				</div>
				<div className="col-md-12">
					<SeasonList />
				</div>
			</div>
		</div>
	);
}
