import React, { Component } from 'react';

import EditableDocument from './components/EditableDocument';


export default class DocumentPane extends Component {
  render() {
    return (
      <div className='document-pane'>
        <EditableDocument />
      </div>
    );
  }
}
