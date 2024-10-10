import React, { useEffect, useRef, useState } from 'react';
import '../../styles/musicplayer.css';
import {
    IoPlayCircleSharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoPauseCircleSharp,
} from 'react-icons/io5';
import VolumeSlider from './VolumeSlider';
import DurationSlider from './DurationSlider';
import useMusicPlaylist from '../../hooks/useMusicPlaylist';

function MusicPlayer() {
    const [state, setState] = useState('pause');
    const [track, setTrack] = useState(null);
    const [hasEnded, setHasEnded] = useState(false);
    const playerRef = useRef(null);

    const { nextTrack, prevTrack } = useMusicPlaylist(
        setTrack,
        playerRef.current
    );

    const handlePlay = () => {
        if (playerRef.current) {
            const audioElement = playerRef.current;
            if (state !== 'play') {
                audioElement.play();
                setState('play');
            } else {
                audioElement.pause();
                setState('pause');
            }
        }
    };

    const handleEnded = () => {
        setState('pause');
        setHasEnded(true);
    };

    useEffect(() => {
        const audioElement = playerRef.current;

        const playAudio = () => {
            if (state === 'play') audioElement.play();
        };

        audioElement.addEventListener('canplay', playAudio);

        return () => audioElement.removeEventListener('canplay', playAudio);
    }, [track, state]);

    return (
        <div className='w-full flex flex-col gap-2 rounded-xl bg-white/20 p-4 select-none'>
            <DurationSlider
                playerRef={playerRef.current}
                hasEnded={hasEnded}
                setHasEnded={setHasEnded}
            />
            <div className='flex justify-between items-center gap-2'>
                <div className='hidden w-32 sm:flex items-center gap-1'>
                    {track && track.name}{' '}
                    <div className='text-white/60'> | 06</div>
                </div>
                <div className='relative flex items-center gap-4 text-xl'>
                    <IoPlaySkipBackSharp
                        className='hover:cursor-pointer hover:text-[#0ce6f2]'
                        onClick={prevTrack}
                    />
                    <div
                        className='text-5xl hover:cursor-pointer hover:text-[#0ce6f2]'
                        onClick={handlePlay}
                    >
                        {state === 'pause' && <IoPlayCircleSharp />}
                        {state === 'play' && <IoPauseCircleSharp />}
                    </div>
                    <IoPlaySkipForwardSharp
                        className='hover:cursor-pointer hover:text-[#0ce6f2]'
                        onClick={nextTrack}
                    />
                </div>
                <VolumeSlider playerRef={playerRef.current} />
            </div>
            <audio
                ref={playerRef}
                src={track && track.src}
                preload='metadata'
                onEnded={handleEnded}
            />
        </div>
    );
}

export default MusicPlayer;
