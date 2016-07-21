import React, { Component } from 'react';
import ReactQuill from 'react-quill';


export default class EditorPane extends Component {

  shouldComponentUpdate(nextProps, nextState){
    console.log('should I update?');
    return nextProps.textToShow != this.props.textToShow
  }

  state = {
    text: this.props.textToShow
  }

  render() {
    return (
      <div className='editor-pane'>
            <ReactQuill theme="snow"
                value={this.props.textToShow}
                onChange={this.onTextChange} />
      </div>
    );
  }
}
