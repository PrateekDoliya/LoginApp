import React, { useState } from 'react';
import { Button } from 'reactstrap';
import $ from 'jquery';
import { useHistory } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { LoginAction } from './action/LoginAction';
import { useDispatch } from 'react-redux';

const Login = ({ mode }) => {

    let [value, setValue] = useState({ userName:'',pwd:''})
    let [togglePassword, setTogglePassword] = useState(true);
    let history = useHistory();
    const dispatch = useDispatch();

    const inputEvent = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
        $("#userNameErr").hide();
        $("#pwdErr").hide();
    }

    const loginToUser = (e) => {
        e.preventDefault();

        if( value.userName === 'harsh' ||  value.userName === 'nikita') {
            if (( value.userName === 'harsh' && value.pwd === 'qwerty01$0(') || (value.userName === 'nikita' && value.pwd === 'asdfgh99A@')) {
                let LoginName = value.userName.substr(0,1);
                // console.log(LoginName);
                LoginName = LoginName.toUpperCase();
                dispatch(LoginAction({name:LoginName}))
                history.push("/score@board$card&records")
            } else {
                $("#pwdErr").show();
            }
        } else {
            $("#userNameErr").show();
        }
    }

    const handleClick = () => {
        setTogglePassword(!togglePassword)
    };

    

    return (
        <>
            <div className='col-10 col-sm-10 col-md-8  mx-auto'>
                
                <form onSubmit={ loginToUser }>
                   
                    <div className='form-group'>
                        <label className="fw-bolder"> UserName :</label>
                        <input
                            type="text"
                            placeholder='Please Enter UserName'
                            name="userName"
                            value={ value.userName}
                            onChange={ inputEvent }
                            style={{fontWeight:500}}
                            className=
                                {`form-control mt-2  bg-${mode ==='light' ? 'light' : 'dark'}  text-${mode ==='light' ? 'dark' : 'light'}`}
                        /> 
                        <span id="userNameErr" className="text-danger fw-bold error "> *  Invalid UserName</span>   
                    </div>
                    
                    <div className='form-group mt-3'>
                        <label className="fw-bolder"> Password :</label>
                        <div className="row">
                            <div className="col-10 col-md-11">
                                <input
                                    type={togglePassword ? 'password' : 'text'}
                                    placeholder='Please Enter UserName'
                                    name='pwd'
                                    value={value.pwd}
                                    onChange={ inputEvent }
                                    style={{fontWeight:500}}
                                    className=
                                        {`form-control mt-2  bg-${mode ==='light' ? 'light' : 'dark'}  text-${mode ==='light' ? 'dark' : 'light'}`}
                                />    
                            </div>
                            <div className="col-2 col-md-1 d-flex justify-content-center align-items-end">
                                <Stack direction="row" spacing={1}>
                                    <Chip className={`text-${mode ==='light' ? 'dark' : 'light'}`} label={ togglePassword ? 'Show' : 'Hide'} variant="outlined" onClick={handleClick} />
                                </Stack>
                            </div>
                        </div>
                        
                        <span id="pwdErr" className="text-danger fw-bold error " > *Invalid Password</span>   
                    </div>

                    <div className="form-group mt-4">
                        <Button 
                            color={`${mode === 'light' ? 'light' : 'dark'} `}
                            style={{borderColor:`${mode ==='light' ? '#262626' : '#FBFBFB'}`, backgroundColor:'transparent'}}
                        > SignIn</Button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Login;
