import React, { PureComponent, PropTypes } from 'react';

export default class ProjectList extends PureComponent {
  static propTypes = {

  };

  render() {
    return (
      <div className="taggr-project-list col">
          <section className="min-height section-2 dbg-color-2">
              <label for="list-projects">List Projects</label>
              <ul id="list-projects" className="list-group">
                  <li className="list-group-item">
                      My Project Name
                      <span className="pull-right">
                        <span className="btn btn-xs btn-primary">
                            <span className="glyphicon glyphicon-wrench"></span>
                      </span>
                      <span className="btn btn-xs btn-danger">
                            <span className="glyphicon glyphicon-trash"></span>
                      </span>
                      </span>
                  </li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
              </ul>
          </section>
      </div>
    );
  }
}
