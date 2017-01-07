import React, { Component, PropTypes } from 'react';
import routeConfig from '../common/routeConfig';
import SimpleNav from '../components/SimpleNav';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className="app container">
        <div className="row">
          <div className="col-md-4">
            <h1 className="page-header">taggr</h1>
          </div>
          <div className="col-md-3 pull-right">
            <SimpleNav routes={routeConfig} />
          </div>
        </div>
        <div className="row page-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
