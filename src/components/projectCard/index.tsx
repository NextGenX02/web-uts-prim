import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookBookmark} from "@fortawesome/free-solid-svg-icons";
import {faMusic} from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
export default function ProjectCard({projectName, projectThumbnail, projectType}) {
    if (projectType.toString().toLowerCase() === "app") {
        return (
            <div className={"relative"}>
                <div className={"absolute w-full h-full"}></div>
                <div className={"bg-blue-900 p-2 rounded-md flex flex-col justify-center items-center gap-3"}>
                    <Image className={"rounded-md drop-shadow-xl"} src={projectThumbnail} alt={"Project Thumbnail"}
                           width={250}
                           height={150}></Image>
                    <div className={"w-56"}>
                        <h1 className={"text-white font-bold text-center"}>{projectName}</h1>
                        <p className={"text-white font-light text-center break-words"}>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Integer non gravida orci.</p>
                    </div>
                    <a href={"#"}
                       className={"text-white px-3 text-center py-2 rounded-md font-bold bg-blue-800 w-52 drop-shadow-xl"}><FontAwesomeIcon
                        icon={faBookBookmark}/> Open the Project</a>
                </div>
            </div>
        )
    } else if (projectType.toString().toLowerCase() === "media") {
        return (
            <div className={"relative"}>
                <div className={"absolute w-full h-full"}></div>
                <div className={"bg-blue-900 p-2 rounded-md flex flex-col items-center justify-center gap-3 z-10"}>
                    <Image className={"rounded-md drop-shadow-xl"} src={projectThumbnail} alt={"Project Thumbnail"}
                           width={250}
                           height={150}></Image>
                    <div className={"w-56"}>
                        <h1 className={"text-white font-bold text-center"}>{projectName}</h1>
                        <p className={"text-white font-light text-center break-words"}>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Integer non gravida orci.</p>
                    </div>
                    <a href={"#"}
                       className={"text-white px-3 text-center py-2 rounded-md font-bold bg-blue-800 w-52 drop-shadow-xl"}><FontAwesomeIcon
                        icon={faMusic}/> Play</a>
                </div>
            </div>
        )
    }

}