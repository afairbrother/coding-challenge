import React, { Component } from 'react';

import EditableDocument from './components/EditableDocument';


export default class DocumentPane extends Component {
    static propTypes = {
        saveTemplate: React.PropTypes.func,
        replaceText: React.PropTypes.string
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('should the document pane update?');
        return nextProps.replaceText != this.props.replaceText;
    }

    updateTemplate = () => {
        console.log('updating the template', this.props.replaceTarget.tagName);
        console.log('element: ', element);
        const elementTag = this.props.replaceTarget.tagName;
        const element = document.getElementsByClassName('document-pane__editable-area')[0];

        if(elementTag !== undefined){
            element.querySelector(elementTag).innerHTML = this.props.replaceText;
            this.props.saveTemplate();
        }
    }

  render() {
    return (
      <div className='document-pane'>
        {this.updateTemplate()}
        <EditableDocument saveTemplate={this.props.saveTemplate}
         handleUpdate={this.props.handleUpdate} />
      </div>
    );
  }
}
