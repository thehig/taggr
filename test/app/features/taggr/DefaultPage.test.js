import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'features/taggr/DefaultPage';

describe('taggr/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const pageProps = {
      taggr: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...pageProps} />
    );

    expect(
      renderedComponent.find('.taggr-default-page').node
    ).to.exist;
  });
});
