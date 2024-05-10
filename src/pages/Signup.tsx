import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Box from '@mui/material/Box';;
import LoadingButton from '@mui/lab/LoadingButton';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
type FormFields = {
    email:string
    password:string
}

export const Signup = () => {
    const {register , handleSubmit ,setError ,formState:{errors , isSubmitting}} = useForm<FormFields>();
    const onSubmit :SubmitHandler<FormFields> = async(data) =>{
        try {
            await new Promise((resolve)=>setTimeout(resolve,1000));
            // throw new Error(); 
            console.log(data);
        } catch (error) {
            setError("email",{
                message:"email already Exists"
            })
        }
        
    }
  return (
    <div>
              <h1 className='text-4xl mt-10  text-center mb-10'>S I G N - U P</h1>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-6 items-center'>
                
                <TextField
                  {...register("email",{
                    required:"email is Required",
                    pattern:{
                        value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:"email must be of  Proper Format "
                    }
                    }) 
                  }
                  error={!!errors.email}
                  id="outlined-error-helper-text"
                  label="Email"
                  type="email"
                  helperText={errors.email?.message}
                />

                <TextField 
                    {...register("password",{
                      required:"Password is Required",
                      minLength:{
                          value:8,
                          message:"password Sould Include Minimun 8 characters"
                      }
                    })}
                    error={!!errors.password}
                    id="outlined-error-helper-text"
                    label="Password"
                    type="password"
                    helperText={errors.password?.message}
                
                />



                <Button 
                variant='contained' color="success"
                disabled={isSubmitting} type="submit"> 
                {  isSubmitting ?
                <LoadingButton loading variant="outlined">
                Submit
              </LoadingButton>
                
                :"Submit"}
                </Button>
            </form>   
        
          
          
    </div>
  )
};