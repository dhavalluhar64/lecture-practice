import React, { useContext } from 'react'
import { ContextAPI } from '../store/ContextAPI'

function LoginPage() {

  const {user} = useContext(ContextAPI)

   if(!user){

      return <h1 className='text-center'>Please Login</h1>

   }else{

      return <h3 className='text-center'>Welcome {user.userName}</h3>
   }

  
}

export default LoginPage
