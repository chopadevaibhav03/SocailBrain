import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";


export function useContent() {

    const [contents, setContents] = useState([])
    async function getResponse() {
        await axios.get(`${BACKEND_URL}/api/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then((response) => {
                setContents(response.data.content)
            })
    }

    useEffect(() => {
        getResponse();

        let interval = setInterval(() => {
            getResponse();
        }, 1000)
        return () => clearInterval(interval);
    }, [])
    return contents;
}
