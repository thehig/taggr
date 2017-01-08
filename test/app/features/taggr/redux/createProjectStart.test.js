import { expect } from 'chai';

import {
  CREATE_PROJECT_START,
} from 'features/taggr/redux/constants';

import {
  createProjectStart,
  reducer,
} from 'features/taggr/redux/createProjectStart';

describe('taggr/redux/createProjectStart', () => {
  it('action: createProjectStart', () => {
    const expectedAction = {
      type: CREATE_PROJECT_START,
    };
    expect(createProjectStart()).to.deep.equal(expectedAction);
  });

  it('reducer should handle CREATE_PROJECT_START', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: CREATE_PROJECT_START }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
