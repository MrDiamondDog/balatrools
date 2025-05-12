import { Balatro, CardAreaCard, Consumable } from "../lib/gamedata";

export enum SaveFileState {
    SHOP = 5,
    BLIND_SELECT = 7
}

export type SaveFileData = {
    VERSION: string;
    STATE: number;
    BLIND: {
        dollars: number;
        config_blind: string;
        chip_text: string;
        disabled: boolean;
        debuff: any;
        chips: number;
        name: string;
        mult: number;
    };
    BACK: {
        name: string;
        pos: object;
        key: string;
        effect: object;
    };
    tags: {
        ability: any,
        key: keyof typeof Balatro.Tag,
        tally: number
    }[];
    ACTION: {
        type: string;
        card: number;
    };
    GAME: {
        tarot_rate: number;
        dollars: number;
        round_bonus: {
            discards: number;
            next_hands: number;
        };
        tag_tally: number;
        common_mod: number;
        win_ante: number;
        inflation: number;
        spectral_rate: number;
        banned_keys: {};
        joker_rate: number;
        used_vouchers: {};
        modifiers: {};
        pseudorandom: {
            seed: string;
        };
        consumeable_usage_total: {
            tarot: number;
            planet: number;
            spectral: number;
            all: number;
            tarot_planet: number;
        };
        selected_back_key: {
            order: number;
            set: string;
            _discovered_unlocked_overwritten: boolean;
            stake: number;
            discovered: boolean;
            alerted: boolean;
            unlocked: boolean;
            name: string;
            config: object;
        };
        shop: {
            joker_max: number;
        };
        uncommon_mod: number;
        first_shop_buffoon: boolean;
        round_resets: {
            reroll_cost: number;
            blind_choices: {
                Small: string;
                Boss: string;
                Big: string;
            };
            blind_states: {
                Small: string;
                Boss: string;
                Big: string;
            };
            blind_tags: {
                Small: string;
                Big: string;
            };
            blind_ante: number;
            blind: {
                order: number;
                boss_colour: number[];
                alerted: boolean;
                debuff: object;
                name: string;
                discovered: boolean;
                vars: object;
                defeated: boolean;
                mult: number;
                dollars: number;
                key: string;
                _discovered_unlocked_overwritten: boolean;
            };
            hands: number;
            ante: number;
            discards: number;
            boss_rerolled: boolean;
            loc_blind_states: {
                Small: string;
                Boss: string;
                Big: string;
            }
        }
        unused_discards: number;
        disabled_suits: object;
        last_hand_played: string;
        ecto_minus: number;
        subhash: string;
        playing_card_rate: number;
        voucher_text: string;
        starting_params: {
            consumable_slots: number;
            joker_slots: number;
            erratic_suits_and_ranks: boolean;
            ante_scaling: number;
            dollars: number;
            discards: number;
            hands: number;
            hand_size: number;
            no_faces: boolean;
            reroll_cost: number
        };
        round_scores: {
            furthest_round: {
                label: "Round";
                amt: number
            };
            cards_played: {
                label: "Cards Played";
                amt: number
            };
            hand: {
                label: "Best Hand";
                amt: number
            };
            cards_discarded: {
                label: "Cards Discarded";
                amt: number
            };
            times_rerolled: {
                label: "Times Rerolled";
                amt: number
            };
            furthest_ante: {
                label: "Ante";
                amt: number
            };
            poker_hand: {
                label: "Most Played Hand";
                amt: number
            };
            new_collection: {
                label: "New Discoveries";
                amt: number
            };
            cards_purchased: {
                label: "Cards Purchased";
                amt: number
            }
        };
        edition_rate: number;
        used_jokers: {
            j_trousers: boolean;
            c_base: boolean;
            c_moon: boolean;
            p_arcana_normal_2: boolean;
            c_hex: boolean;
            v_planet_merchant: boolean;
            p_buffoon_normal_2: boolean
        };
        previous_round: {
            dollars: number
        };
        blind: string;
        current_round: {
            reroll_cost_increase: number;
            jokers_purchased: number;
            reroll_cost: number;
            discards_left: number;
            ancient_card: {
                suit: (keyof typeof Balatro.suits_singular)
            };
            discards_used: number;
            castle_card: {
                suit: (keyof typeof Balatro.suits_singular)
            };
            dollars: number;
            voucher: (keyof typeof Balatro.Voucher);
            round_dollars: number;
            mail_card: {
                rank: (keyof typeof Balatro.ranks);
                id: number
            };
            cards_flipped: number;
            current_hand: {
                chip_text: string;
                handname_text: string;
                handname: string;
                hand_level: string;
                mult: number;
                mult_text: string;
                chips: number;
                chip_total_text: string;
                chip_total: number
            };
            idol_card: {
                suit: (keyof typeof Balatro.suits_singular);
                rank: (keyof typeof Balatro.ranks);
                id: number
            };
            most_played_poker_hand: (keyof typeof Balatro.poker_hands);
            hands_played: number;
            round_text: "Round ";
            hands_left: number;
            used_packs: Partial<(keyof typeof Balatro.Pack)>[];
            free_rerolls: number;
            dollars_to_be_earned: string
        };
        rental_rate: number;
        consumeable_usage: Record<Consumable, {
            order: number;
            count: number;
            set: string;
        }>;
        last_blind: {
            name: string
        };
        planet_rate: number;
        stake: number;
        pack_choices: number;
        perscribed_bosses: {};
        rare_mod: number;
        perishable_rounds: number;
        round: number;
        tags: (keyof typeof Balatro.Tag)[];
        skips: number;
        last_tarot_planet: Consumable;
        hand_usage: Record<(keyof typeof Balatro.poker_hands), {
            order: string;
            count: number
        }>;
        won: boolean;
        interest_amount: number;
        chips_text: string;
        blind_on_deck: string;
        hands_played: number;
        consumeable_buffer: number;
        disabled_ranks: object;
        STOP_USE: number;
        discount_percent: number;
        max_jokers: number;
        bankrupt_at: number;
        selected_back: string;
        sort: string;
        pack_size: number;
        pool_flags: object;
        joker_usage: {};
        current_boss_streak: number;
        cards_played: Record<(keyof typeof Balatro.ranks), {
            suits: Record<(keyof typeof Balatro.suits_plural), boolean>;
            total: number;
        }>;
        legendary_mod: 1;
        orbital_choices: [
            {
                Small: (keyof typeof Balatro.poker_hands);
                Boss: (keyof typeof Balatro.poker_hands);
                Big: (keyof typeof Balatro.poker_hands);
            }
        ];
        base_reroll_cost: number;
        chips: number;
        hands: Record<(keyof typeof Balatro.poker_hands), {
            order: number;
            l_mult: number;
            s_mult: number;
            example: any[];
            mult: number;
            visible: boolean;
            played: number;
            played_this_round: number;
            chips: number;
            l_chips: number;
            level: number;
            s_chips: number;
        }>;
        probabilities: {
            normal: number;
        };
        starting_deck_size: number;
        bosses_used: Record<keyof typeof Balatro.Blind, number>;
        joker_buffer: number;
        interest_cap: number;
    };
    cardAreas: {
        jokers: {
            cards: CardAreaCard[];
            "config": {
                "temp_limit": 52,
                "card_limit": 52,
            };
        };
        deck: {
            cards: CardAreaCard[];
            config: {
                temp_limit: 52;
                card_limit: 52;
            };
        };
        play: {
            cards: CardAreaCard[];
            config: {
                temp_limit: 52;
                card_limit: 52;
            };
        };
        hand: {
            cards: CardAreaCard[];
            config: {
                temp_limit: 52;
                card_limit: 52;
            };
        };
    };
}
