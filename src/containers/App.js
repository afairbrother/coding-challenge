import React, { Component, PropTypes } from 'react';

import Header from '../components/Header/Header';
import EditorPane from '../components/EditorPane/EditorPane';
import DocumentPane from '../components/DocumentPane/DocumentPane';


if ( 'undefined' !== typeof window ) {
    require( '../styles/main.scss' );
}

export default class App extends Component {

    _updateSaveTemplate = () => {
        const saveString = document.getElementsByClassName('document-pane__editable-area')[0].innerHTML;

        this._saveData( 'templateString', saveString );
    }

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

