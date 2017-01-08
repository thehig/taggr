import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { NewProjectSlug } from 'src/features/taggr';

describe('taggr/NewProjectSlug', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <NewProjectSlug />
    );

    expect(
      renderedComponent.find('.taggr-new-project-slug').node
    ).to.exist;
  });
});
