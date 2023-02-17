import React, {useState} from 'react'


const Form = () => {

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword: "",
    })

    const changeHandler = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user[e.target.name])
    }


  return (
    <div className="container">
        <div className='row bg-secondary p-4 rounded mt-3'>
            <h2 className='text-white'>Please enter your information below</h2>
            <form action="">

                {
                    user.firstName && user.firstName.length < 2 ? <p className='text-danger mt-3'>First Name must be atleast 2 characters long.</p>: ""
                }
                <div className='form-floating mt-3'>
                    <input type="text" name="firstName" className="form-control" id="floatingInput" placeholder="First Name" onChange={changeHandler}/>
                    <label htmlFor="floatingInput">First Name:</label>
                </div>

                {
                    user.lastName && user.lastName.length < 2 ? <p className='text-danger mt-3'>Last Name must be atleast 2 characters long.</p>: ""
                }

                <div className='form-floating mt-3'>
                    <input type="text" name="lastName" className="form-control" id="floatingInput" placeholder="Last Name"  onChange={changeHandler}/>
                    <label htmlFor="floatingInput">Last Name:</label>
                </div>

                {
                    user.email && user.email.length < 5 ? <p className='text-danger mt-3 '>Email must be atleast 5 characters long.</p>: ""
                }

                <div className='form-floating mt-3'>
                    <input type="email" name="email" className="form-control" id="floatingInput" placeholder="Email"  onChange={changeHandler}/>
                    <label htmlFor="floatingInput">Email:</label>
                </div>

                {
                    user.password && user.password.length < 8 ? <p className='text-danger mt-3'>Password must be atleast 8 characters long.</p>: ""
                }
                
                <div className='form-floating mt-3'>
                    <input type="password" name="password" className="form-control" id="floatingInput" placeholder="Password"  onChange={changeHandler}/>
                    <label htmlFor="floatingInput">Password:</label>
                </div>

                {
                    user.confirmPassword != user.password ? <p className='text-danger mt-3'>Password must match.</p>: ""
                }

                <div className='form-floating mt-3'>
                    <input type="password" name="confirmPassword" className="form-control" id="floatingInput" placeholder="Confirm Password"  onChange={changeHandler}/>
                    <label htmlFor="floatingInput">Confirm Password:</label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form