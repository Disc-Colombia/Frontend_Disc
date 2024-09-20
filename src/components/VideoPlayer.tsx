import { useRef } from 'react';
import videomaternapp from '../video/module_two_ditado.mp4';
import '../styles/videoPlayer.css';
const VideoPlayer = () => {

    const videoRef = useRef<HTMLVideoElement | null>(null);

    return (
        <div className='container_videoplayer'>
            <video
                ref={videoRef}

                controls
                autoPlay
                muted
                loop
                className='videoproperties'
            >
                <source src={videomaternapp as string} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );

};

export default VideoPlayer;
