import styled from '@emotion/styled';
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context/DataProvider'

const Container = styled(Box)`
 height : 41vh;
`

function Result() {

    const {html, css, js} = useContext(DataContext);
    const [src , setSrc] = useState('');

    const srcCode = `
      <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
      </html>
    `
   useEffect(()=>{
    const timeOut =  setTimeout(()=>{
        setSrc(srcCode);
      },1000)

      return()=> clearTimeout(timeOut);
   },[html, css, js])

  return (
   <Container>
        <iframe
          srcDoc={src}
          title = 'Output'
          width="100%"
          height= "100%"
        //   sandbox='allow-scripts'
        />
   </Container>
  )
}

export default Result
