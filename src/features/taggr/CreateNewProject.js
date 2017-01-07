import React, { PureComponent, PropTypes } from 'react';

export default class CreateNewProject extends PureComponent {
  static propTypes = {

  };

  render() {
    return (
      <div className="taggr-create-new-project col">
          <section className="min-height section-1 dbg-color-1">
              <label for="add-new-project">Create new Project</label>
              <div className="input-group">
                  <input id="add-new-project" type="text" className="form-control" placeholder="New project name" />
                  <span className="input-group-btn">
                      <button className="btn btn-default" type="button"><span class="glyphicon glyphicon-plus"></span> Add</button>
                  </span>
              </div>
          </section>
      </div>
    );
  }
}