import React, { PureComponent, PropTypes } from 'react';
import { reduxForm, Field, change } from 'redux-form';

import { InputWrapper } from './index';


class CreateNewProject extends PureComponent {
  static propTypes = {
    createProject: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.createProjectClick = ::this.createProjectClick;
  }

  createProjectClick(values){
    this.props.createProject(values.projectName);
    this.props.reset();
  }

  renderInput = (field) => <InputWrapper field={field}/>;

  render(){
    return(
      <div className="taggr-create-new-project">
        <section className="min-height section-1 dbg-color-1">

          <form className="form-horizontal" onSubmit={this.props.handleSubmit(this.createProjectClick)}>
            <fieldset>

              <legend>Create New Project</legend>

              <Field name="projectName" component={this.renderInput} placeholder="Project Name"/>

              {/*<!-- Button -->*/}
              <div className="form-group">
                <div className="col-md-4">
                  <button type="submit" className="btn btn-primary">Create</button>
                </div>
              </div>

            </fieldset>
          </form>

        </section>
      </div>
    );
  }
}

// Wrap component with reduxForm decorator
CreateNewProject = reduxForm({ 
  form: 'createProjectForm',
  validate: (values)=>{
    const errors = {};
    if(!values.projectName) errors.projectName = "Required";
    return errors;
  }
})(CreateNewProject);

export default CreateNewProject;
