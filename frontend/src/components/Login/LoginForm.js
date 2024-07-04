import React ,{useState} from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const LoginForm = () => {
const [credentials, setcredentials] = useState({email: "", password: "" })
let navigate = useNavigate();

const [showPassword, setShowPassword] = useState(false)


const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter Valid Credentials ")
        }
        if (json.success) {
            localStorage.setItem("userEmail", credentials.email);
            localStorage.setItem("authToken",json.userObject.token);
            localStorage.setItem("name",json.userObject.name);
            toast.success("User Successfully Logged in");
            navigate("/");
        }
    }


    const onchange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
  return (
    <div className="flex">
 <form onSubmit={handleSubmit} className="mt-9 flex w-full flex-col gap-y-4">
<label htmlFor='exampleInputEmail1' className="w-full">
<p className="mb-1 text-[1rem] leading-[1.375rem] font-medium ">
Email Address <sup className="text-red-500 text-sm">*</sup>
</p>
<input
required
type="text"
name="email"
value={credentials.email}
onChange={onchange}
placeholder="Enter Email Address"
style={{
boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
}}
className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border-2 border-blue-50 "
/>
</label>
<label className="relative">
<p className="mb-1 text-[1rem] leading-[1.375rem]  font-medium">
Password <sup className="text-red-500 text-sm">*</sup>
</p>
<input
required
type={showPassword ? "text" : "password"}
name="password"
value={credentials.password}
onChange={onchange}
placeholder="Enter Password"
style={{
boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
}}
className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 border-2 border-blue-50"
/>
<span
onClick={() => setShowPassword((prev) => !prev)}
className="absolute right-3 top-[38px] z-[10] cursor-pointer"
>
{showPassword ? (
<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
) : (
<AiOutlineEye fontSize={24} fill="#AFB2BF" />
)}
</span>

</label>
<button 
type="submit"
className="mt-6 text-[20px] font-semibold tracking-widest rounded-[8px] bg-black text-white py-[8px] px-[12px]  "
>
Lets Sign In & Enjoy !! 
</button>
 </form>

</div>
  )
}

export default LoginForm