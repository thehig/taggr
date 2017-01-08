import React, { PureComponent, PropTypes } from 'react';
import { reduxForm, Field, change } from 'redux-form';

import { InputWrapper } from './index';


class NewProjectSlug extends PureComponent {
  static propTypes = {
    createAction: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.createProjectClick = ::this.createProjectClick;
    this.renderInput = ::this.renderInput;
  }

  createProjectClick(values){
    this.props.createAction(values);
    this.props.reset();
  }

  renderInput = (field) => <InputWrapper field={field}/>;

  render(){
    return(
      <div className="taggr-new-project-slug">
        <section className="min-height section-1 dbg-color-1">

          <form className="form-horizontal" onSubmit={this.props.handleSubmit(this.createProjectClick)}>
            <fieldset>

              <legend>Create New Project</legend>

              {/* Project Name Input */}
              <Field name="name" component={this.renderInput} placeholder="Project Name"/>

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
NewProjectSlug = reduxForm({
  form: 'newProjectSlug',
  validate: (values)=>{
    const errors = {};
    if(!values.name) errors.name = "Required";
    return errors;
  }
})(NewProjectSlug);

export default NewProjectSlug;
