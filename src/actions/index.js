export const editText = (element, text) => {
  return {
    type: 'EDIT_TEXT',
    element: element,
    text
  }
}

export const saveTemplate = (updatedString) => {
    return {
        type: 'SAVE_TEMPLATE',
        uString: updatedString
    }
}