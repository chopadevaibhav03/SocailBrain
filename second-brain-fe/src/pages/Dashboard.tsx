// import { useState } from "react";
// import Masonry from "react-masonry-css";
// import { SideBar } from "../components/SideBar";
// import { CreateContentModel } from "../components/AddContentModel";
// import { Button } from "../components/Buttons";
// import { AddIcons, ShareIcon } from "../Icons/PlusIcon";
// import { Card } from "../components/Card";
// import { useContent } from "../hooks/useContent";
// import axios from "axios";
// import { BACKEND_URL } from "../config";
// import { DeleteIcon } from "../Icons/Deleteicon";
// import { SearchBar } from "../components/SearchBar";

// export function Dashboard() {
//     const [openModel, setOpenModel] = useState(false);
//     const [selectedType, setSelectedType] = useState(null);
//     const content = useContent();

//     async function onShare() {
//         const response = await axios.post(`${BACKEND_URL}/api/brain/share`, { share: true }, {
//             headers: { "Authorization": localStorage.getItem("token") }
//         });
//         const sharehash = response.data.hash;
//         await navigator.clipboard.writeText(`${window.location.origin}/api/brain/${sharehash}`);
//     }

//     async function onDelete() {
//         await axios.delete(`${BACKEND_URL}/api/content/deleteall`, {
//             headers: { "Authorization": localStorage.getItem("token") }
//         });
//     }


//     const breakpointColumnsObj = {
//         default: 4,
//         1100: 3,
//         768: 2,
//         500: 1
//     };

//     const filteredContent = content.filter(({ type }) => !selectedType || type === selectedType);

//     return (
//         <div>
//             <SideBar onSelectType={setSelectedType} />

//             <div className="p-4 ml-50 min-h-screen bg-gray-200 transition-opacity duration-300">
//                 <CreateContentModel open={openModel} onClose={() => setOpenModel(false)} />

//                 <div className="flex justify-between">
//                     <div className="text-2xl font-bold">Social Board</div>
//                     <div className="flex gap-4">
//                         <SearchBar />
//                         <Button variant="secondary" onClick={() => setOpenModel(true)} startIcon={<AddIcons size="lg" />} size="md" text="Add Content" />
//                         <Button variant="secondary" startIcon={<DeleteIcon size="lg" />} onClick={onDelete} size="md" text="Delete All" />
//                         <Button variant="primary" startIcon={<ShareIcon size="md" />} onClick={onShare} size="md" text="Share Brain" />
//                     </div>
//                 </div>

//                 <div className="pt-2">

//                     <Masonry
//                         breakpointCols={breakpointColumnsObj}
//                         className="flex w-full gap-2"
//                         columnClassName="masonry-column"
//                     >
//                         {filteredContent.length > 0 ? (
//                             filteredContent.map(({ title, type, link, _id }) => (
//                                 <Card key={_id} type={type} title={title} link={link} contentId={_id} />
//                             ))
//                         ) : (
//                             <div className="text-gray-500 text-lg w-full text-center mt-4">No posts available</div>
//                         )}
//                     </Masonry>
//                 </div>
//             </div>
//         </div>
//     );
// }


import { useState } from "react";
import Masonry from "react-masonry-css";
import { SideBar } from "../components/SideBar";
import { CreateContentModel } from "../components/AddContentModel";
import { Button } from "../components/Buttons";
import { AddIcons, ShareIcon } from "../Icons/PlusIcon";
import { Card } from "../components/Card";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { DeleteIcon } from "../Icons/Deleteicon";
import { SearchBar } from "../components/SearchBar";

export function Dashboard() {
    const [openModel, setOpenModel] = useState(false);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const content = useContent();

    // ✅ Adjusted to match backend API
    async function onShare() {
        const userId = localStorage.getItem("userId"); // store userId at login
        if (!userId) {
            alert("No userId found. Please login again.");
            return;
        }
        const response = await axios.post(`${BACKEND_URL}/api/share/create/${userId}`, [/* contentIds here */]);
        const sharehash = response.data.hash;
        await navigator.clipboard.writeText(`${window.location.origin}/api/share/${sharehash}`);
        alert("Share link copied!");
    }

    async function onDelete(contentId: number) {
        await axios.delete(`${BACKEND_URL}/api/content/delete/${contentId}`);
        alert("Content deleted!");
    }

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        768: 2,
        500: 1
    };

    const filteredContent = content.filter(({ type }) => !selectedType || type === selectedType);

    return (
        <div>
            <SideBar onSelectType={setSelectedType} />

            <div className="p-4 ml-50 min-h-screen bg-gray-200 transition-opacity duration-300">
                <CreateContentModel open={openModel} onClose={() => setOpenModel(false)} />

                <div className="flex justify-between">
                    <div className="text-2xl font-bold">Social Board</div>
                    <div className="flex gap-4">
                        <SearchBar />
                        <Button variant="secondary" onClick={() => setOpenModel(true)} startIcon={<AddIcons size="lg" />} size="md" text="Add Content" />
                        {/* Example delete all can be handled via mapping through all content IDs */}
                        <Button variant="secondary" startIcon={<DeleteIcon size="lg" />} onClick={() => onDelete(1)} size="md" text="Delete Example" />
                        <Button variant="primary" startIcon={<ShareIcon size="md" />} onClick={onShare} size="md" text="Share Brain" />
                    </div>
                </div>

                <div className="pt-2">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="flex w-full gap-2"
                        columnClassName="masonry-column"
                    >
                        {filteredContent.length > 0 ? (
                            filteredContent.map(({ title, type, link, id }) => (
                                <Card key={id} type={type} title={title} link={link} contentId={id} />
                            ))
                        ) : (
                            <div className="text-gray-500 text-lg w-full text-center mt-4">No posts available</div>
                        )}
                    </Masonry>
                </div>
            </div>
        </div>
    );
}
