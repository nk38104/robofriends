import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions';
 

const mapStateToProps = (state) => {
    console.log("map state to props");
    return {
        searchField:    state.searchRobots.searchField,
        robots:         state.requestRobots.robots,
        isPending:      state.requestRobots.isPending,
        error:          state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("map dispatch to props");
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

function App() {
    const { searchField, onSearchChange } = this.props;
    const { robots, isPending } =  this.props;

    // console.log(robots);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => setRobots(users));
        this.props.onRequestRobots();
    }, []);

    // const onSearchChange = (event) => {
    //     setSearchField(event.target.value);
    // }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    // if (!robots.length) {
    //     return <h1>Loading...</h1>
    // }
    if (!isPending) {
        return <h1>Loading...</h1>
    }
    
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
