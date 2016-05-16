import React, { Component } from 'react';
import { render } from 'react-dom';
import { applyRouterMiddleware, hashHistory, Router, Route, IndexRoute, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import useScroll from 'react-router-scroll';

// Components
import Bill from './Bill.jsx';
import Details from './Details.jsx';
import Package from './details-components/Package.jsx';
import CallCharges from './details-components/CallCharges.jsx' ;
import SkyStore from './details-components/SkyStore.jsx';

export class App extends Component {
  render() {
    return (
      <div id="main">
        <ReactCSSTransitionGroup
          component="div"
          className="page"
          transitionName="switchTransition"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={300}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Bill}/>
    <Route path="/details" component={Details} />
    <Route path="/details-skyStore" component={SkyStore} />
    <Route path="/details-package" component={Package} />
    <Route path="/details-callCharges" component={CallCharges} />
  </Route>
);

export class AppRouter extends Component {
  render() {
    return (
      <Router
        history={this.props.history}
        render={this.props.render}
      >
        {routes}
      </Router>
    );
  }
}

export function startApp() {
  render(
    <AppRouter
      history={hashHistory}
      render={applyRouterMiddleware(useScroll())}
    />, document.getElementById('app'));
}
