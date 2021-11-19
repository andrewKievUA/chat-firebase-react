import React, {useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, Container, Grid, TextField,Avatar} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat";

const Chats = () => {

    const {auth, firestore} = React.useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState()

    const [message, loading] = useCollectionData(
        firestore.collection("message").orderBy("createdAt")
    )

   // console.log(message)

    const sendMessage = async () => {
        firestore.collection("message").add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value || 33,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue("")

    }

    if (loading) {
        return <Loader/>
    }

    return (
        <Container>
            Chats
            <Grid container style={{height: window.innerHeight - 50}}>
                <div style={{width: "80%", height: "70vh", border: "1px solid gray", overflowY: "auto"}}>
                    {message.map(el => {
                      return ( <div key={el.createdAt}>
                            <Grid container >
                                {(()=>console.log(el.createdAt))()}
                                <Avatar src={el.photoURL}/>
                                <div>{el.displayName}</div>
                            </Grid>
                            <div>{el.text}</div>
                        </div>)
                    })}

                </div>


                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{width: "80%"}}
                >
                    <TextField
                        fullWidth
                        variant={"outlined"}
                        value={value || ""}
                        onChange={e => setValue(e.target.value)}


                    />
                    {value
                        ?
                        <Button onClick={sendMessage}>Отправить Сообщение</Button>
                        :
                        <Button>Отправить Сообщение</Button>
                    }

                </Grid>
            </Grid>
        </Container>
    );
};

export default Chats;