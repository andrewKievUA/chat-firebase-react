import React, {useContext} from 'react';
import {Container, Grid,Button,Box} from "@mui/material";
import {Context} from "../index";
import firebase from "firebase/compat";

const Login =  () => {
    const {auth} = useContext(Context)
    const  login = async ()=>{
        const provider =new firebase.auth.GoogleAuthProvider()
        const {user} =  await auth.signInWithPopup(provider)
        console.log(user)
    }


    console.log("login is working")
    return (
        <Container>

            <Grid container style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justify={"center"}

            >
                <Grid style={{width:400, background:"lightgray"}}
                container
                      alignItems={"center"}
                      direction={"column"}

                >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>  войти с гугл</Button>

                    </Box>
                </Grid>


            </Grid>
        </Container>
    );
};

export default Login;