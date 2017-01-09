import React, { PureComponent, PropTypes } from 'react';

export default class ProjectList extends PureComponent {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    deleteAction: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
    this.renderProject = ::this.renderProject;
    this.renderNewProject = ::this.renderNewProject;
  }

  renderNewProject(project){
    return (

      <li className="list-group-item" key={project.id}>
        {/*<!-- Project Tile "template" -->*/}
         <div className="row project-tile row-eq-height">
          
          {/*<!-- Project Image Container -->*/}
           <div className="col-sm-auto hidden-xs-down min-height dbg-color-7">
             <img src="http://placekitten.com/g/140/140" className="img-fluid rounded-circle mx-auto d-block padding-5"/>
           </div>

           {/*<!-- Project Info -->*/}
           <div className="col-sm min-height dbg-color-6">
              <div className="row full-height">
               <div className="col-sm-12 min-height dbg-color-3">
                
                {/*<!-- Project Header -->*/}
                <h3 className="row">
                  <span className="col-sm-12">{project.name}</span>
                  <small className="hidden-xs-down col-sm-12 pull-right text-right text-muted">Date Created: 10/10/21</small>
                </h3>

                <hr/>
                </div>
               
               {/*<!-- Project Tags -->*/}
               <div className="col-sm-12 min-height dbg-color-2">
                <div className="tags-container"> 
                  <span className="btn btn-secondary btn-rounded btn-sm">Default</span>
                  <span className="btn btn-primary btn-rounded btn-sm">Primary</span>
                  <span className="btn btn-success btn-rounded btn-sm">Success</span>
                  <span className="btn btn-info btn-rounded btn-sm">Info</span>
                  <span className="btn btn-warning btn-rounded btn-sm">Warning</span>
                  <span className="btn btn-danger btn-rounded btn-sm">Danger</span>
                </div>
               </div>
              </div>
           </div>

           {/*<!-- Button Menu -->*/}
           <div className="col-sm-auto hidden-xs-down min-height dbg-color-7">
            <span className="btn btn-danger responsive-fill" onClick={()=>{this.props.deleteAction(project.id)}}>
              <span className="glyphicon glyphicon-trash center-element"></span>
              </span>
           </div>

         </div>
       </li>

    );
  }

  renderProject(project){
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
  }

  render() {
    return (
      <div className="taggr-project-list col">
          <section className="min-height section-2 dbg-color-2">
              <label htmlFor="list-projects">Projects</label>
              <ul id="list-projects" className="list-group">
                  {/* Project List Item */}
                  {this.props.projects.map(this.renderNewProject)}
              </ul>
          </section>
      </div>
    );
  }
}
