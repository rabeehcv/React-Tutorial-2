import React, {useState} from 'react';
import "./Signup.css"
const Signup = () => {
    const [pass,setPass]=useState(false);
    const [Data,setData]=useState({
        userName: "",
        email: "",
        pwd: ""
    })
    function showPassword(){
        setPass(!pass)
    }
    const handleSubmit = () => {
        alert(" UserName: " + Data.userName+ "\n Email: "+ Data.email+"\n Password: "+Data.pwd);
    }
    function handleChange(e){
        setData({...Data,[e.target.name] : e.target.value});
    }
    return(
        <div className="signup">
            <div className="box">
                <h1 className="signuphead">Signup</h1>
                <div className="formInputs">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="userName" placeholder="UserName" value={Data.userName} onChange={handleChange}/> <br></br>
                        <input type="text" name="email" placeholder="Email" value={Data.email} onChange={handleChange}/> <br></br>
                        <input type={pass? "text" : "password"} name="pwd" placeholder="Password" value={Data.pwd} onChange={handleChange}/>
                        <label>
                            <input type="checkbox" checked={pass} onChange={showPassword}/>
                            showPassword
                        </label>
                        <div className="buttons">
                            <button className="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;