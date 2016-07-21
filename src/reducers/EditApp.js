import { EDIT_TEXT, SAVE_TEMPLATE  } from '../constants/ActionTypes.js';

const initialState = [
  {
    text: localStorage.getItem('templateString'),
    updatedString: ''
  }
]

export default function editApp(state = initialState, action) {
  switch (action.type) {
    case EDIT_TEXT:
      return {
          element: action.element,
          text: action.text
      }
      break;

    case SAVE_TEMPLATE:
      return {
        updatedString: action.uString
      }
      break;

    default:
      return state;
  }
}