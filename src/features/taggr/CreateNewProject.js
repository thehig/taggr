import React, { PureComponent, PropTypes } from 'react';
import { reduxForm, Field, change } from 'redux-form';
import ReactDOM from 'react-dom';

const validateCreateNewProject = (values)=>{
  const errors = {};
  if(!values.projectName) errors.projectName = "Required";
  return errors;
};

const renderInput = (field)=>{
  console.log(field);
  return (
    <div className="form-group">
      <label className="col-md-4 control-label">{field.placeholder}</label>
      <div className="col-md-4">
        <input className="form-control input-md" {...field.input} placeholder={field.placeholder}/>

        {field.meta.error && field.meta.touched && <span>{field.meta.error}</span>}
      </div>
    </div>
  );
};

class CreateNewProject extends PureComponent {
  static propTypes = {
    createProject: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.createProjectClick = ::this.createProjectClick;
  }

  createProjectClick(values){
    if(!values.projectName) return;
    this.props.createProject(values.projectName);
    this.props.reset();
    // ReactDOM.findDOMNode(this.refs.projectName).focus();
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

CreateNewProject = reduxForm({ 
  form: 'createProjectForm',
  validate: validateCreateNewProject
})(CreateNewProject);
export default CreateNewProject;
