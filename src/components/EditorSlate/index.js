import React, {useCallback, useMemo} from 'react'

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ToggleButton from '@mui/material/ToggleButton';

import isHotkey from 'is-hotkey';
import {Editable, withReact, useSlate, Slate} from 'slate-react';
import {
   Editor,
   Transforms,
   createEditor,
   Element as SlateElement,
} from 'slate'
import {withHistory} from 'slate-history'


import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import CodeIcon from '@mui/icons-material/Code';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Divider from '@mui/material/Divider';


const HOTKEYS = {
   'mod+b': 'bold',
   'mod+i': 'italic',
   'mod+u': 'underline',
   'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']


const toggleBlock = (editor, format) => {
   const isActive = isBlockActive(
      editor,
      format,
      TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
   )
   const isList = LIST_TYPES.includes(format)

   Transforms.unwrapNodes(editor, {
      match: n =>
         !Editor.isEditor(n) &&
         SlateElement.isElement(n) &&
         LIST_TYPES.includes(n.type) &&
         !TEXT_ALIGN_TYPES.includes(format),
      split: true,
   })
   let newProperties = undefined
   if (TEXT_ALIGN_TYPES.includes(format)) {
      newProperties = {
         align: isActive ? undefined : format,
      }
   } else {
      newProperties = {
         type: isActive ? 'paragraph' : isList ? 'list-item' : format,
      }
   }
   Transforms.setNodes(editor, newProperties)

   if (!isActive && isList) {
      const block = {type: format, children: []}
      Transforms.wrapNodes(editor, block)
   }
}

const toggleMark = (editor, format) => {
   const isActive = isMarkActive(editor, format)

   if (isActive) {
      Editor.removeMark(editor, format)
   } else {
      Editor.addMark(editor, format, true)
   }
}

const isBlockActive = (editor, format, blockType = 'type') => {
   const {selection} = editor
   if (!selection) return false

   const [match] = Array.from(
      Editor.nodes(editor, {
         at: Editor.unhangRange(editor, selection),
         match: n =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            n[blockType] === format,
      })
   )

   return !!match
}

const isMarkActive = (editor, format) => {
   const marks = Editor.marks(editor)
   return marks ? marks[format] === true : false
}

const Element = ({attributes, children, element}) => {
   const style = {textAlign: element.align}
   switch (element.type) {
      case 'block-quote':
         return (
            <blockquote style={style} {...attributes}>
               {children}
            </blockquote>
         )
      case 'bulleted-list':
         return (
            <ul style={style} {...attributes}>
               {children}
            </ul>
         )
      case 'heading-one':
         return (
            <h1 style={style} {...attributes}>
               {children}
            </h1>
         )
      case 'heading-two':
         return (
            <h2 style={style} {...attributes}>
               {children}
            </h2>
         )
      case 'list-item':
         return (
            <li style={style} {...attributes}>
               {children}
            </li>
         )
      case 'numbered-list':
         return (
            <ol style={style} {...attributes}>
               {children}
            </ol>
         )
      default:
         return (
            <p style={style} {...attributes}>
               {children}
            </p>
         )
   }
}

const Leaf = ({attributes, children, leaf}) => {
   if (leaf.bold) {
      children = <strong>{children}</strong>
   }

   if (leaf.code) {
      children = <code>{children}</code>
   }

   if (leaf.italic) {
      children = <em>{children}</em>
   }

   if (leaf.underline) {
      children = <u>{children}</u>
   }

   return <span {...attributes}>{children}</span>
}


const BlockButton = ({format, icon}) => {
   const editor = useSlate()
   return (
      <ToggleButton
         sx={{
            margin: 0,
            border: 0,
         }}
         value={format}

         selected={isBlockActive(
            editor,
            format,
            TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
         )}
         onMouseDown={event => {
            event.preventDefault()
            toggleBlock(editor, format)
         }}
      >
         {icon}
      </ToggleButton>
   )
}


const MarkButton = ({format, icon}) => {
   const editor = useSlate()
   return (
      <ToggleButton
         sx={{
            margin: 0,
            border: 0,
         }}
         value={format}
         selected={isMarkActive(editor, format)}
         onMouseDown={event => {
            event.preventDefault()
            toggleMark(editor, format)
         }}
      >
         {icon}
      </ToggleButton>
   )
}

export default function EditorSlate(props) {
   const renderElement = useCallback(props => <Element {...props} />, [])
   const renderLeaf = useCallback(props => <Leaf {...props} />, [])
   const editor = useMemo(() => withHistory(withReact(createEditor())), [])

   const editorStateRef = props.editorState;


   // const initialValue = [
   //    {
   //       type: 'paragraph',
   //       align: 'left',
   //       children: [{text: ''}],
   //    }
   // ]

   return (
      <Paper
         sx={{
            width: '100%'
         }}
      >
         <Slate
            editor={editor}
            value={props.initialValue}
            onChange={editorState => editorStateRef.current = editorState}
         >
            <Grid
               sx={{
                  width: '100%',
                  display: 'flex',
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  flexWrap: 'wrap',
               }}
            >
               <MarkButton format="bold" icon={<FormatBoldIcon/>}/>
               <MarkButton format="italic" icon={<FormatItalicIcon/>}/>
               <MarkButton format="underline" icon={<FormatUnderlinedIcon/>}/>
               <MarkButton format="code" icon={<CodeIcon/>}/>
               <Divider flexItem orientation="vertical" sx={{mx: 0.5, my: 1}}/>
               <BlockButton format="block-quote" icon={<FormatQuoteIcon/>}/>
               <BlockButton format="numbered-list" icon={<FormatListNumberedIcon/>}/>
               <BlockButton format="bulleted-list" icon={<FormatListBulletedIcon/>}/>
               <Divider flexItem orientation="vertical" sx={{mx: 0.5, my: 1}}/>
               <BlockButton format="left" icon={<FormatAlignLeftIcon/>}/>
               <BlockButton format="center" icon={<FormatAlignCenterIcon/>}/>
               <BlockButton format="right" icon={<FormatAlignRightIcon/>}/>
               <BlockButton format="justify" icon={<FormatAlignJustifyIcon/>}/>
            </Grid>
            <Box
               sx={
                  {
                     px: 1,
                     minHeight: '40px'
                  }}
            >

               <Editable
                  renderElement={renderElement}
                  renderLeaf={renderLeaf}
                  placeholder="Enter a comment..."
                  spellCheck
                  autoFocus
                  onKeyDown={event => {
                     for (const hotkey in HOTKEYS) {
                        if (isHotkey(hotkey, event)) {
                           event.preventDefault()
                           const mark = HOTKEYS[hotkey]
                           toggleMark(editor, mark)
                        }
                     }
                  }}
               />

            </Box>
         </Slate>
      </Paper>


   );

}