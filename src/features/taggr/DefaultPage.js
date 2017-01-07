import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import CreateNewProject from './CreateNewProject.js';
import ProjectList from './ProjectList.js';
import NewProjectForm from './NewProjectForm.js';

export class DefaultPage extends Component {
  static propTypes = {
    taggr: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="taggr-default-page">
        Page Content: taggr/DefaultPage
        <CreateNewProject />
        <ProjectList />
        <NewProjectForm />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    taggr: state.taggr,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
