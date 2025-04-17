import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";

export default function MainHome() {
    return (
        <div className={"flex w-full h-lvh"} id={"#"}>
            <div className={"flex text-white items-center w-10/12 mx-auto"}>
                <div>
                    <p className={"uppercase text-lg"}>Hello There!, Welcome to</p>
                    <h1 className={"text-5xl font-bold uppercase drop-shadow-xl"}>NatsuX Landing Portal</h1>
                    <p className={"mb-8"}>Just ordinary man,try to learn everything!</p>
                    <a href={"#aboutMe"}
                       className={"font-bold px-3 py-3 bg-indigo-600 rounded-md drop-shadow transition-all hover:bg-white hover:text-indigo-700"}><FontAwesomeIcon
                        icon={faRightFromBracket}/> Go to About me</a>
                </div>
            </div>
        </div>
    )
}