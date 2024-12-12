"use client"
import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = ({ initialContent = '', onChange }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
        if (initialContent) {
            const blocksFromHtml = htmlToDraft(initialContent);
            if (blocksFromHtml) {
                const { contentBlocks, entityMap } = blocksFromHtml;
                const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
                const newEditorState = EditorState.createWithContent(contentState);
                setEditorState(newEditorState);
            }
        }
    }, [initialContent]);

    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
        const contentState = newEditorState.getCurrentContent();
        // Convert to RAW JS object
        const rawContentState = convertToRaw(contentState);
        // Convert to HTML
        const htmlContent = draftToHtml(rawContentState);
        onChange(htmlContent);
    };

    return (
        <div className="editor-wrapper">
            <Editor
                editorState={editorState}
                wrapperClassName="border-2 my-2"
                editorClassName="px-4 py-2 min-h-[200px]"
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