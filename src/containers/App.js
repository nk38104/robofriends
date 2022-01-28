import './App.css';
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/errors/ErrorBoundry';
import { actionCreators } from '../state/index';
import SignIn from '../components/auth/signin/SignIn';
 

function App() {
    const state = useSelector((state) => state);
    const { setSearchField, requestRobots }  = bindActionCreators(actionCreators, useDispatch());

    const { searchField } = state.searchRobots;
    const { robots, isPending } = state.requestRobots;

    const [route, setRoute] = useState("signin");

    useEffect(() => {
        requestRobots();
    }, []);

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    const onRouteChange = (route) => {
        // if (route === 'signout') {
        //   setSignedIn(false);
        // } else if (route === 'home') {
        //   setSignedIn(true);
        // }
        setRoute(route);
      }
    
    if (isPending) {
        return <h1>Loading...</h1>
    }
    
    return (route === "home") 
        ? (
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
            )
        : (
            <div>
                <SignIn onRouteChange={onRouteChange}/>
            </div>
        )

}

export default App;
