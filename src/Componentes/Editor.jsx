import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import '../Css/editor.css'
import styled from '@emotion/styled'
import { CloseFullscreenTwoTone } from '@mui/icons-material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const Heading = styled(Box)`
   background : #1d1e22;
   display : flex;
   padding : 9px 12px;
`
const Header = styled(Box)`
display : flex;
background : #060606;
color : white;
justify-content : space-between;
font-weight : 700;
`
const Container = styled(Box)`
  flex-grow: 1;
  flex-basic : 0;
  dispaly : flex;
  flex-direction : column;
  padding : 0 8px 8px;
`


function Editor({heading ,icon, color, value, onChange}) {
  
    function handleChange(editor, data, value){
       onChange(value);
    }

    const [open ,setOpen] = useState(true);

  return (
  <Container style={ open ? null : {flexGrow : 0}}>
     <Header>
         <Heading>
            <Box
                component="span"
                style={{
                    backgroundColor : color,
                    height : 20,
                    width : 20,
                    display : 'flex',
                    placeContent : 'center',
                    borderRadius : 5, 
                    marginRight : 5, 
                    paddingBottom : 2,
                    color : '#000',
                }}
                
                >
                    {icon}
                </Box>
                <Box>
                    {heading}
                </Box> 
        </Heading>
                <CloseFullscreenTwoTone
                  fontSize='small'
                  style={{alignSelf : 'center'}}
                  onClick = {()=>{setOpen(prev => ! prev)}}
                /> 
     </Header>
     <ControlledEditor className='controlled-editor'
         value={value}
         onBeforeChange={handleChange}
         options={{
            theme : 'material',
            lineNumbers : true,
         }}
     />
  </Container>
  )
}

export default Editor
