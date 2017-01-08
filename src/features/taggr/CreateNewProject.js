import React, { PureComponent, PropTypes } from 'react';

export default class CreateNewProject extends PureComponent {
  static propTypes = {
    createProject: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.createProjectClick = ::this.createProjectClick;
  }

  createProjectClick(evt){
    this.props.createProject(this.input.value);
    this.input.value = "";
    this.input.focus();
  }

  render() {
    return (
      <div className="taggr-create-new-project col">
          <section className="min-height section-1 dbg-color-1">
              <label htmlFor="add-new-project">Create new Project</label>
              <div className="input-group">
                  <input id="add-new-project" ref={(input)=> {this.input = input;}} type="text" className="form-control" placeholder="New project name" />
                  <span className="input-group-btn">
                      <button className="btn btn-default" type="button" onClick={this.createProjectClick}><span className="glyphicon glyphicon-plus"></span> Add</button>
                  </span>
              </div>
          </section>
      </div>
    );
  }
}
