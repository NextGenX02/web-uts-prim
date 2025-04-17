import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";

export default function ExperiencePage() {
    return(
        <div className={"flex h-lvh w-lvw bg-gray-950 justify-center"}>
            <div className={"w-10/12 flex justify-center items-center gap-10"}>
                <div className={"w-4/12"}>
                    <p className={"text-white font-bold text-5xl"} style={{lineHeight: '6rem'}}>My Experience</p>
                    <p className={"text-white mb-5"}>I was doing everything in my power to provide me with all the
                        experiences to provide cost-effective and high quality products to satisfy my customers all over
                        the world</p>
                    <a href={"#"}
                       className={"font-bold px-3 py-3 bg-indigo-600 rounded-md drop-shadow text-white transition-all hover:bg-white hover:text-indigo-700"}><FontAwesomeIcon
                        icon={faArrowUp}/> Back to the Top</a>
                </div>
                <span className={"bg-indigo-600 inline-block w-1.5 h-4/12 rounded-md mt-auto mb-auto"}></span>
                <div className={""}>
                    <p className={"text-white font-bold text-2xl"}><FontAwesomeIcon icon={faAnglesRight}/> Javascript
                    </p>
                    <p className={"text-white font-bold text-2xl"}><FontAwesomeIcon icon={faAnglesRight}/> Go
                    </p>
                    <p className={"text-white font-bold text-2xl"}><FontAwesomeIcon icon={faAnglesRight}/> C#
                    </p>
                    <p className={"text-white font-bold text-2xl"}><FontAwesomeIcon icon={faAnglesRight}/> C++
                    </p>
                    <p className={"text-white font-bold text-2xl"}><FontAwesomeIcon icon={faAnglesRight}/> Python
                    </p>
                </div>
            </div>
        </div>
    )
}