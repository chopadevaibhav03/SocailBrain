import axios from "axios";
import { Button } from "../components/Buttons";
import { Input } from "../components/Input";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { LinkIcon } from "../Icons/LinkIcon";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        try {
                const response = await axios.post(BACKEND_URL + "/api/auth/signin", {
                username,
                password
            });

            // ✅ Store login info in localStorage
            localStorage.setItem("username", username || "");
            localStorage.setItem("token", response.data.token || "dummy-token"); 
            // if backend doesn’t send token, we keep a placeholder

            console.log("Signin response:", response.data);

            alert("✅ Login successful!");
            navigate('/dashboard'); // redirect to dashboard

        } catch (error: any) {
            alert("❌ Login failed: " + (error.response?.data || error.message));
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-400 flex justify-center items-center">
            <div className="bg-white rounded border min-w-48 p-10 rounded-2xl">
                <Input typeField="text" refInput={usernameRef} placeholder="Username" />
                <Input typeField="password" refInput={passwordRef} placeholder="Password" EndIcon={<LinkIcon size={"sm"} />} />

                <div className="flex justify-center rounded mt-4">
                    <Button onClick={signin} fullWidth={true} size="md" variant="primary" text="Sign In" />
                </div>
            </div>
        </div>
    );
}
