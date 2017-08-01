import slideToSidebar from '../../actions/slideToSidebar';

describe('slideToSidebar action', () => {
  it('should create an action to slide to sidebar', () => {
    const expectedAction = {
      type: 'SLIDE_TO_SIDEBAR',
    };
    expect(slideToSidebar()).toEqual(expectedAction);
  });
});
