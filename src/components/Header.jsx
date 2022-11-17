import { AppBar, Toolbar ,styled,InputBase,Box} from '@mui/material';
import React from 'react'
import Logo from '../Images/logo.png';

const StyledHeader=styled(AppBar)`
    background:#000;
    padding:10px;
`
const StyledComponent=styled(Box)`
    background-color: rgb(255,255,255,0.15);
    margin-left: 20px;
    border-radius: 5px;
    padding:6px;
`
const InputBox=styled(InputBase)`
    color:inherit;
    margin:0 50px;
`

const Header = ({setText}) => {

    const getText=(e)=>{
        setText(e.target.value);
    }
  return (
    <StyledHeader position='static'>
        <Toolbar>
            <img src={Logo} alt="logo" style={{width:100}}/>
            <StyledComponent>
                <InputBox
                    placeholder='Search characters'
                    onChange={(e)=>getText(e)}
                />
            </StyledComponent>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header