import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { CreateNewProject, ProjectList, NewProjectForm } from './index';

export class DefaultPage extends Component {
  static propTypes = {
    taggr: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    // Get the last project in the list, assumed to be the one we're working on
    const lastProject = this.props.taggr.projects[this.props.taggr.projects.length-1] || undefined;

    // Action to create a new project
    const newProjectAction = this.props.actions.createNewProject;

    // Are we currently creating a project?
    const creatingProject = this.props.taggr.creatingProject;

    // New Project Form
    const newProjectOptions = {
      project: lastProject,
      tags: this.props.taggr.tags,
      doneAction: this.props.actions.doneCreating
    };

    // Project List
    const projectListOptions = {
      projects: this.props.taggr.projects,
      deleteAction: this.props.actions.deleteProject
    };
    

    
    return (
      <div className="taggr-default-page">

        { 
          creatingProject && lastProject
            ? <NewProjectForm { ...newProjectOptions }/>
            : <CreateNewProject createProject={newProjectAction}/>
        }

        {
          // Show the projects list if length > 0
          !creatingProject && this.props.taggr.projects.length > 0 
            && <ProjectList {...projectListOptions}/>
        }
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
