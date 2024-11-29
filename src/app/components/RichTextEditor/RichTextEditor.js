"use client"
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// import { Map } from 'immutable';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = ({ initialContent = '', onChange }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
    };

    return (
        <div className="editor-wrapper">
            <Editor
                editorState={editorState}
                // wrapperClassName="wrapper-class"
                // editorClassName="editor-class"
                // toolbarClassName="toolbar-class"
                onEditorStateChange={onEditorStateChange}
                toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'history'],
                    inline: {
                        options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
                    },
                }}
            />
        </div>
    );
};

export default RichTextEditor;