const editApp = (state, action) => {
  switch (action.type) {
    case 'EDIT_TEXT':
      return {
        element: action.element,
        text: action.text
      }
      break;
    case 'SAVE_TEMPLATE':
      return {
        updatedString: action.uString
      }
      break;
    default:
      return state
  }
}

export default editApp;