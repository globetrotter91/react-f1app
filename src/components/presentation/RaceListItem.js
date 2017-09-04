import React from 'react';
import { string, bool } from 'prop-types';
import classnames from 'classnames';
/**
 * @React Stateless/Dumb Component
 * @name RaceListItem
 * @description The Stateless component responsible for displaying race and winner
 * @prop round, raceName, driverName, constructorName, highLighted
 * highlights the races where winner is champion. Using the classnames for highlighting
 */
export default function RaceListItem(props) {
	const { round, raceName, driverName, constructorName, highLighted } = props;
	return (
		<div
			className={classnames('row list-item', { 'bg-success': highLighted })}
		>
			<div className="col-md-5 list-item-set">
                Round {round}: {raceName}
			</div>
			<div className="col-md-4 list-item-set">
				{driverName}
			</div>
			<div className="col-md-3 list-item-set">
				{constructorName}
			</div>
		</div>
	);
}
//	Definining PropTypes of the component. All Props are required.
RaceListItem.propTypes = {
	round: string.isRequired,
	raceName: string.isRequired,
	driverName: string.isRequired,
	constructorName: string.isRequired,
	highLighted: bool.isRequired,
};
