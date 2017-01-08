import { expect } from 'chai';

import {
  CREATE_NEW_PROJECT,
} from 'features/taggr/redux/constants';

import {
  createNewProject,
  reducer,
} from 'features/taggr/redux/createNewProject';

describe('taggr/redux/createNewProject', () => {
  it('action: createNewProject', () => {
    const expectedAction = {
      type: CREATE_NEW_PROJECT,
    };
    expect(createNewProject()).to.deep.equal(expectedAction);
  });

  it('reducer should handle CREATE_NEW_PROJECT', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: CREATE_NEW_PROJECT }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
