import { useEffect, useState, useMemo } from 'react';

function useMusicPlaylist(setTrack) {
    const [currentTrack, setCurrentTrack] = useState(0);
    const path = 'https://joepytlik.de/data/music/';
    const tracks = useMemo(
        () => [
            'subdued_air',
            'liquid_v4',
            'after_laughter',
            'acid_joe',
            'excellence',
            'may_2017',
        ],
        []
    );

    const nextTrack = () => {
        if (currentTrack === tracks.length - 1) return;
        setCurrentTrack((prev) =>
            currentTrack < tracks.length - 1 ? prev + 1 : prev
        );
    };

    const prevTrack = () => {
        if (currentTrack === 0) return;
        setCurrentTrack((prev) => (currentTrack > 0 ? prev - 1 : prev));
    };

    useEffect(() => {
        setTrack({
            name: 'Demo #0' + (currentTrack + 1),
            src: path + tracks[currentTrack] + '.mp3',
        });
    }, [currentTrack, setTrack, tracks]);

    return { nextTrack, prevTrack };
}

export default useMusicPlaylist;
