import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { InputWrapper } from 'src/features/taggr';

describe('taggr/InputWrapper', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <InputWrapper />
    );

    expect(
      renderedComponent.find('.taggr-input-wrapper').node
    ).to.exist;
  });
});
