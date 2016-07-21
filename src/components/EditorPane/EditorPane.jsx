import React, { Component } from 'react';
import ReactQuill from 'react-quill';


export default class EditorPane extends Component {
    static propTypes = {
        updateText: React.PropTypes.func,
        textToShow: React.PropTypes.string
    }

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.textToShow != this.props.textToShow
  }

  state = {
    text: this.props.textToShow
  }

  onTextChange = (value) => {
    this.setState({
        text: value
    });

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
