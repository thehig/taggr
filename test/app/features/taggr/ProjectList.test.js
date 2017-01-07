import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ProjectList } from 'src/features/taggr';

describe('taggr/ProjectList', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <ProjectList />
    );

    expect(
      renderedComponent.find('.taggr-project-list').node
    ).to.exist;
  });
});
