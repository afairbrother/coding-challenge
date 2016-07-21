import React, { Component, PropTypes } from 'react';

import Header from '../components/Header/Header';
import EditorPane from '../components/EditorPane/EditorPane';
import DocumentPane from '../components/DocumentPane/DocumentPane';


if ( 'undefined' !== typeof window ) {
    require( '../styles/main.scss' );
}

/**
* APP CLASS
* This class handles the basic control of the app and passes values to the components.
* Ideally, we'd move a lot of this logic into redux or some other communication method.
* Right now it uses callback functions. It works, but doesn't scale well.
*/
export default class App extends Component {

    _updateSaveTemplate = () => {
        const saveString = document.getElementsByClassName('document-pane__editable-area')[0].innerHTML;

        this._saveData( 'templateString', saveString );
    }

    // manage the state of what text is appearing in the editor and what will be stuck to an element
    state = {
        text: 'Click any text element to update it',
        editingElement: ''
    };


    /**
    * Update the data in localstorage
    * @param propertyKey {string} - key in localstorage
    * @param data - data to store with localstorage
    */
    _saveData = (propertyKey, data) => {
        localStorage.setItem(propertyKey, data)
    }

    // update the state when the text in the editor has been changed
    handleTextUpdate(element, text){
        this.setState({
            text: text,
            editingElement: element
        });
    }
    updateText(text){
        this.setState({
            text: text
        });
    }

    handleSaveTemplate(){
        const saveString = document.getElementsByClassName('document-pane__editable-area')[0].innerHTML;
        this._saveData( 'templateString', saveString );
    }

    // make sure the render function is called only when needed
    shouldComponentUpdate(nextProps, nextState){
        return nextState.text !== this.state.text
    }

  render() {
    return (
        <div>
            <Header />
            <div>
                <EditorPane updateText={this.updateText.bind(this)} textToShow={this.state.text} />
                <DocumentPane saveTemplate={this.handleSaveTemplate.bind(this)}
                    handleUpdate={this.handleTextUpdate.bind(this)}
                    replaceTarget={this.state.editingElement} replaceText={this.state.text} />
            </div>
        </div>

    );
  }
}

