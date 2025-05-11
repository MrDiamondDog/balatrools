import { Balatro, Consumable } from "@/lib/gamedata";

export interface Usage {
    order: string;
    count: number;
}

export interface DeckUsage {
    order: number;
    count: number;
    wins: number[];
    losses: number[];
}

export interface Progress {
    of: number;
    tally: number;
}

export interface HighScore {
    label: string;
    amt: number;
    tot?: number;
}

export interface JokerStats {
    order: number;
    count: number;
    wins: number[];
    losses: number[];
}

export interface ProfileFileData {
    career_stats: {
        c_cards_discarded: number;
        c_hands_played: number;
        c_dollars_earned: number;
        c_cards_played: number;
        c_planetarium_used: number;
        c_wins: number;
        c_shop_rerolls: number;
        c_round_interest_cap_streak: number;
        c_losses: number;
        c_tarots_bought: number;
        c_shop_dollars_spent: number;
        c_single_hand_round_streak: number;
        c_planets_bought: number;
        c_vouchers_bought: number;
        c_tarot_reading_used: number;
        c_rounds: number;
        c_jokers_sold: number;
        c_face_cards_played: number;
        c_playing_cards_bought: number;
        c_cards_sold: number;
    };
    joker_usage: Partial<Record<keyof typeof Balatro.Joker, JokerStats>>;
    MEMORY: {
        deck: string;
        stake: number;
    };
    deck_stakes: {};
    voucher_usage: Partial<Record<keyof typeof Balatro.Voucher, Usage>>;
    stake: number;
    challenge_progress: {
        unlocked: {};
        completed: {};
    };
    consumeable_usage: Partial<Record<Consumable, Usage>>;
    hand_usage: Partial<Record<string, Usage>>;
    deck_usage: Partial<Record<keyof typeof Balatro.Deck, number>>;
    progress: {
        overall_tally: number;
        overall_of: number;
        challenges: Progress;
        joker_stickers: Progress;
        deck_stakes: Progress;
        discovered: Progress;
    };
    high_scores: {
        furthest_round: HighScore;
        win_streak: HighScore;
        furthest_ante: HighScore;
        collection: HighScore;
        current_streak: HighScore;
        boss_streak: HighScore;
        poker_hand: HighScore;
        hand: HighScore;
        most_money: HighScore;
    };
    name: string;
    challenges_unlocked: number;
}
