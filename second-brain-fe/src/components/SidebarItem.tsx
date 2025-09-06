import { ReactElement } from "react";
import { ContentType } from "./AddContentModel";



export function SideBarItems({ text, icons, }: {
    text: String; icons: ReactElement;
}) {
    return <div className="flex py-1 text-gray-700 cursor-pointer hover:bg-gray-300 rounded max-w-10 pl-2">
        <div className="pr-2" >
            {icons}
        </div>
        <div>
            {text}
        </div>

    </div >
}
