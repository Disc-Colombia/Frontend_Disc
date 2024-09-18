import { useRef } from 'react';
import videomaternapp from '../video/videomaternapp.mp4';
const VideoPlayer = () => {
  // Referencia al elemento video
  const videoRef = useRef<HTMLVideoElement | null>(null);


  return (
        <div>
            <video
                ref={videoRef}
                width="600"
                controls
                autoPlay
                muted
                loop
            >
                <source src={videomaternapp} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );

};

export default VideoPlayer;
