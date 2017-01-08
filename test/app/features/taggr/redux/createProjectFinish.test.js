import { expect } from 'chai';

import {
  CREATE_PROJECT_FINISH,
} from 'features/taggr/redux/constants';

import {
  createProjectFinish,
  reducer,
} from 'features/taggr/redux/createProjectFinish';

describe('taggr/redux/createProjectFinish', () => {
  it('action: createProjectFinish', () => {
    const expectedAction = {
      type: CREATE_PROJECT_FINISH,
    };
    expect(createProjectFinish()).to.deep.equal(expectedAction);
  });

  it('reducer should handle CREATE_PROJECT_FINISH', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: CREATE_PROJECT_FINISH }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
