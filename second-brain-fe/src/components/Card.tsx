import { DeleteIcon } from "../Icons/Deleteicon";
import { DocumentIcon } from "../Icons/DocumentIcon";
import { ShareIcon } from "../Icons/PlusIcon";
import { InstagramEmbed, PinterestEmbed, XEmbed, YouTubeEmbed } from "react-social-media-embed";
import { LinkIcon } from "../Icons/LinkIcon";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface CardProps {
    contentId: string;
    title: string;
    link: string;
    type: "twitter" | "youtube" | "instagram" | "facebook" | "pinterest" | "spotify" | "links";
}

export function Card({ title, link, type, contentId }: CardProps) {

    async function onDelete(id: string) {
        await axios.delete(`${BACKEND_URL}/api/content/delete${id}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });
    }

    return (
        <div className="bg-white shadow-md border border-gray-200 rounded-md p-4  w-full tbreak-inside-avoid mb-2">

            <div className="flex justify-between items-center">
                <div className="flex items-center text-md font-bold">
                    <div className="pr-2">
                        <DocumentIcon size="md" />
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <ShareIcon size="md" className="pr-2 text-gray-500 cursor-pointer" />
                    <div onClick={() => onDelete(contentId)} className="text-gray-500 cursor-pointer">
                        <DeleteIcon size="md" />
                    </div>
                </div>
            </div>

            <div className="pt-2">
                {type === "youtube" && <YouTubeEmbed url={link} width="100%" height={250} />}
                {type === "twitter" && <XEmbed url={link} width="100%" height={250} />}
                {type === "pinterest" && <PinterestEmbed url={link} width="100%" height={250} />}
                {type === "instagram" && <InstagramEmbed url={link} width="100%" height={400} />}
                {type === "spotify" && <iframe src={link.replace('spotify.com/', 'spotify.com/embed/').split('?')[0]} width="100%" height={380}></iframe>}
                {type === "links" && (
                    <a
                        className="inline-grid justify-center pt-5 w-full h-auto text-center leading-[3rem] bg-gray-300 hover:bg-gray-400 rounded-lg"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {title}
                        <LinkIcon size="md" />
                    </a>
                )}
            </div>
        </div>
    );
}
