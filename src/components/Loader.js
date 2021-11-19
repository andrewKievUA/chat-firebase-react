import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";

const Loader = () => {
    return (
        <div>
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
                        <div className="lds-ring">

                        </div>
                    </Grid>


                </Grid>
            </Container> <Container>

            <Grid container style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justify={"center"}

            >
                <Grid style={{width:400, background:"lightgray"}}
                      container
                      alignItems={"center"}
                      direction={"column"}

                >
                    <div className="lds-ring">  </div>

                </Grid>


            </Grid>
        </Container>
        </div>
    );
};

export default Loader;