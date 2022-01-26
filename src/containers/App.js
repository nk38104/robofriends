import './App.css';
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import { actionCreators } from '../state/index';
 

function App() {
    const state = useSelector((state) => state);
    const { setSearchField, requestRobots }  = bindActionCreators(actionCreators, useDispatch());

    const { searchField } = state.searchRobots;
    const { robots, isPending } = state.requestRobots;

    useEffect(() => {
        requestRobots();
    }, []);

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
    if (isPending) {
        return <h1>Loading...</h1>
    }
    
    return (
        <div className="tc">
            <Header>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={(event) => setSearchField(event.target.value)}/>
            </Header>
            <div className="main">
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </div>
        </div>
    );
}

export default App;
