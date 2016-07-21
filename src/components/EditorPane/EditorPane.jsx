import React, { Component } from 'react';
import ReactQuill from 'react-quill';

/**
* EDITOR PANE CLASS
* @prop {func} updateText - pass in function to update the values in the documentPane
* @prop {string} textToShow - pass in value for text to show in the Quill editor
*/
export default class EditorPane extends Component {
    static propTypes = {
        updateText: React.PropTypes.func,
        textToShow: React.PropTypes.string
    }

  // Check for property updates to limit re-render
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.textToShow != this.props.textToShow
  }

  state = {
    text: this.props.textToShow
  }

  onTextChange = (value) => {
    // update the state to force rerender on data within quill
    this.setState({
        text: value
    });
    // send the value to the app to update
    this.props.updateText(value);
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
