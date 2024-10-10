import React, { useState, useEffect } from 'react';

function DurationSlider({ playerRef, hasEnded, setHasEnded }) {
    const [duration, setDuration] = useState(0);
    const [maxDuration, setMaxDuration] = useState(0);

    useEffect(() => {
        if (playerRef) {
            const handleLoadedMetadata = () => {
                const newMaxDuration = Math.floor(playerRef.duration);
                setMaxDuration(newMaxDuration);
            };

            const handleTimeUpdate = () => {
                const newDuration = Math.floor(playerRef.currentTime);
                setDuration(newDuration);
            };

            playerRef.addEventListener('loadedmetadata', handleLoadedMetadata);
            playerRef.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                playerRef.removeEventListener(
                    'loadedmetadata',
                    handleLoadedMetadata
                );
                playerRef.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [playerRef]);

    const displayTime = (duration) => {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;

        return (
            (minutes > 9 ? minutes : '0' + minutes) +
            ':' +
            (seconds > 9 ? seconds : '0' + seconds)
        );
    };

    const handleDurationChange = (e) => {
        if (playerRef) {
            const newDuration = e.target.value;
            setDuration(newDuration);
            playerRef.currentTime = newDuration;
        }
    };

    const handleMouseDown = () => {
        if (playerRef) {
            playerRef.muted = true;
        }
    };

    useEffect(() => {
        const handleMouseUp = () => {
            if (playerRef) {
                playerRef.muted = false;
            }
        };

        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchend', handleMouseUp);

        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [playerRef]);

    useEffect(() => {
        if (hasEnded) {
            setDuration(0);
            setHasEnded(false);
        }
    }, [hasEnded, setHasEnded]);

    return (
        <div className='flex items-center gap-4'>
            <div className='font-mono'>{displayTime(duration)}</div>
            <input
                type='range'
                max={maxDuration}
                min={0}
                value={duration}
                onChange={handleDurationChange}
                onMouseDown={handleMouseDown}
                className='slider flex-grow outline-none select-none'
                style={{
                    '--fill-width': `${(100 / maxDuration) * duration}%`,
                }}
            />
            <div className='hidden sm:flex font-mono'>{displayTime(maxDuration)}</div>
        </div>
    );
}

export default DurationSlider;
