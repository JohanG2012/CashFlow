const backgroundSidebar = (state = { slide: false }, action) => {
  switch (action.type) {
    case 'SLIDE_TO_SIDEBAR':
      return { slide: !state.slide };
    default:
      return state;
  }
};

export default backgroundSidebar;
