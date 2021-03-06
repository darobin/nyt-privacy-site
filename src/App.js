import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, HashRouter, Redirect } from "react-router-dom";

//Components
import Nav from './js/components/Nav';
import Home from './js/pages/Home';
import Privacy from './js/pages/Privacy';
import Cookie from './js/pages/Cookie';
import ThirdParty from './js/pages/ThirdParty';
import Footer from './js/components/Footer';

//Styles
import './sass/style.scss';

class App extends Component{

  render(){

    return (

      <HashRouter history={Router.hashHistory}>

          <div className="App">
            <Nav mobileMenuToggle={this.mobileMenuToggle}/>

            <main className="main-content">

              <Switch>
                {/*
                <Route exact="false" strict="false" path="/privacy-policy/">
                  <Home/>
                </Route>

                <Route exact="false" strict="false" path="/subscription/privacy-policy/">
                  <Home/>
                </Route>

                <Route path="/privacy-policy/privacy" exact>
                  <Privacy/>
                </Route>

                <Route path="/subscription/privacy-policy/privacy" exact>
                  <Privacy/>
                </Route>

                <Route path="/subscription/privacy-policy/privacy" exact>
                  <Privacy/>
                </Route>

                <Route path="/privacy-policy/cookie">
                  <Cookie/>
                </Route>

                <Route path="/subscription/privacy-policy/cookie">
                  <Cookie/>
                </Route>

                <Route path="/privacy-policy/thirdparty">
                  <ThirdParty/>
                </Route>

                <Route path="/subscription/privacy-policy/thirdparty">
                  <ThirdParty/>
                </Route>
                */}


                <Redirect from='/:page(\w+):rest(&.*)' to='/:page' />
                <Route exact path="/privacy" component={Privacy} />
                <Route exact path="/cookie" component={Cookie} />
                <Route exact path="/thirdparty" component={ThirdParty} />
                <Route component={Home} />

              </Switch>

            </main>

            <Footer/>

          </div>

      </HashRouter
      >

    );
  }

}

export default App;
