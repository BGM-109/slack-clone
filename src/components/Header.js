import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

function Header() {
    const [ user ] = useAuthState(auth); 
    return (
        <div>
            <HeaderContainer>
                <HeaderLeft>
                    <HeaderAvatar 
                        src={user?.photoURL}
                        onClick={() => auth.signOut()}
                        alt={user?.displayName}
                    />
                    <AccessTimeIcon />
                </HeaderLeft>

                <HeaderSearch>
                    <SearchIcon />
                    <input placeholder="search"/>
                </HeaderSearch>
                <HeaderRight>
                    <HelpOutlineIcon />
                </HeaderRight>
            </HeaderContainer>
        </div>
    )
}

export default Header

const HeaderContainer = styled.div `
    display:flex;
    position:fixed;
    align-items:center;
    width:100%;
    justify-content:space-between;
    padding: 10px 0 ;
    background-color:var(--slack-color);
    color:white;

`;
const HeaderLeft = styled.div `
    flex:0.3;
    display:flex;
    align-items:center;
    margin-left:20px;
    > .MuiSvgIcon-root {
        margin-left:auto;
        margin-right:30px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity:0.8;
    }
`;

const HeaderSearch = styled.div `
    flex:0.4;
    opacity:1;
    border-radius:6px;
    border:1px solid gray;
    background-color:#421f44;
    text-align:center;
    display:flex;
    padding:0 50px;
    color:gray;
    > input {
        background-color:transparent;
        border:none;
        text-align:center;
        min-width:30vw;
        outline:0;
        color:white;
    }
`;

const HeaderRight = styled.div `
    flex:0.3;
    display:flex;
    align-items:flex-end;
    > .MuiSvgIcon-root {
        margin-left:auto;
        margin-right:20px;
    }
`;