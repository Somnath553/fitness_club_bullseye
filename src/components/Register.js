import React,{useState} from 'react'

import {useNavigate } from 'react-router-dom'
function Register({members,setmembers}) {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [phone,setphone]=useState("")
    const [address,setaddress]=useState("")
    const navigateTo=useNavigate()
    const handleSubmit=(e)=>{
        alert("user added succesfully")
        e.preventDefault();
        setmembers(members=>[...members,{
            name:name,
            email:email,
            phone:phone,
            address:address
        }])
    }
  return (
    <div className='container'>
        <h1 className="title">Fitness Club Registration</h1>
      <form onSubmit={(e)=>{handleSubmit(e)}} className="form" >
        <input type="text" name="name" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="NAME"/>
        <input type="email" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="EMAIL"/>
        <input type="text" name="Phone Number" value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder="PHONE NUMBER"/>
        <input type="text" name="Address" value={address} onChange={(e)=>{setaddress(e.target.value)}} placeholder="ADDRESS"/>
        <input type="submit" value="Add Member +" className='btn' />
      </form>
      <button className="btn btn2" onClick={()=>{navigateTo('/member')}}>VIEW MEMBER LIST</button>
      </div>
   
  )
}

export default Register
