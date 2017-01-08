import React, { PureComponent, PropTypes } from 'react';
import cn from 'classnames';

export default class InputWrapper extends PureComponent {
  static propTypes = {
    field: PropTypes.object.isRequired
  };

  render() {
    const { field } = this.props;
    
    return (
      <div className={cn("form-group",  {"has-error": field.meta.error && field.meta.touched})} >
        <label className="col control-label">{field.placeholder}</label>
        <div className="col">
          <input className="form-control input-md" {...field.input} placeholder={field.placeholder}/>

          {field.meta.error && field.meta.touched && <span className="help-block">{field.meta.error}</span>}
        </div>
      </div>
    );
  }
}
