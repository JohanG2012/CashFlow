import loginSlide from '../../reducers/loginSlide';

describe('backgroundSidebar reducer', () => {
  it('should return the initial state, should be false', () => {
    expect(loginSlide(undefined, {})).toEqual(
      {
        right: false,
      },
    );
  });

  it('should handle SLIDE_TO_SIDEBAR', () => {
    expect(
      loginSlide([], {
        type: 'SLIDE',
      }),
    ).toEqual(
      {
        right: true,
      },
    );
  });
});
