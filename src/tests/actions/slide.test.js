import slide from '../../actions/slide';

describe('slide action', () => {
  it('should create an action to slide', () => {
    const expectedAction = {
      type: 'SLIDE',
    };
    expect(slide()).toEqual(expectedAction);
  });
});
