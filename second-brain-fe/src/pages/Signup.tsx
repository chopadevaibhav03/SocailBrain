import { useRef } from "react";
import { Button } from "../components/Buttons";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Link, useNavigate } from "react-router-dom";
import { LinkIcon } from "../Icons/LinkIcon";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()
    const navigate = useNavigate();
    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(BACKEND_URL + "/api/signup", {
            username,
            password
        })
        navigate('/signin')
        alert("You are signed up")
    }

    return <div className="h-screen w-screen bg-gray-400 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 p-10 rounded-2xl">

            <Input typeField="text" refInput={usernameRef} placeholder="Username" />
            <Input typeField="password" refInput={passwordRef} placeholder="Password" EndIcon={<LinkIcon size={"sm"} />} />


            <div className="flex justify-center rounded">
                <Button fullWidth={true} size="md" variant="primary" text="SignUp" onClick={signup} />
            </div>
            <div className="">
                <div className="flex justify-center">
                    Already have an account?
                </div>
                <div className="flex justify-center">
                    <Link to="/Signin">
                        <Button variant="primary" size={"md"} text={"SignIn"}></Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}