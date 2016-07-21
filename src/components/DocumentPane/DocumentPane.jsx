import React, { Component } from 'react';

import EditableDocument from './components/EditableDocument';

/**
* DOCUMENT PANE CLASS
* @prop {func} - saveTemplate - tell the app to save the template
* @prop {string} - replaceText - the string of the HTML to be replaced
*/
export default class DocumentPane extends Component {
    static propTypes = {
        saveTemplate: React.PropTypes.func,
        replaceText: React.PropTypes.string
    }

    // Optimizes calling of the render function to only be when the replaceText value changes
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.replaceText != this.props.replaceText;
    }

    // Dirty replace of values in the template
    // Typically we'd have a better method to replace each individual section
    updateTemplate = () => {
        const elementTag = this.props.replaceTarget.tagName;
        const element = document.getElementsByClassName('document-pane__editable-area')[0];

        // Avoid this in real life
        // replace the innerHTML and tell the app to save the updated template
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
