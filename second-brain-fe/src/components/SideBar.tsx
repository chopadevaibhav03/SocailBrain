import axios from "axios";
import { AcdLogo } from "../Icons/AcdLogo";
import { TwitterColor } from "../Icons/TwitterIcon";
import { YouTubeColor } from "../Icons/YoutubeIcon";
import { SideBarItems } from "./SidebarItem";
import { PinterestIcon } from "../Icons/Pinterest";
import { InstaIcon } from "../Icons/Instagram";
import { LinkIcon, LinkIconColor } from "../Icons/LinkIcon";
import { Stack } from "../Icons/Stack";
import { Spotify } from "../Icons/Spotify";
import { Link, Navigate } from "react-router-dom";
import { LogOut, LogOutIcon } from "lucide-react";

interface SideBarProps {
    onSelectType: (type: string | null) => void;
}


export function SideBar({ onSelectType }: SideBarProps) {

    return <div className="h-screen bg-white border-r w-50 fixed left-0 top-0 pl-6 ">
        <div className="flex text-2xl pt-4 items-center">
            <div className="pr-2"><AcdLogo /></div>Social Brain</div>
        <div onClick={() => onSelectType(null)}><SideBarItems icons={<Stack />} text={"AllPost"} /></div>
        <div onClick={() => onSelectType("twitter")} ><SideBarItems icons={<TwitterColor />} text={"Tweets"} /></div>
        <div onClick={() => onSelectType("youtube")}><SideBarItems icons={<YouTubeColor />} text={"YouTube"} /></div>
        <div onClick={() => onSelectType("pinterest")} ><SideBarItems icons={<PinterestIcon />} text={"Pinterest"} /></div>
        <div onClick={() => onSelectType("instagram")}><SideBarItems icons={<InstaIcon />} text={"Instagram"} /></div>
        <div onClick={() => onSelectType("spotify")}><SideBarItems icons={<Spotify />} text={"Spotify"} /></div>
        <div onClick={() => onSelectType("links")}><SideBarItems icons={<LinkIconColor />} text={"Links"} /></div>
        <Link to={'/'}>
            <div className="pt-60" onClick={() => { localStorage.removeItem("token") }}><SideBarItems icons={<LogOut />} text={"LogOut"} /></div>
        </Link>
    </div >
}
