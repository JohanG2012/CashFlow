const loginSlide = (state = { right: false }, action) => {
  switch (action.type) {
    case 'SLIDE':
      return { right: !state.right };
    default:
      return state;
  }
};

export default loginSlide;
