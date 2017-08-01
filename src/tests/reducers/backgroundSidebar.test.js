import backgroundSidebar from '../../reducers/backgroundSidebar';

describe('backgroundSidebar reducer', () => {
  it('should return the initial state, should be false', () => {
    expect(backgroundSidebar(undefined, {})).toEqual(
      {
        slide: false,
      },
    );
  });

  it('should handle SLIDE_TO_SIDEBAR', () => {
    expect(
      backgroundSidebar([], {
        type: 'SLIDE_TO_SIDEBAR',
      }),
    ).toEqual(
      {
        slide: true,
      },
    );
  });
});
