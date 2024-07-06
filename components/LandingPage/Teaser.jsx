import React, { useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';
import classNames from 'classnames';


export default function Teaser() {
    const { width } = useWindowSize();
    const videoRef = useRef(null);

    const teaserClass = classNames('teaser', {
        'teaser--small': width < 768,
        'teaser--medium': width >= 768 && width < 1024,
        'teaser--large': width >= 1024,
    });

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleMouseEnter = () => {
            console.log('Mouse entered, unmuting video');
            videoElement.muted = false;
        };

        const handleMouseLeave = () => {
            console.log('Mouse left, muting video');
            videoElement.muted = true;
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    console.log('Video is in view, unmuting');
                    videoElement.muted = false;
                    videoElement.play(); // Ensure video plays when in view
                } else {
                    console.log('Video is out of view, muting');
                    videoElement.muted = true;
                    videoElement.pause(); // Pause video when out of view
                }
            },
            {
                threshold: 0.5, // Adjust as necessary to determine how much of the video should be in view
            }
        );

        observer.observe(videoElement);

        videoElement.addEventListener('mouseenter', handleMouseEnter);
        videoElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            observer.disconnect();
            videoElement.removeEventListener('mouseenter', handleMouseEnter);
            videoElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className={teaserClass}>
            <video 
                ref={videoRef} 
                className="teaser-video" 
                autoPlay 
                muted 
                loop
                playsInline
                onCanPlay={() => console.log('Video can play')}
                onError={(e) => console.error('Video error:', e)}
            >
                <source src="/teaser.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="teaser-content">Teaser</div>
        </div>
    );
}
