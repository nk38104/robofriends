import './App.css';
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';
import Header from '../components/header/Header';
import CardList from '../components/card/CardList';
import SearchBox from '../components/header/search/SearchBox';
import ErrorBoundry from '../components/errors/ErrorBoundry';
import SignIn from '../components/auth/signin/SignIn';
import Register from '../components/auth/register/Register';
 

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
                    <h1 className="brand">RoboFriends</h1>
                    <SearchBox searchChange={(e) => setSearchField(e.target.value)} />
                </Header>
                <div className="main">
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </div>
            </div>
            )
        : (route === "signin") 
        ? (
            <div>
                <SignIn onRouteChange={onRouteChange}/>
            </div>
        )
        : (
            <div>
                <Register onRouteChange={onRouteChange}/>
            </div>
        );

}

export default App;
