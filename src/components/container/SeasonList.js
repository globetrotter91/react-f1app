import React, { Component } from 'react';

import SeasonReport from './../presentation/SeasonReport';
import SeasonListItem from './../presentation/SeasonListItem';
import { getDriverStandingsForAssignment, getAllRacesForYear } from './../../services/ApiService';
/**
 * @React StateFull/Smart Component [Container Class]
 * @name SeasonList
 * @description The container component in React is responsible for data flow.
 * This means that it passes data as properties to presentation component(s). 
 * In presense of REDUX, the API calls can be dispatched by actions 
 * and this component can be connected to the store.
 */
export default class SeasonList extends Component {
	constructor() {
		super();
		this.state = {
			seasons: [],					//	array of seasons fetched from API
			seasonRaces: [],				//	array of races of selected season
			selectedSeason: '',				//	selected season
			selectedSeasonChampionId: '',	//	championId of the selected season
		};
		/**
		 * we can always access the seasonClicked function directly in the component
		 * by this.seasonClicked.bind(this) in the component itself, 
		 * BUT IT IS BEST PRACTICE TO BIND THE FUNCTION IN THE CONSTRUCTOR FOR CLEANER CODE
		 */
		this.seasonClicked = this.seasonClicked.bind(this);
	}

	//	This fuction runs after the render function. The function calls the API for list of seasons
	//	Using componentWillMount which runs before render function would have been the first instinct 
	//	BUT IT IS BEST PRACTICE TO INCLUDE API CALLS IN THE componentDidMount so that 
	//	The rendering is not interrupted.
	componentDidMount() {
		getDriverStandingsForAssignment().then(
			(res) => {
				if (res.data) {
					//	Set state sets the state to the seasons array 
					//	React checks the virtual DOM for diff in the states
					//	The render method is called if the diff affects the DOM.
					this.setState({
						seasons: res.data.MRData.StandingsTable.StandingsLists,
					});
				}
			},
			(err) => {
				//	console.log(err);
			},
		);
	}

	//	This function runs when a season is clicked.
	//	Depending on the season clicked it calls the API for all races of the season with winners
	//	It takes 2 arguments season and championId 
	seasonClicked(season, championId) {
		getAllRacesForYear(season).then(
			(res) => {
				if (res.data) {
					//	season and championId are set to state along with the seasonRaces
					//	React checks the virtual DOM for diff in the states
					//	The render method is called if the diff affects the DOM.
					//	Setting selected Season and Champion Id makes it easier 
					//	to highlight the if the season champion is the race champion
					this.setState({
						seasonRaces: res.data.MRData.RaceTable.Races,
						selectedSeason: season,
						selectedSeasonChampionId: championId,
					});
				}
			},
			(err) => {
				//	console.log(err);
				//	alert(`Error in connection${err.data.errors.message}`);
			},
		);
	}

	//	The render function of a Smart component renders the jsx whenever 
	//	the React virtual dom sees it necessary. When their is a diff.
	render() {
		//	The seasonList is being populated with SeasonListItem Component
		//	We are using map for this. map is a very useful JS higher order function
		//	It is used to transform arrays. Reduce can also be used for the same.
		//	SeasonListItem is a list Item with properties descripbed in the component.
		const seasonsList = this.state.seasons.map((seasonData) => {
			return (
				<SeasonListItem
					key={seasonData.season}
					season={seasonData.season}
					driverName={`${seasonData.DriverStandings[0].Driver.givenName} ${seasonData.DriverStandings[0].Driver.familyName}`}
					championId={seasonData.DriverStandings[0].Driver.driverId}
					constructorName={`${seasonData.DriverStandings[0].Constructors[0].name}`}
					onClick={this.seasonClicked}
				/>
			);
		});
		//	The SeasonReport component is only rendered when the seasonRaces array has elements.
		//	Season Report component is responsible fot displaying 
		//	the list of the races with winners of a season. 
		//	It takes props championId and races array. championId is used for highlighting.
		return (
			<div className="row">
				<div className="col-md-4 col-xs-12">
					<div className="list-group">
						{this.state.seasons.length > 0 ? seasonsList : 'Loading' }
					</div>
				</div>
				{
					(this.state.seasonRaces.length > 0) &&
					<SeasonReport
						championId={this.state.selectedSeasonChampionId}
						races={this.state.seasonRaces}
						season={this.state.selectedSeason}
					/>
				}
			</div>
		);
	}
}
