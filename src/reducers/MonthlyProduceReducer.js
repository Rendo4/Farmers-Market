export default (state = {}, action) => {
  const { month, selection } = action;
  switch (action.type) {
    case 'DISPLAY_MONTH':
      return Object.assign({}, state, {
        [month] : {
          month: month,
          selection: selection
        }
      })
    default:
      return state;
  } 
};