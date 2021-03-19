import React from 'react';
import useSound from 'use-sound';
import GameCompletionSound from '../music/mixkit-game-level-completed-2059.wav'
import PositiveEffectSound from '../music/mixkit-video-game-health-recharge-2837.wav'
import NegativeEffectSound from '../music/mixkit-negative-guitar-tone-2324.wav'
import NeutralEffectSound from '../music/mixkit-bonus-extra-in-a-video-game-2064.wav'
import ConfrontBattleSound from '../music/mixkit-arcade-retro-jump-223.wav'
import HitWallSound from '../music/mixkit-small-hit-in-a-game-2072.wav'
import GameOverSound from '../music/mixkit-player-losing-or-failing-2042.wav'

export function useGameCompletionSound() {
    const [play, { stop }] = useSound(GameCompletionSound, {
        interrupt: true,
        volume: 0.75,
    });
    return { play, stop };
}

export function usePositiveEffectSound() {
    const [play, { stop }] = useSound(PositiveEffectSound, {
        interrupt: true,
        volume: 0.45,
    });
    return { play, stop };
}

export function useNegativeEffectSound() {
    const [play, { stop }] = useSound(NegativeEffectSound, {
        interrupt: true,
        volume: 0.65,
    });
    return { play, stop };
}

// Clears all effects, no matter positive or negative.
export function useNeutralEffectSound() {
    const [play, { stop }] = useSound(NeutralEffectSound, {
        interrupt: true,
        volume: 0.65,
    });
    return { play, stop };
}

export function useConfrontBattleSound() {
    const [play, { stop }] = useSound(ConfrontBattleSound, {
        interrupt: true,
        volume: 0.65,
    });
    return { play, stop };
}
export function useGameOverSound() {
    const [play, { stop }] = useSound(GameOverSound, {
        interrupt: true,
        volume: 0.65,
    });
    return { play, stop };
}

export function useHitWallSound() {
    const [play, { stop }] = useSound(HitWallSound, {
        interrupt: true,
        volume: 0.65,
    });
    return { play, stop };
}

const EffectSoundTestContainer = () => {
    const { play: playGameCompletionSound, stop: stopGameCompletionSound } = useGameCompletionSound();
    const { play: playPositiveEffectSound, stop: stopPositiveEffectSound } = usePositiveEffectSound();
    const { play: playNegativeEffectSound, stop: stopNegativeEffectSound } = useNegativeEffectSound();
    const { play: playNeutralEffectSound, stop: stopNeutralEffectSound } = useNeutralEffectSound();
    const { play: playConfrontBattleSound, stop: stopConfrontBattleSound } = useConfrontBattleSound();
    const { play: playGameOverSound, stop: stopGameOverSound } = useGameOverSound();
    const { play: playHitWallSound, stop: stopHitWallSound } = useHitWallSound();

    return (
        <div>
            <button onClick={() => playGameCompletionSound()}>Play Game Compeletion Sound</button>
            <button onClick={() => stopGameCompletionSound()}>Stop Game Compeletion Sound</button>
            <button onClick={() => playPositiveEffectSound()}>Play PositiveEffectSound</button>
            <button onClick={() => stopPositiveEffectSound()}>Stop PositiveEffectSound</button>
            <button onClick={() => playNegativeEffectSound()}>Play NegativeEffectSound</button>
            <button onClick={() => stopNegativeEffectSound()}>Stop NegativeEffectSound</button>
            <button onClick={() => playNeutralEffectSound()}>Play NeutralEffectSound</button>
            <button onClick={() => stopNeutralEffectSound()}>Stop NeutralEffectSound</button>
            <button onClick={() => playConfrontBattleSound()}>Play ConfrontBattleSound</button>
            <button onClick={() => stopConfrontBattleSound()}>Stop ConfrontBattleSound</button>
            <button onClick={() => playGameOverSound()}>Play GameOverSound</button>
            <button onClick={() => stopGameOverSound()}>Stop GameOverSound</button>
            <button onClick={() => playHitWallSound()}>Play HitWallSound</button>
            <button onClick={() => stopHitWallSound()}>Stop HitWallSound</button>
        </div>

    );
}


export default EffectSoundTestContainer;
