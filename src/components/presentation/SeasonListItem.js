import React from 'react';
import { string, func } from 'prop-types';
/**
 * @React Stateless/Dumb Component
 * @name SeasonListItem
 * @description The Stateless component responsible for displaying a list item in the season list
 * @prop season, driverName, championId, constructorName, onClick
 */
export default function SeasonListItem(props) {
	//	Desructing the properties in variables here, Typical ES6.
	const { season, driverName, championId, constructorName, onClick } = props;
	return (
		<a
			role="presentation"
			className="list-group-item"
			onClick={() => { onClick(season, championId); }}
		>
			<h4
				className="list-group-item-heading"
			>
				<i className="fa fa-trophy" /> {driverName}
				<span className="pull-right text-success">{constructorName}</span>
			</h4>
			<p className="list-group-item-text"><i className="fa fa-calendar" /> {season}</p>
		</a>
	);
}
//	Definining PropTypes of the component. All Props are required.
SeasonListItem.propTypes = {
	season: string.isRequired,
	driverName: string.isRequired,
	championId: string.isRequired,
	constructorName: string.isRequired,
	onClick: func.isRequired,
};
