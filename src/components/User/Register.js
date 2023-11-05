import React, { Fragment,useRef,useState} from 'react'
import './Login.css';
import pic from '../../images/chatbot.gif'
import {CgProfile} from 'react-icons/cg'
import {CgRename} from 'react-icons/cg'
import {AiOutlineMail} from 'react-icons/ai'
import {PiPasswordLight} from 'react-icons/pi'
import { Link } from 'react-router-dom';


const Register = () => {

    const [user,setUser]=useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
      });

      const{fname,lname,email,password}=user;

    const registerTab = useRef(null);

    const registerSubmit = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
      
        myForm.set('fname', fname);
        myForm.set('lname', lname);
        myForm.set('email', email);
        myForm.set('password', password);
       console.log(myForm);
        try {
          const response = await fetch("https://backend-sih-project-5wz7dep6ya-uc.a.run.app/save", {
            method: 'POST', // Use the appropriate HTTP method (e.g., POST, PUT)
            body: myForm,
          });
      
          if (response.ok) {
            console.log("success");
            // Registration was successful
            // You can handle the success response here, such as redirecting the user or showing a success message
          } else {
            // Registration failed
            // Handle the error response here, such as showing an error message to the user
            console.error('Registration failed.');
          }
        } catch (error) {
          // Handle network or other errors
          console.error('Network error:', error);
        }
      };

      const registerDataChange = (e) =>{
          setUser({...user,[e.target.name]:e.target.value});
      };
  return (
    <Fragment>
    <div className='container'>
    <img src={pic} alt="pic"/>
        <form
          className='signUpForm'
          ref={registerTab}
          encType='multipart/form-data'
          onSubmit={registerSubmit}>
            <div className='details'>
               <CgProfile className='icons'/>
                <input
                    type='text'
                    placeholder='Name'
                    required
                    name='fname'
                    value={fname}
                    onChange={registerDataChange}
                />
            </div>
            <div className='details'>
                <CgRename className='icons'/>
                <input 
                    type='text'
                    placeholder='LastName'
                    required
                    name='lname'
                    value={lname}
                    onChange={registerDataChange}
                />
            </div>
            <div className='details'>
               <AiOutlineMail className='icons'/>
                <input
                    type='email'
                    placeholder='Email'
                    required
                    name='email'
                    value={email} 
                    onChange={registerDataChange}
                />
            </div>
            <div className='details'>
               <PiPasswordLight className='icons'/>
                <input 
                    type='password'
                    placeholder='Password'
                    required
                    name='password'
                    value={password}
                    onChange={registerDataChange}
                />
            </div>
            <div className='buttons'>
            <input
                type='submit'
                value='Register'/>
            <Link to='/login'>Login</Link>    
            </div>
        </form>
    <img src={pic} alt="pic" className='pic2'/>
    </div>
    </Fragment>
  )
}

export default Register