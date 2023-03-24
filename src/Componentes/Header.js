import { AppBar, Toolbar,styled } from '@mui/material'
import React from 'react'

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

function Header() {
  return (
   <Container >
      <Toolbar>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvF4iXxidUR-EAx1QUp5uu37e6R0qMs9Wf3Q&usqp=CAU" alt="logo" style={{height : '40px'}}/>
      </Toolbar>
   </Container>
  )
}

export default Header
