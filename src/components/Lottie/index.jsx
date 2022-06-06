import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import develop from '~/assets/json_animation/develop';
import favourite from '~/assets/json_animation/favourite';
import profile from '~/assets/json_animation/profile';
import target from '~/assets/json_animation/target';

const config = {
    renderer: 'svg',
    autoplay: false,
    loop: true,
    isClickToPauseDisabled: false,
};

const configLoop = {
    renderer: 'svg',
    autoplay: true,
    loop: true,
};

function IntroLottie() {
    const anime = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            ...configLoop,
            container: anime.current,
            animationData: develop,
            name: "develop"
        });

        return () => lottie.stop();
    }, []);

    return <div ref={anime}></div>;
}

function FavouriteLottie() {
    const anime = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            ...config,
            container: anime.current,
            animationData: favourite,
            name: 'favourite',
        });

        return () => lottie.stop();
    }, []);

    return <div ref={anime}></div>;
}
function TargetLottie() {
    const anime = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            ...config,
            container: anime.current,
            animationData: target,
            name: 'target',
        });

        return () => lottie.stop();
    }, []);

    return <div ref={anime}></div>;
}
function ProfileLottie() {
    const anime = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            ...config,
            container: anime.current,
            animationData: profile,
            name: 'profile',
        });

        return () => lottie.stop();
    }, []);

    return <div ref={anime}></div>;
}

export { IntroLottie, FavouriteLottie, TargetLottie, ProfileLottie };
