const EditApp = (state, action) => {
  switch (action.type) {
    case 'EDIT_TEXT':
      return {
        element: action.element,
        text: action.text
      }
    case 'SAVE_TEMPLATE':
      return {
        isSaved: true
      }
    default:
      return state
  }
}

export default EditApp;