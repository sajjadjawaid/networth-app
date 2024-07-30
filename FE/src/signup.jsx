import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";

function Signup({ updateLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //    const userSignup = async () =>{

  //       console.log(userName);
  //       console.log(password);

  //       const{data} = await axios.post("http://localhost:3000/validation/validateAndCreate",{
  //          userName,password
  //       },{
  //          withCredentials: true
  //       })
  //       if(data.error){
  //          return alert(data.error.message);
  //       }
  //       return alert(data.response.message);

  //    }
  return (
    <>
      <div className="h-screen w-screen bg-gray-400 flex items-center justify-center">
        <div className="h-5/6 w-1/4 bg-white rounded-md">
          <div className="h-1/4">
            <p className="text-3xl font-semibold w-full h-full flex justify-center items-center">
              {"Signup Form"}
            </p>
          </div>
          <div className="h-2/4 flex flex-col justify-center p-2">
            <label className="text-lg font-semibold py-2 text-gray-600">
              PhoneNumber
            </label>
            <input
              className="bg-gray-200 border-2 p-2 outline-none border-gray-300 rounded-md"
              placeholder="phone number"
              required
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <label className="text-lg font-semibold py-2 text-gray-600">
              Username
            </label>
            <input
              className="bg-gray-200 border-2 p-2 outline-none border-gray-300 rounded-md"
              placeholder="username"
              required
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <label className="text-lg font-semibold py-2 text-gray-600">
              Password
            </label>
            <input
              className="bg-gray-200 border-2 p-2 border-gray-300 rounded-md outline-none"
              placeholder="password"
              required
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <label className='text-lg font-semibold py-2 text-gray-600'>
            {"Confirm Password"}

         </label>
         <input className='bg-gray-200 border-2 p-2 border-gray-300 rounded-md outline-none'
         placeholder='confirm password'
         required
         type='password'/> */}

            <p className="m-2">
              {"Already have an Account? "}
              <span
                className="hover:underline text-blue-600 cursor-pointer"
                onClick={() => {
                  updateLogin(true);
                }}
              >
                {"Login"}
              </span>
            </p>
          </div>
          <div className="h-1/4 w-full flex justify-center items-center p-2">
            <button
              disabled={!userName || !password}
              className="bg-blue-600 w-full text-white py-2 rounded-md text-xl font-semibold disabled:bg-gray-400"
              //   onClick={userSignup}
            >
              {"Signup"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Signup.propTypes = {
  updateLogin: PropTypes.func,
};
export default Signup;
