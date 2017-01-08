import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { NewProjectSlug, ProjectList, NewProjectForm } from './index';

export class DefaultPage extends Component {
  static propTypes = {
    taggr: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { creatingProject, projects, tags } = this.props.taggr;
    const { createProjectStart, createProjectFinish, deleteProject } = this.props.actions;

    // Get the last project in the list, assumed to be the one we're working on
    const lastProject = projects[projects.length - 1] || undefined;

    // New Project Slug Component
    const createNewProjectSlugOptions = {
      createAction: createProjectStart
    }

    // New Project Form Component
    const newProjectFormOptions = {
      project: lastProject,
      tags,
      doneAction: createProjectFinish
    };

    // Project List Component
    const projectListOptions = {
      projects,
      deleteAction: deleteProject
    };

    return (
      <div className="taggr-default-page">
        { 
          creatingProject && lastProject
            ? <NewProjectForm { ...newProjectFormOptions }/>
            : <NewProjectSlug { ...createNewProjectSlugOptions }/>
        }

        {
          !creatingProject && projects.length > 0
            && <ProjectList { ...projectListOptions }/>
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
