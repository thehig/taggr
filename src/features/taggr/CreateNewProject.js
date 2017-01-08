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
    evt.preventDefault();
    if(!this.input.value) return;

    this.props.createProject(this.input.value);
    this.input.value = "";
    this.input.focus();
  }

  render(){
    return(
      <div className="taggr-create-new-project">
        <section className="min-height section-1 dbg-color-1">

        <form className="form-horizontal">
        <fieldset>

        <legend>Create New Project</legend>

        <div className="form-group">
          <label className="control-label" htmlFor="appendedtext">Name</label>
            <div className="input-group">
              <input id="appendedtext" ref={(input)=> {this.input = input;}} name="appendedtext" className="form-control" placeholder="" type="text"/>
              <span className="input-group-btn">
                  <button className="btn btn-default" type="submit" onClick={this.createProjectClick}><span className="glyphicon glyphicon-plus"></span> Add</button>
              </span>
          </div>
        </div>
        </fieldset>
        </form>


        </section>
      </div>
    );
  }
}
