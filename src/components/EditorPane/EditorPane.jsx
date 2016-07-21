import React, { Component } from 'react';
import ReactQuill from 'react-quill';


export default class EditorPane extends Component {
  render() {
    return (
      <div className='editor-pane'>
        <ReactQuill>
                <ReactQuill.Toolbar key="toolbar"
                                    ref="toolbar"
                                    items={ReactQuill.Toolbar.defaultItems} />
                <div key="editor"
                     ref="editor"
                     className="quill-contents"
                     dangerouslySetInnerHTML={{__html:"a string"}} />
              </ReactQuill>
      </div>
    );
  }
}
