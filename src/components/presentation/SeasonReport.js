import React from 'react';
import { string, array } from 'prop-types';
import RaceListItem from './RaceListItem';
/**
 * @React Stateless/Dumb Component
 * @name SeasonReport
 * @description The Stateless component responsible for displaying 
 * a list of all the races of a season along with their winners
 * @prop season, championId, races
 * championId is used for checking the winner is the champion or not.
 * races is the array of races in the season
 */
export default function SeasonReport(props) {
	//	Desructing the properties in variables here, Typical ES6.
	const { season, championId } = props;
	//	The seasonRaces is being populated with RaceListItem Component
	//	RaceListItem is a list Item component with properties descripbed in the component.
	const seasonRaces = (
		props.races.length > 0)
		?
		props.races.map((race) => {
			return (
				<RaceListItem
					key={race.round}
					round={race.round}
					raceName={race.raceName}
					driverName={`${race.Results[0].Driver.givenName} ${race.Results[0].Driver.familyName}`}
					constructorName={race.Results[0].Constructor.name}
					highLighted={(championId === race.Results[0].Driver.driverId)}
				/>
			);
		})
		:
		null;

	return (
		<div className="col-md-8 col-xs-12">
			<div className="row">
				<div className="col-md-12 col-xs-12">
					<h3 className="pull-right">Season: {season}</h3>
				</div>
			</div>
			<div className="row list-header  hidden-xs">
				<div className="col-md-5 list-header-item">
						Round/Race
				</div>
				<div className="col-md-4 list-header-item">
						Winner
				</div>
				<div className="col-md-3 list-header-item">
						Auto Make
				</div>
			</div>
			{seasonRaces}
		</div>
	);
}
//	Definining PropTypes of the component. All Props are required.
SeasonReport.propTypes = {
	championId: string.isRequired,
	races: array.isRequired,	//eslint-disable-line
	season: string.isRequired,
};

