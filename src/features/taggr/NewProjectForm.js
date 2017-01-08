import React, { PureComponent, PropTypes } from 'react';
import { reduxForm, Field, change } from 'redux-form';

import cn from 'classnames';

class NewProjectForm extends PureComponent {
  static propTypes = {

  };

  render() {
    return (
      <div className="taggr-new-project-form col">
          <section className="min-height section-3 dbg-color-3">
              <form className="form-horizontal">
              <fieldset>

              {/*<!-- Form Name -->*/}
              <legend>New Project Form</legend>

              {/*<!-- Text input-->*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="input-new-project-name">Project Name</label>  
                <div className="col-md-4">
                <input id="input-new-project-name" name="input-new-project-name" type="text" placeholder="" className="form-control input-md"/>
                  
                </div>
              </div>

              {/*<!-- Multiple Checkboxes -->*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="cb-tags">Select Tags</label>
                <div className="col-md-4">
                <div className="checkbox">
                  <label htmlFor="cb-tag-0">
                    <input type="checkbox" name="cb-tags" id="cb-tag-0" value="1"/>
                    Javascript
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="cb-tag-1">
                    <input type="checkbox" name="cb-tags" id="cb-tag-1" value="2"/>
                    Node
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="cb-tag-2">
                    <input type="checkbox" name="cb-tags" id="cb-tag-2" value="3"/>
                    Css
                  </label>
                </div>
                </div>
              </div>

              {/*<!-- Appended Input-->*/}
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
              </div>
              {/*<!-- Button -->*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="btn-new-project-done"></label>
                <div className="col-md-4 pull-right">
                  <button id="btn-new-project-done" name="btn-new-project-done" className="btn btn-lg btn-primary">Done</button>
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
