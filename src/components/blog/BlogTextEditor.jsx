import React from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const BlogTextEditor = () => {
    const [editorState, setEditorState] = useStat('')

    const onEditorStateChange = () => {
        setEditorState(editorState)
    }
    return (
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
        />
    )
}

export default BlogTextEditor