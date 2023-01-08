import {useRef} from "react";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

// import {$getRoot} from "lexical";
// import EditorLex from "components/EditorLex";
import EditorSlate from "components/EditorSlate";


const handleClick = (state) => {
   console.log("In TextEntry handleClick");
   console.log(state)
   console.log(JSON.stringify(state))
   //    For EditorLex
   // if (state) {
   //    state.read(() => {
   //       const root = $getRoot();
   //       console.log(root['__cachedText']);
   //    });
   // }
}

// const onSave = (state) => {
//    console.log("In TextEntry handleClick");
//    console.log(JSON.stringify(state))
// }


function TextEntry() {
   const editorStateRef = useRef();

   // this would be saved /loaded from redux
   const initialValue = [
      {
         type: 'paragraph',
         align: 'left',
         children: [{text: ''}],
      }
   ]

   return (
      <Container component="main">
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            <Typography
               component="h1"
               variant="h2"
               align="center"
               color="text.primary"
               gutterBottom
            >
               Text Entry
            </Typography>
         </Box>

         <Grid item xs={12} zeroMinWidth
               sx={{
                  display: 'flex',
                  justifyContent: 'center',
               }}>

            <Box
               sx={{
                  mb: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '80%'
               }}
            >

               {/*<EditorLex editorState={editorStateRef}/>*/}
               <EditorSlate
                  editorState={editorStateRef}
                  initialValue={initialValue}
               />

               <Button
                  variant="contained"
                  onClick={() => {
                     handleClick(editorStateRef.current)
                  }}
                  size='large'
                  startIcon={<DirectionsRunIcon/>}
                  sx={{
                     my: 5,
                  }}
               >
                  Print Text
               </Button>
            </Box>

         </Grid>

      </Container>
   );
}


export default TextEntry;
