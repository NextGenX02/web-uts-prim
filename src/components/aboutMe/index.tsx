import Image from "next/image";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
    return (
        <>
            <div className={"flex w-lvw h-lvh relative"} id={"aboutMe"}>
                <video src={"/bg-boutme.mp4"} autoPlay={true} loop={true} className={"absolute object-cover w-full h-full"} style={{filter: 'blur(0.2rem)'}}></video>
                <div className={"absolute bg-gradient-to-b to-gray-950 w-full h-full"}></div>
                <div className={"w-10/12 mx-auto flex items-center gap-16 z-10 flex-row-reverse justify-center"}>
                    <div className={"w-6/12 mt-6 mr-auto"}>
                        <h1 className={"text-white text-4xl uppercase font-bold"} style={{lineHeight: "0.5rem"}}>
                            Who am i ?
                        </h1>
                        <span className={"inline-block bg-cyan-400 w-52 h-1"}></span>
                        <div className={"mb-32"}>
                            <p className={"text-white break-words mt-4"}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla cursus at nisi sit amet tempus. Maecenas mollis est sem, eu
                                vestibulum erat aliquam eget. Sed ut nisl mollis, scelerisque nibh id, fermentum leo.
                                Etiam eu pretium massa. Pellentesque facilisis, nisi in placerat lobortis, ante nunc
                                vestibulum nisl, at ornare sem enim sed eros. Integer ac risus placerat nunc porta
                                mattis a quis nunc. In malesuada lacinia nisi, sed accumsan dui dignissim non. </p>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-4 ml-auto"}>
                        <Image src="/ffd.jpg" alt={"ENDSCHENARIO"} width={350} height={350}
                               className={"rounded-full drop-shadow-xl border-solid border-gray-700 border-8"}></Image>
                        <div className={"flex gap-4 justify-center"}>
                            <a href={"https://discord.com/"}
                               className={"font-bold text-white bg-indigo-700 px-4 py-1.5 rounded-3xl hover:bg-white hover:text-indigo-700 transition-all"}><FontAwesomeIcon
                                icon={faDiscord}/> Discord</a>
                            <a href={"https://github.com/"}
                               className={"font-bold text-white bg-gray-800 px-4 py-1.5 rounded-3xl hover:bg-white hover:text-black transition-all"}><FontAwesomeIcon
                                icon={faGithub}/> Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}