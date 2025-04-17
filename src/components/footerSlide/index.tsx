

export default function FooterLanxei() {
    return(
        <div className={"flex w-lvw bg-black p-10 items-center justify-center relative"}>
            <div className={"absolute h-36 w-full"}>
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"
                     preserveAspectRatio="none" overflow="auto" shape-rendering="auto" fill="#ffffff">
                    <defs>
                        <path id="wavepath"
                              d="M 0 2000 0 500 Q 130.5 369 261 500 t 261 0 261 0 261 0 261 0 261 0  v1000 z"/>
                        <path id="motionpath" d="M -522 0 0 0"/>
                    </defs>
                    <g>
                        <use xlinkHref={"#wavepath"} y="-400" fill="#2d3748">
                            <animateMotion
                                dur="5s"
                                repeatCount="indefinite">
                                <mpath xlinkHref={"#motionpath"}/>
                            </animateMotion>
                        </use>
                    </g>
                </svg>
            </div>
            <div className={"z-10"}>
                <p className={"text-white text-center font-light"}>Develop with ❤️ by NextGenX</p>
                <p className={"text-white text-center font-light"}>VIDBG by (Aduare & VISUALDON)</p>
            </div>
        </div>
    )
}