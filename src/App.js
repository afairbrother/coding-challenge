import React, { Component } from 'react';

import Header from './components/Header/Header';
import EditorPane from './components/EditorPane/EditorPane';
import DocumentPane from './components/DocumentPane/DocumentPane';

if ( 'undefined' !== typeof window ) {
    require( './styles/main.scss' );
}

export default class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <div>
                <EditorPane />
                <DocumentPane />
            </div>
        </div>

    );
  }
}
