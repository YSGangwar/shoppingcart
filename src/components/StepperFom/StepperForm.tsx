import {useForm} from 'react-hook-form';
import { useState } from 'react';
import { 
    Typography,
    Box,
    Button,
    TextField,
    Stepper,
    Step,
    StepLabel,
    Container,
    CssBaseline
 } from "@mui/material";
import { Signup } from '../../pages/Signup';

 export const StepperForm = () =>{

    const [activeStep , setActiveStep ] = useState(0);

    const increaseStep=()=>{
        console.log(activeStep)
        setActiveStep(activeStep+1);
    }
    const decreaseStep =()=>{
        setActiveStep(activeStep=>activeStep-1);
    }

    function displaySteps(steps:number){
        switch (steps)
        {
        case 0: return (<Signup/>)
    
        case 1: return (<></>)

        case 2: return (<></>)

        case 3: return (<></>)

        default: return (<></>)

            
        }
    }
    return (
        <div>
            <CssBaseline/>
                <Container component={Box} p={4}>
                    {
                        activeStep === 4 ? (<>
                        <Typography
                        variant='h3' align="center"
                        > Form Is submitted Successfully </Typography>

                        </>
                        ):
                        (<>
                            <Stepper  activeStep={activeStep}>
                            <Step>
                                <StepLabel>Personal Details </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Delivery Details </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Payment Gateway</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Verification</StepLabel>
                            </Step>
                        </Stepper>
                        <div>{ displaySteps(activeStep)}</div>

                        <Button variant='contained' color="secondary" onClick={decreaseStep} disabled={activeStep === 0}> Back </Button>
                        <Button variant='contained' color="secondary" onClick={increaseStep} > { activeStep===3 ?"Finish" :"Next"} </Button>
                        </>
                        )
                    }
                    
                </Container>
        </div>
    )
 }