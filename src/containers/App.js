import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/Header/Header';
import EditorPane from '../components/EditorPane/EditorPane';
import DocumentPane from '../components/DocumentPane/DocumentPane';

import * as EditorActions from '../actions'

if ( 'undefined' !== typeof window ) {
    require( '../styles/main.scss' );
}

App.propTypes = {
  editApp: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

class App extends Component {
  render() {
    const { editApp, actions } = this.props
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

function mapStateToProps(state) {
  return {
    editApp: edit.editApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(EditorActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
