import Image from "next/image";
import ProjectCard from "@/components/projectCard";
import {useState} from "react";

// For TEMPORARLY
const data_card = [{
    projectName: "Project 01",
    thumbnail: "/null_thumbnail.jpg",
    projectType: "media"
},{
    projectName: "Project 02",
    thumbnail: "/null_thumbnail.jpg",
    projectType: "media"
},{
    projectName: "Project 03",
    thumbnail: "/null_thumbnail.jpg",
    projectType: "media"
},{
    projectName: "Project 04",
    thumbnail: "/null_thumbnail.jpg",
    projectType: "media"
},{
    projectName: "Project 05",
    thumbnail: "/null_thumbnail.jpg",
    projectType: "media"
}]


export default function ProjectPage() {
    return (
        <div className={`flex w-lvw h-full bg-gray-950 items-center flex-col gap-10 justify-center`} id={"shikuproject"} style={{paddingTop: '10rem', paddingBottom: '10rem'}}>
            <div>
                <h1 className={"text-white uppercase font-bold text-center text-4xl"}>My Project</h1>
                <p className={"text-white font-light text-center break-words"}>Collection of my project that i already
                    make a couple year's back!</p>
            </div>
            <div className={"w-10/12 mx-auto bg-blue-950 drop-shadow-2xl p-4 rounded-md"}>
                <div className={"flex justify-center flex-wrap gap-4"}>
                    {data_card.map((c) => (
                        <ProjectCard projectName={c.projectName} projectThumbnail={c.thumbnail} projectType={c.projectType}/>
                    ))}
                </div>
            </div>
        </div>
    )
}