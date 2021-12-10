import React from 'react';
import styled from 'styled-components';
import ToggleSwitch from './ToggleSwitch';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import $ from 'jquery';
import { LoginAction } from './action/LoginAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Nav = styled.div`
    width: 100%;
    height: 8vh;
    /* background-color: rgb(250, 250, 250); */
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 5px 35px;

    h4 {
        font-weight:600;
    }
`;

const LogoutContainer = styled.div`
  height: 2rem;
  width: 5rem;
  line-height: 2rem;
  /* background: #FBFBFB; */
  position: absolute;
  display: none;
  padding:6px 0 0 15px;
  justify-content: center;
  align-items: center;
  left: 29px;
  top: 3.5rem;
  border-radius: 5px;
  border: 1px solid grey ;
`;

const Navbar = ({ mode, toggleMode }) => {

    const initialState = useSelector( state => state.LoginReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const logout1 = () => {
        $("#logoutContainer").slideToggle();
        
    }

    const logOutID = () => {
        dispatch(LoginAction({name:null}))
    }

    const goToLogin = () => {
        history.push('/')
    }


    return (
        <>
            <Nav>
                
                {
                    initialState  ?
                    <div>
                        <Avatar sx={{ bgcolor: deepOrange[500],  width: 35, height: 35 }} onClick={ logout1} > { initialState } </Avatar> 
                        <LogoutContainer id="logoutContainer" className={`bg-${mode==='light' ? 'light' : 'dark'} text-${mode==='light' ? 'dark' : 'light'}`}>
                            <h6 style={{cursor:'pointer'}} onClick={ logOutID }> Logout </h6>
                        </LogoutContainer>
                    </div>
                    :
                        <Avatar src="/broken-image.jpg" sx={{ width: 35, height: 35 }} style={{cursor:'pointer'}} onClick={ goToLogin } />
                }

                <ToggleSwitch mode={mode} toggleMode={toggleMode} />
            </Nav>
        </>
    )
}

export default Navbar;
