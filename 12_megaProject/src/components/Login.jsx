import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import authService from '../appwrite/auth'
import {Button, Input, Logo} from './index'
import {login as authLogin} from '../store/authSlice'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'



const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const {register, handleSubmit} = useForm()

    const login = async (data) => {
        // dont forget to reset the error while login or register the user. if not, then the error will be there even after the user is logged in or registered
        setError('')
        try {
            // login maa data send garne, response maa session aauxa. session true xa bhane user logged in xa. if session is false, then user is not logged in
            const session = await authService.login(data)
            // if session is true, then get the user data and dispatch it to the store and navigate to the home page
            if (session) {      
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px]">
                            <Logo width="100%" />
                        </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            
            {/* form part */}
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                    <Input 
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    {...register('email', {
                        required: true, 
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                     />

                    <Input 
                    type="password"
                    placeholder="Enter your password"
                    label="Password"
                    {...register('password', {
                        required: true, 
                        })
                    }
                     />
                    <Button type="submit"  className='w-full'>Sign in</Button>
                </div>
            </form>


        </div>
    </div>
  )
}

export default Login