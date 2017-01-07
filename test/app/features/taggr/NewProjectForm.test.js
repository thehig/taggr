import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { NewProjectForm } from 'src/features/taggr';

describe('taggr/NewProjectForm', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <NewProjectForm />
    );

    expect(
      renderedComponent.find('.taggr-new-project-form').node
    ).to.exist;
  });
});
