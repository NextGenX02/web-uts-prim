
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faBookBookmark} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const scrollHandler = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", scrollHandler)

        return () => window.removeEventListener("scroll", scrollHandler)
    })
    return(
        <div className={`flex justify-center w-full fixed text-white z-30 transition-all ${scrolled ? 'bg-gray-800 drop-shadow-xl': 'bg-transparent'}`}>
            <div className={"flex w-10/12 justify-between"}>
                <div className={"p-4"}>
                    <h1 className={"font-bold text-3xl text-shadow-xs uppercase drop-shadow-xl"}>NTX</h1>
                </div>
                <div className={"flex items-center uppercase"}>
                    <div className={"p-4"}>
                        <a href={"#aboutMe"} className={"font-bold text-sm drop-shadow-xl hover:text-indigo-600"}><FontAwesomeIcon icon={faUser} /> About me</a>
                    </div>
                    <div className={"p-4"}>
                        <a href={"#shikuproject"} className={"font-bold text-sm drop-shadow-xl hover:text-indigo-600"}><FontAwesomeIcon icon={faBookBookmark}/> Project</a>
                    </div>
                </div>
            </div>
        </div>
    )
}