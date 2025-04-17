type vidBGUrl = {
    bgvid: string;
}

export default function VidPlayerBG({bgvid}:vidBGUrl) {
    return(
        <>
            <video src={bgvid} className={"object-cover fixed -z-20 w-full h-full"} autoPlay={true}
                   loop={true}></video>
            <div className={"fixed bg-gradient-to-b to-gray-950 w-full h-full -z-10"}></div>
        </>
    )
}