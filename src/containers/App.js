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
        text: 'Test'
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
        console.log('it worked');
        console.log('element: ', element);
        console.log('text: ', text);

        this.setState({
            text: text
        })
    }

    updateText(){

    }

    handleSaveTemplate(){
        const saveString = document.getElementsByClassName('document-pane__editable-area')[0].innerHTML;
        this._saveData( 'templateString', saveString );
        console.log('saveTemplate worked');
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
                <DocumentPane saveTemplate={this.handleSaveTemplate.bind(this)} handleUpdate={this.handleTextUpdate.bind(this)} />
            </div>
        </div>

    );
  }
}

