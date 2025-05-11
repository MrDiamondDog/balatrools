/* eslint-disable max-len */

export interface SettingsFileData {
    version: string;
    reduced_motion: boolean;
    paused: boolean;
    QUEUED_CHANGE: any;
    COMP: {
        prev_name: string;
        name: string;
        score: number;
    };
    colourblind_option: boolean;
    play_button_pos: number;
    CUSTOM_DECK: {
        collabs: {
            spades: string;
            hearts: string;
            diamonds: string;
            clubs: string;
        };
    };
    crashreports: boolean;
    tutorial_progress: {
        section: string;
        hold_parts: TutorialPart;
        completed_parts: TutorialPart;
    };
    language: string;
    tutorial_complete: boolean;
    WINDOW: {
        vsync: number;
        display_names: string[];
        screenmode: string;
        DISPLAYS: {
            screen_resolutions: {
                strings: string[];
                values: {
                    w: number;
                    h: number;
                }[];
            };
            DPI_scale: number;
            MONITOR_DIMS: {
                height: number;
                width: number;
            };
        }[];
        selected_display: number;
    };
    run_stake_stickers: boolean;
    GAMESPEED: number;
    SOUND: {
        volume: number;
        music_volume: number;
        game_sounds_volume: number;
    };
    music_control: {
        current_track: string;
        desired_track: string;
        lerp: number;
    };
    ACHIEVEMENTS_EARNED: Record<string, boolean>;
    screenshake: number;
    current_setup: string;
    profile: number;
    ambient_control: any;
    DEMO: any;
    GRAPHICS: {
        texture_scaling: number;
        crt: number;
        shadows: "On" | "Off" | boolean;
        bloom: number;
    };

    [key: string]: any;
}

export interface TutorialPart {
    first_hand_3?: boolean;
    small_blind?: boolean;
    big_blind?: boolean;
    first_hand_4?: boolean;
    shop_1?: boolean;
    first_hand_section?: boolean;
    first_hand_2?: boolean;
    first_hand?: boolean;
}

export const info: Partial<Record<string, string | object>> = {
    version: "The version of the game this save was made in.",
    language: "The language code for the displayed language. Make sure you change this to a valid value like `en-us`",
    profile: "The profile number (1-3) that is selected in the game. May break if changed to a non-existent profile.",
    crashreports: "Whether or not crash reports are sent to the localthunk",

    progress: {
        overall_tally: "The completion progress of all tracked stats. (max 4)",
        challenges: { tally: "The completion progress of all challenges. (max 20)" },
        deck_stakes: { tally: "The completion progress of stakes on every deck. (max 120)" },
        discovered: { tally: "The completion progress of all discoverable items. (max 340)" },
        joker_stickers: { tally: "The completion progress of stake sticker on every joker. (each joker gets a sticker for winning with it in a stake) (max 1200)" },
    },
};
