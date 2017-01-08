import React, { PureComponent, PropTypes } from 'react';
import { reduxForm, Field, change } from 'redux-form';

import cn from 'classnames';

// Render an input field capable of displaying errors
const renderInput = (field)=>
  <div className={cn("form-group",  {"has-error": field.meta.error && field.meta.touched})} >
    <label className="col control-label">{field.placeholder}</label>
    <div className="col">
      <input className="form-control input-md" {...field.input} placeholder={field.placeholder}/>

      {field.meta.error && field.meta.touched && <span className="help-block">{field.meta.error}</span>}
    </div>
  </div>

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

  render(){
    return(
      <div className="taggr-create-new-project">
        <section className="min-height section-1 dbg-color-1">

          <form className="form-horizontal" onSubmit={this.props.handleSubmit(this.createProjectClick)}>
            <fieldset>

              <legend>Create New Project</legend>

              <Field name="projectName" component={renderInput} placeholder="Project Name"/>

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
