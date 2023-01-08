import ExampleTheme from "./themes/ExampleTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';

// import TreeViewPlugin from "./plugins/TreeViewPlugin";
// import ToolbarPlugin from "./plugins/ToolbarPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import {useTheme} from "@mui/material/styles";

import './editor.css';

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

const editorConfig = {
  editorState: '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ]
};


export default function EditorLex(props) {
   // const theme = useTheme();

  const editorStateRef = props.editorState;


  return (
     <Grid item xs={12}
     >
    <LexicalComposer initialConfig={editorConfig}>
      <Box
         className="editor-container"
         // sx={{
         //    width: '90%',
         //    borderRadius: '2px',
         //   fontWeight: 400,
         //   textAlign: 'left',
         //   borderTopLeftRadius: '10px',
         //   borderTopRightRadius: '10px',
         //   border: `2px solid ${theme.palette.grey[300]}`,
         //   // maxWidth: '550px',
         // }}
      >
        <ToolbarPlugin />
        <Box
           className="editor-inner"
         // sx={{
         //    width: '90%',
         //    backgroundColor: '#fff',
         //   // minHeight: '184px',
         //   // maxHeight: '2500px',
         //   resize: 'none',
         //   fontSize: '1rem',
         //   position: 'relative',
         //   tabSize: '1',
         //   outline: 0,
         //   // padding: theme.spacing(2, 1.5),
         //   // overflowY: 'scroll',
         // }}
        >
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
         <OnChangePlugin onChange={editorState => editorStateRef.current = editorState} />
          {/*<HistoryPlugin />*/}
          {/*<TreeViewPlugin />*/}
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </Box>
      </Box>

    </LexicalComposer>
     </Grid>


  );
}
