import React, { useEffect, useState, useRef } from 'react';
import { IoVolumeHighSharp, IoVolumeMuteSharp } from 'react-icons/io5';

function VolumeSlider({ playerRef }) {
    const [volume, setVolume] = useState(50);
    const [muted, setMuted] = useState(false);
    const cachedVolume = useRef(0);

    useEffect(() => {
        const loadedVolume = localStorage.getItem('volume') || 50;
        setVolume(loadedVolume);
        cachedVolume.current = loadedVolume;
    }, []);

    useEffect(() => {
        if (playerRef) {
            playerRef.volume = volume / 100;
        }
    }, [volume, playerRef]);

    const handleMute = () => {
        const isMuted = !muted;
        if (isMuted) {
            cachedVolume.current = volume;
            setVolume(0);
        } else {
            setVolume(cachedVolume.current);
        }
        setMuted(isMuted);
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        localStorage.setItem('volume', newVolume);
        if (newVolume > 0) {
            setMuted(false);
        } else {
            setMuted(true);
        }
    };

    return (
        <div className='flex items-center gap-4'>
            {!muted && (
                <IoVolumeHighSharp
                    className='text-2xl cursor-pointer hover:text-[#0ce6f2]'
                    onClick={handleMute}
                />
            )}
            {muted && (
                <IoVolumeMuteSharp
                    className='text-2xl cursor-pointer opacity-60 hover:text-[#0ce6f2]'
                    onClick={handleMute}
                />
            )}
            <input
                type='range'
                max={100}
                min={0}
                value={volume}
                onChange={handleVolumeChange}
                className='slider w-24 hidden sm:flex'
                style={{
                    '--fill-width': `${volume}%`,
                }}
            />
        </div>
    );
}

export default VolumeSlider;
