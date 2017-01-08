import React, { PureComponent, PropTypes } from 'react';
import { reduxForm, Field, change } from 'redux-form';
import cn from 'classnames';

import { InputWrapper } from './index';

class NewProjectForm extends PureComponent {
  static propTypes = {
    project: PropTypes.object.isRequired,
    tags: PropTypes.array.isRequired,
    doneAction: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
    this.renderInput = ::this.renderInput;
    this.renderTag = ::this.renderTag;
    this.formSubmit = ::this.formSubmit;
  }

  renderInput = (field) => <InputWrapper field={field}/>;

  renderTag(tag) {
    return (
      <div className="col-md-4" key={tag.id}>
        <div className="checkbox">
          <label>
            <input type="checkbox"/>
            {tag.name}
          </label>
        </div>
      </div>
    );
  };

  formSubmit(values){
    this.props.doneAction(values);
  }

  render() {
    const { project, tags, handleSubmit } = this.props;

    return (
      <div className="taggr-new-project-form col">
        <section className="min-height section-3 dbg-color-3">
          <form className="form-horizontal" onSubmit={handleSubmit(this.formSubmit)}>
            <fieldset>

              {/*<!-- Form Name -->*/}
              <legend>New Project: {project.name}</legend>

              {/*<!-- Tag Checkboxes -->*/}
              {tags.length > 0 &&
                <div className="form-group">
                  {tags.map(this.renderTag)}
                </div>}

              {/*<!-- Create New Tag -->
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="input-new-tag-name">Create New Tag</label>
                <div className="col-md-4">
                  <div className="input-group">
                    <input id="input-new-tag-name" name="input-new-tag-name" className="form-control" placeholder="" type="text"/>
                    <span className="input-group-btn">
                      <button className="btn btn-success" type="button" id="btn-new-project-create-tag">Create</button>
                    </span>
                  </div>
                  
                </div>
              </div>*/}

              {/*<!-- Done Button -->*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="btn-new-project-done"></label>
                <div className="col-md-4 pull-right">
                  <button id="btn-new-project-done" name="btn-new-project-done" type="submit" className="btn btn-lg btn-primary">Done</button>
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
NewProjectForm = reduxForm({ 
  form: 'newProjectForm',
  validate: (values)=>{
    const errors = {};
    return errors;
  }
})(NewProjectForm);

export default NewProjectForm;
