import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { BACKEND_URL } from "../config";
import { ShareCard } from "../components/ShareCard";



export function Share() {

    const { hash } = useParams();
    const [dashboardData, setDashboardData] = useState([])
    useEffect(() => {
        const getResponse = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/brain/${hash}`, {
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                });
                setDashboardData(response.data.content)
                return dashboardData
            } catch (e) {
                console.log("Error Fetching the data")
            }
        }

        getResponse()

    }, [hash])

    return (<>
        <div className='flex-wrap flex gap-4 p-4'>

            {dashboardData.map(({ title, type, link }) => <ShareCard type={type} title={title} link={link} />)}
        </div>

    </>)
}