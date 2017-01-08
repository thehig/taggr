import React, { PureComponent, PropTypes } from 'react';

export default class ProjectList extends PureComponent {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    deleteAction: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="taggr-project-list col">
          <section className="min-height section-2 dbg-color-2">
              <label htmlFor="list-projects">Projects</label>
              <ul id="list-projects" className="list-group">
                  {/* Project List Item */}
                  {this.props.projects.map((project)=>{
                    return (
                      <li className="list-group-item" key={project.id}>
                        {project.name}
                        <span className="pull-right">
                          <span className="btn btn-xs btn-primary">
                              <span className="glyphicon glyphicon-wrench"></span>
                        </span>
                        <span className="btn btn-xs btn-danger" onClick={()=>{this.props.deleteAction(project.id)}}>
                              <span className="glyphicon glyphicon-trash"></span>
                        </span>
                        </span>
                      </li>
                    );
                  })}

              </ul>
          </section>
      </div>
    );
  }
}
