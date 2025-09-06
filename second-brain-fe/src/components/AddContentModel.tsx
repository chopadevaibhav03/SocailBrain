
import { useRef, useState } from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Buttons";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

export enum ContentType {
    YouTube = "youtube",
    Twitter = "twitter",
    Pinterest = "pinterest",
    Instagram = "instagram",
    Link = "links",
    Spotify = "spotify"
}

export function CreateContentModel({ open, onClose }) {
    const titleRef = useRef<HTMLInputElement>()
    const linkRef = useRef<HTMLInputElement>()
    const [type, setType] = useState(ContentType.YouTube)

    async function addContent() {

        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/content`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        onClose()
    }

    return <div>
        {open && <div className="h-screen w-screen opacity-100 top-0 left-0 fixed  flex justify-center">
            <div className="justify-center flex flex-col" >
                <span className="bg-white border-2  backdrop-opacity-100  p-4 rounded">
                    <div className="flex justify-end" >
                        <div className="cursor-pointer" onClick={onClose}>
                            <CrossIcon />
                        </div>

                    </div>
                    <div className="flex justify-between">
                        <Input refInput={titleRef} placeholder={"Title"} />
                        <Input refInput={linkRef} placeholder={"Link"} />
                    </div>
                    <div className="flex gap-2 p-4">
                        <Button text="YouTube" size="md" variant={type == ContentType.YouTube ? 'primary' : 'secondary'} onClick={() => {
                            setType(ContentType.YouTube)
                        }} />
                        <Button text="Twitter" size="md" variant={type == ContentType.Twitter ? 'primary' : 'secondary'} onClick={() => {
                            setType(ContentType.Twitter)
                        }} />
                        <Button text="Pinterest" size="md" variant={type == ContentType.Pinterest ? 'primary' : 'secondary'} onClick={() => {
                            setType(ContentType.Pinterest)
                        }}></Button>
                        <Button text="Instagram" size="md" variant={type == ContentType.Instagram ? 'primary' : 'secondary'} onClick={() => {
                            setType(ContentType.Instagram)
                        }}></Button>
                        <Button text="Link" size="md" variant={type == ContentType.Link ? 'primary' : 'secondary'} onClick={() => {
                            setType(ContentType.Link)
                        }}></Button>
                        <Button text="Spotify" size="md" variant={type == ContentType.Spotify ? 'primary' : 'secondary'} onClick={() => {
                            setType(ContentType.Spotify)

                        }}></Button>
                    </div>
                    <div className="flex justify-center" onClick={onClose}>
                        <Button size="md" variant="primary" onClick={addContent} text="Submit"></Button>
                    </div>
                </span>
            </div>
        </div>}

    </div>
}

