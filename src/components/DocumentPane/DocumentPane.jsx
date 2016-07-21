import React, { Component } from 'react';

import EditableDocument from './components/EditableDocument';


export default class DocumentPane extends Component {
    static propTypes = {
        saveTemplate: React.PropTypes.func
    }

  render() {

    return (
      <div className='document-pane'>
        <EditableDocument saveTemplate={this.props.saveTemplate} handleUpdate={this.props.handleUpdate} />
      </div>
    );
  }
}
