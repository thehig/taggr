import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { CreateNewProject } from 'src/features/taggr';

describe('taggr/CreateNewProject', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <CreateNewProject />
    );

    expect(
      renderedComponent.find('.taggr-create-new-project').node
    ).to.exist;
  });
});
