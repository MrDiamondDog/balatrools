/* eslint-disable quote-props */
/* eslint-disable max-len */

export type DiscoverableItem =
    keyof typeof Balatro.Joker
    | keyof typeof Balatro.Spectral
    | keyof typeof Balatro.Planet
    | keyof typeof Balatro.Tarot
    | keyof typeof Balatro.Voucher
    | keyof typeof Balatro.Enhanced
    | keyof typeof Balatro.Edition
    | keyof typeof Balatro.Blind
    | keyof typeof Balatro.Stake
    | keyof typeof Balatro.Pack;

export type Consumable =
    keyof typeof Balatro.Tarot
    | keyof typeof Balatro.Planet
    | keyof typeof Balatro.Spectral;

export type CardAreaCard = {
    sprite_facing: "front",
    ignore_base_shader: any,
    rank: number,
    save_fields: {
        // card id (playing card = "c_base")
        center: string,
        // if playing card {SUIT}_{NUM}
        card?: string,
    },
    label: string,
    base: {
        nominal: number,
        suit_nominal: number,
        face_nominal: number,
        suit_nominal_original: number,
        times_played: number
        suit?: keyof typeof Balatro.suits_plural,
        id?: number,
        colour?: number[],
        value?: string,
        name?: string,
    },
    ignore_shadow: any,
    cost: number,
    base_cost: number,
    added_to_deck: true,
    params: any,
    bypass_lock: true,
    unique_val__saved_ID: number,
    unique_val: number,
    sort_id: number,
    bypass_discovery_center: true,
    bypass_discovery_ui: true,
    ability: any,
    facing: string,
    debuff: boolean,
    sell_cost: 3,
    extra_cost: 0
}

export const Balatro = {
    achievement_names: {
        _10k: "10K",
        card_player: "Card Player",
        mid_stakes: "Mid Stakes",
        rule_breaker: "Rule Breaker",
        low_stakes: "Low Stakes",
        heads_up: "Heads Up",
        big_hands: "Big Hands",
        rule_bender: "Rule Bender",
        ante_up: "Ante Up!",
        nest_egg: "Nest Egg",
        card_discarder: "Card Discarder",
        completionist_plus_plus: "Completionist++",
        tiny_hands: "Tiny Hands",
        speedrunner: "Speedrunner",
        royale: "Royale",
        high_stakes: "High Stakes",
        you_get_what_you_get: "You Get What You Get",
        shattered: "Shattered",
        completionist: "Completionist",
        astronomy: "Astronomy",
        _100000k: "100,000K",
        clairvoyance: "Clairvoyance",
        roi: "ROI",
        retrograde: "Retrograde",
        legendary: "Legendary",
        flushed: "Flushed",
        cartomancy: "Cartomancy",
        ante_upper: "Ante Upper!",
        _1000k: "1,000K",
        completionist_plus: "Completionist+",
        extreme_couponer: "Extreme Couponer",
    },
    suits_singular: {
        Clubs: "Club",
        Diamonds: "Diamond",
        Hearts: "Heart",
        Spades: "Spade",
    },
    suits_plural: {
        Clubs: "Clubs",
        Diamonds: "Diamonds",
        Hearts: "Hearts",
        Spades: "Spades",
    },
    collabs: {
        Clubs: {
            1: "Default",
            2: "Vampire Survivors",
            3: "Slay the Spire",
            4: "Potion Craft",
            5: "Warframe",
        },
        Diamonds: {
            1: "Default",
            2: "Dave the Diver",
            3: "Stardew Valley",
            4: "Enter the Gungeon",
            5: "1000xRESIST",
        },
        Hearts: {
            1: "Default",
            2: "Among Us",
            3: "The Binding of Isaac",
            4: "Cult of the Lamb",
            5: "Divinity Original Sin 2",
        },
        Spades: {
            1: "Default",
            2: "The Witcher",
            3: "Cyberpunk 2077",
            4: "Shovel Knight",
            5: "Don't Starve",
        },
    },
    poker_hands: {
        "High Card": "High Card",
        "Two Pair": "Two Pair",
        "Four of a Kind": "Four of a Kind",
        Flush: "Flush",
        Pair: "Pair",
        "Three of a Kind": "Three of a Kind",
        "Straight Flush": "Straight Flush",
        Straight: "Straight",
        "Royal Flush": "Royal Flush",
        "Flush Five": "Flush Five",
        "Full House": "Full House",
        "Flush House": "Flush House",
        "Five of a Kind": "Five of a Kind",
    },
    ranks: {
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        Queen: "Queen",
        King: "King",
        Jack: "Jack",
        Ace: "Ace",
    },
    achievement_descriptions: {
        _10k: "Score 10,000 Chips in a single hand",
        card_player: "Play at least 2500 Cards",
        mid_stakes: "Win a run on at least Black Stake difficulty",
        rule_breaker: "Complete every challenge run",
        low_stakes: "Win a run on at least Red Stake difficulty",
        heads_up: "Win a Run",
        big_hands: "Have 80 or more cards in your deck",
        rule_bender: "Complete any challenge run",
        ante_up: "Reach Ante 4",
        nest_egg: "Have $400 or more during a single run",
        card_discarder: "Discard at least 2500 Cards",
        completionist_plus_plus: "Earn a Gold Sticker on every Joker",
        tiny_hands: "Thin your deck down to 20 or fewer cards",
        speedrunner: "Win a run in 12 or fewer rounds",
        royale: "Play a Royal Flush",
        high_stakes: "Win a run on at least Gold Stake difficulty",
        you_get_what_you_get: "Win a run without rerolling the shop",
        shattered: "Break 2 Glass Cards in a single hand",
        completionist: "Discover 100% of your collection",
        astronomy: "Discover every Planet card",
        _100000k: "Score 100,000,000 Chips in a single hand",
        clairvoyance: "Discover every Spectral card",
        roi: "Buy 5 Vouchers by Ante 4",
        retrograde: "Get any poker hand to level 10",
        legendary: "Discover a Legendary Joker",
        flushed: "Play a Flush with 5 Wild Cards",
        cartomancy: "Discover every Tarot card",
        ante_upper: "Reach Ante 8",
        _1000k: "Score 1,000,000 Chips in a single hand",
        completionist_plus: "Win with every deck on Gold Stake difficulty",
        extreme_couponer: "Discover every Voucher",
    },
    poker_hand_descriptions: {
        "High Card": [
            "If the played hand is not any of the above",
            "hands, only the highest ranked card scores",
        ],
        "Two Pair": [
            "2 pairs of cards with different ranks, may",
            "be played with 1 other unscored card",
        ],
        "Four of a Kind": [
            "4 cards with the same rank. They may",
            "be played with 1 other unscored card",
        ],
        Flush: [
            "5 cards that share the same suit",
        ],
        Pair: [
            "2 cards that share the same rank. They may",
            "be played with up to 3 other unscored cards",
        ],
        "Three of a Kind": [
            "3 cards with the same rank. They may be",
            "played with up to 2 other unscored cards",
        ],
        "Straight Flush": [
            "5 cards in a row (consecutive ranks) with",
            "all cards sharing the same suit",
        ],
        Straight: [
            "5 cards in a row (consecutive ranks)",
        ],
        "Royal Flush": [
            "5 cards in a row (consecutive ranks) with",
            "all cards sharing the same suit",
        ],
        "Flush Five": [
            "5 cards with the same rank and suit",
        ],
        "Full House": [
            "A Three of a Kind and a Pair",
        ],
        "Flush House": [
            "A Three of a Kind and a Pair with",
            "all cards sharing the same suit",
        ],
        "Five of a Kind": [
            "5 cards with the same rank",
        ],
    },
    challenge_names: {
        c_monolith_1: "Monolith",
        c_five_card_1: "Five-Card Draw",
        c_inflation_1: "Inflation",
        c_cruelty_1: "Cruelty",
        c_rich_1: "Rich get Richer",
        c_medusa_1: "Medusa",
        c_luxury_1: "Luxury Tax",
        c_xray_1: "X-ray Vision",
        c_bram_poker_1: "Bram Poker",
        c_mad_world_1: "Mad World",
        c_blast_off_1: "Blast Off",
        c_omelette_1: "The Omelette",
        c_city_1: "15 Minute City",
        c_golden_needle_1: "Golden Needle",
        c_non_perishable_1: "Non-Perishable",
        c_fragile_1: "Fragile",
        c_typecast_1: "Typecast",
        c_knife_1: "On a Knife's Edge",
        c_jokerless_1: "Jokerless",
        c_double_nothing_1: "Double or Nothing",
    },
    labels: {
        holographic: "Holographic",
        tarot: "Tarot",
        eternal: "Eternal",
        gold_seal: "Gold Seal",
        foil: "Foil",
        red_seal: "Red Seal",
        locked: "Locked",
        rental: "Rental",
        pinned_left: "Pinned",
        voucher: "Voucher",
        common: "Common",
        blue_seal: "Blue Seal",
        uncommon: "Uncommon",
        rare: "Rare",
        legendary: "Legendary",
        purple_seal: "Purple Seal",
        polychrome: "Polychrome",
        negative: "Negative",
        planet: "Planet",
        perishable: "Perishable",
        pluto_planet: "Dwarf Planet",
    },
    Pack: {
        p_arcana_jumbo: {
            name: "Jumbo Arcana Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:tarot} Tarot{} cards to",
                "be used immediately",
            ],
        },
        p_arcana_mega: {
            name: "Mega Arcana Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:tarot} Tarot{} cards to",
                "be used immediately",
            ],
        },
        p_spectral_normal: {
            name: "Spectral Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:spectral} Spectral{} cards to",
                "be used immediately",
            ],
        },
        p_buffoon_normal: {
            name: "Buffoon Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:joker} Joker{} cards",
            ],
        },
        p_arcana_normal: {
            name: "Arcana Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:tarot} Tarot{} cards to",
                "be used immediately",
            ],
        },
        p_celestial_mega: {
            name: "Mega Celestial Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:planet} Planet{} cards to",
                "be used immediately",
            ],
        },
        p_buffoon_mega: {
            name: "Mega Buffoon Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:joker} Joker{} cards",
            ],
        },
        p_standard_normal: {
            name: "Standard Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:attention} Playing{} cards to",
                "add to your deck",
            ],
        },
        p_buffoon_jumbo: {
            name: "Jumbo Buffoon Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:joker} Joker{} cards",
            ],
        },
        p_celestial_normal: {
            name: "Celestial Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:planet} Planet{} cards to",
                "be used immediately",
            ],
        },
        p_celestial_jumbo: {
            name: "Jumbo Celestial Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:planet} Planet{} cards to",
                "be used immediately",
            ],
        },
        p_spectral_mega: {
            name: "Mega Spectral Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:spectral} Spectral{} cards to",
                "be used immediately",
            ],
        },
        p_spectral_jumbo: {
            name: "Jumbo Spectral Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:spectral} Spectral{} cards to",
                "be used immediately",
            ],
        },
        p_standard_mega: {
            name: "Mega Standard Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:attention} Playing{} cards to",
                "add to your deck",
            ],
        },
        p_standard_jumbo: {
            name: "Jumbo Standard Pack",
            text: [
                "Choose {C:attention}#1#{} of up to",
                "{C:attention}#2#{C:attention} Playing{} cards to",
                "add to your deck",
            ],
        },
    },
    Stake: {
        stake_white: {
            name: "White Stake",
            order: 0,
            description: "Base Difficulty",
        },
        stake_red: {
            name: "Red Stake",
            order: 1,
            description: "<span class=\"hl-orange\">Small Blind</span> gives<br>no reward money<br><span style=\"font-size: 85%;\">Applies all previous Stakes<span>",
        },
        stake_green: {
            name: "Green Stake",
            order: 2,
            description: "Required score scales<br>faster for each <span class=\"hl-orange\">Ante</span><br><span style=\"font-size: 85%;\">Applies all previous Stakes<span>",
        },
        stake_black: {
            name: "Black Stake",
            order: 3,
            description: "Shop can have <span class=\"hl-orange\">Eternal</span> Jokers<br><span style=\"font-size: 85%;\" class=\"hl-gray\">(Can't be sold or destroyed)</span><br><span style=\"font-size: 85%;\">Applies all previous Stakes</span>",
        },
        stake_blue: {
            name: "Blue Stake",
            order: 4,
            description: "<span class=\"hl-red\">-1</span> Discard<br><span style=\"font-size: 85%;\">Applies all previous Stakes</span>",
        },
        stake_purple: {
            name: "Purple Stake",
            order: 5,
            description: "Required score scales<br>faster for each <span class=\"hl-orange\">Ante</span><br><span style=\"font-size: 85%;\">Applies all previous Stakes</span>",
        },
        stake_orange: {
            name: "Orange Stake",
            order: 6,
            description: "Shop can have <span class=\"hl-orange\">Perishable</span> Jokers<br><span style=\"font-size: 85%;\" class=\"hl-gray\">(Debuffed after 5 Rounds)</span><br><span style=\"font-size: 85%;\">Applies all previous Stakes</span>",
        },
        stake_gold: {
            name: "Gold Stake",
            order: 7,
            description: "Shop can have <span class=\"hl-orange\">Rental</span> Jokers<br><span style=\"font-size: 85%;\" class=\"hl-gray\">(Costs <span class=\"hl-yellow\">$3</span> per round)</span><br><span style=\"font-size: 85%;\">Applies all previous Stakes</span>",
        },
    },
    Blind: {
        bl_needle: {
            name: "The Needle",
            text: [
                "Play only 1 hand",
            ],
        },
        bl_final_heart: {
            name: "Crimson Heart",
            text: [
                "One random Joker",
                "disabled every hand",
            ],
        },
        bl_fish: {
            name: "The Fish",
            text: [
                "Cards drawn face down",
                "after each hand played",
            ],
        },
        bl_club: {
            name: "The Club",
            text: [
                "All Club cards",
                "are debuffed",
            ],
        },
        bl_eye: {
            name: "The Eye",
            text: [
                "No repeat hand",
                "types this round",
            ],
        },
        bl_head: {
            name: "The Head",
            text: [
                "All Heart cards",
                "are debuffed",
            ],
        },
        bl_window: {
            name: "The Window",
            text: [
                "All Diamond cards",
                "are debuffed",
            ],
        },
        bl_final_bell: {
            name: "Cerulean Bell",
            text: [
                "Forces 1 card to",
                "always be selected",
            ],
        },
        bl_pillar: {
            name: "The Pillar",
            text: [
                "Cards played previously",
                "this Ante are debuffed",
            ],
        },
        bl_hook: {
            name: "The Hook",
            text: [
                "Discards 2 random",
                "cards per hand played",
            ],
        },
        bl_final_acorn: {
            name: "Amber Acorn",
            text: [
                "Flips and shuffles",
                "all Joker cards",
            ],
        },
        bl_wall: {
            name: "The Wall",
            text: [
                "Extra large blind",
            ],
        },
        bl_tooth: {
            name: "The Tooth",
            text: [
                "Lose $1 per",
                "card played",
            ],
        },
        bl_arm: {
            name: "The Arm",
            text: [
                "Decrease level of",
                "played poker hand",
            ],
        },
        bl_small: {
            name: "Small Blind",
            text: [],
        },
        bl_psychic: {
            name: "The Psychic",
            text: [
                "Must play 5 cards",
            ],
        },
        bl_serpent: {
            name: "The Serpent",
            text: [
                "After Play or Discard,",
                "always draw 3 cards",
            ],
        },
        bl_plant: {
            name: "The Plant",
            text: [
                "All face cards",
                "are debuffed",
            ],
        },
        bl_flint: {
            name: "The Flint",
            text: [
                "Base Chips and",
                "Mult are halved",
            ],
        },
        bl_water: {
            name: "The Water",
            text: [
                "Start with",
                "0 discards",
            ],
        },
        bl_goad: {
            name: "The Goad",
            text: [
                "All Spade cards",
                "are debuffed",
            ],
        },
        bl_final_leaf: {
            name: "Verdant Leaf",
            text: [
                "All cards debuffed",
                "until 1 Joker sold",
            ],
        },
        bl_mouth: {
            name: "The Mouth",
            text: [
                "Play only 1 hand",
                "type this round",
            ],
        },
        bl_mark: {
            name: "The Mark",
            text: [
                "All face cards are",
                "drawn face down",
            ],
        },
        bl_manacle: {
            name: "The Manacle",
            text: [
                "-1 Hand Size",
            ],
        },
        bl_house: {
            name: "The House",
            text: [
                "First hand is",
                "drawn face down",
            ],
        },
        bl_big: {
            name: "Big Blind",
            text: [],
        },
        bl_wheel: {
            name: "The Wheel",
            text: [
                " in 7 cards get",
                "drawn face down",
            ],
        },
        bl_ox: {
            name: "The Ox",
            text: [
                "Playing a #1#",
                "sets money to $0",
            ],
        },
        bl_final_vessel: {
            name: "Violet Vessel",
            text: [
                "Very large blind",
            ],
        },
    },
    Enhanced: {
        m_wild: {
            name: "Wild Card",
            text: [
                "Can be used",
                "as any suit",
            ],
        },
        m_mult: {
            name: "Mult Card",
            text: [
                "{C:mult}+#1#{} Mult",
            ],
        },
        m_steel: {
            name: "Steel Card",
            text: [
                "{X:mult,C:white} X#1# {} Mult",
                "while this card",
                "stays in hand",
            ],
        },
        m_stone: {
            name: "Stone Card",
            text: [
                "{C:chips}+#1#{} Chips",
                "no rank or suit",
            ],
        },
        m_glass: {
            name: "Glass Card",
            text: [
                "{X:mult,C:white} X#1# {} Mult",
                "{C:green}#2# in #3#{} chance to",
                "destroy card",
            ],
        },
        m_lucky: {
            name: "Lucky Card",
            text: [
                "{C:green}#1# in #3#{} chance",
                "for {C:mult}+#2#{} Mult",
                "{C:green}#1# in #5#{} chance",
                "to win {C:money}$#4#",
            ],
        },
        m_bonus: {
            name: "Bonus Card",
            text: [],
        },
        m_gold: {
            name: "Gold Card",
            text: [
                "{C:money}$#1#{} if this",
                "card is held in hand",
                "at end of round",
            ],
        },
    },
    Spectral: {
        c_black_hole: {
            name: "Black Hole",
            text: [
                "Upgrade every",
                "{C:legendary,E:1}poker hand",
                "by {C:attention}1{} level",
            ],
        },
        c_sigil: {
            name: "Sigil",
            text: [
                "Converts all cards",
                "in hand to a single",
                "random {C:attention}suit",
            ],
        },
        c_medium: {
            name: "Medium",
            text: [
                "Add a {C:purple}Purple Seal{}",
                "to {C:attention}1{} selected",
                "card in your hand",
            ],
        },
        c_immolate: {
            name: "Immolate",
            text: [
                "Destroys {C:attention}#1#{} random",
                "cards in hand,",
                "gain {C:money}$#2#",
            ],
        },
        c_ankh: {
            name: "Ankh",
            text: [
                "Create a copy of a",
                "random {C:attention}Joker{}, destroy",
                "all other Jokers",
            ],
        },
        c_familiar: {
            name: "Familiar",
            text: [
                "Destroy {C:attention}1{} random",
                "card in your hand, add",
                "{C:attention}#1#{} random {C:attention}Enhanced face",
                "{C:attention}cards{} to your hand",
            ],
        },
        c_ectoplasm: {
            name: "Ectoplasm",
            text: [
                "Add {C:dark_edition}Negative{} to",
                "a random {C:attention}Joker,",
                "{C:red}-#1#{} hand size",
            ],
        },
        c_incantation: {
            name: "Incantation",
            text: [
                "Destroy {C:attention}1{} random",
                "card in your hand, add {C:attention}#1#",
                "random {C:attention}Enhanced numbered",
                "{C:attention}cards{} to your hand",
            ],
        },
        c_ouija: {
            name: "Ouija",
            text: [
                "Converts all cards",
                "in hand to a single",
                "random {C:attention}rank",
                "{C:red}-1{} hand size",
            ],
        },
        c_soul: {
            name: "The Soul",
            text: [
                "Creates a",
                "{C:legendary,E:1}Legendary{} Joker",
                "{C:inactive}(Must have room)",
            ],
        },
        c_deja_vu: {
            name: "Deja Vu",
            text: [
                "Add a {C:red}Red Seal{}",
                "to {C:attention}1{} selected",
                "card in your hand",
            ],
        },
        c_wraith: {
            name: "Wraith",
            text: [
                "Creates a random",
                "{C:red}Rare{C:attention} Joker{},",
                "sets money to {C:money}$0",
            ],
        },
        c_aura: {
            name: "Aura",
            text: [
                "Add {C:dark_edition}Foil{}, {C:dark_edition}Holographic{},",
                "or {C:dark_edition}Polychrome{} effect to",
                "{C:attention}1{} selected card in hand",
            ],
        },
        c_trance: {
            name: "Trance",
            text: [
                "Add a {C:blue}Blue Seal{}",
                "to {C:attention}1{} selected",
                "card in your hand",
            ],
        },
        c_talisman: {
            name: "Talisman",
            text: [
                "Add a {C:attention}Gold Seal{}",
                "to {C:attention}1{} selected",
                "card in your hand",
            ],
        },
        c_grim: {
            name: "Grim",
            text: [
                "Destroy {C:attention}1{} random",
                "card in your hand,",
                "add {C:attention}#1#{} random {C:attention}Enhanced",
                "{C:attention}Aces{} to your hand",
            ],
        },
        c_cryptid: {
            name: "Cryptid",
            text: [
                "Create {C:attention}#1#{} copies of",
                "{C:attention}1{} selected card",
                "in your hand",
            ],
        },
        c_hex: {
            name: "Hex",
            text: [
                "Add {C:dark_edition}Polychrome{} to a",
                "random {C:attention}Joker{}, destroy",
                "all other Jokers",
            ],
        },
    },
    Tarot: {
        c_emperor: {
            name: "The Emperor",
            text: [
                "Creates up to {C:attention}#1#",
                "random {C:tarot}Tarot{} cards",
                "{C:inactive}(Must have room)",
            ],
        },
        c_empress: {
            name: "The Empress",
            text: [
                "Enhances {C:attention}#1#",
                "selected cards to",
                "{C:attention}#2#s",
            ],
        },
        c_wheel_of_fortune: {
            name: "The Wheel of Fortune",
            text: [
                "{C:green}#1# in #2#{} chance to add",
                "{C:dark_edition}Foil{}, {C:dark_edition}Holographic{}, or",
                "{C:dark_edition}Polychrome{} edition",
                "to a random {C:attention}Joker",
            ],
        },
        c_star: {
            name: "The Star",
            text: [
                "Converts up to",
                "{C:attention}#1#{} selected cards",
                "to {V:1}#2#{}",
            ],
        },
        c_moon: {
            name: "The Moon",
            text: [
                "Converts up to",
                "{C:attention}#1#{} selected cards",
                "to {V:1}#2#{}",
            ],
        },
        c_justice: {
            name: "Justice",
            text: [
                "Enhances {C:attention}#1#{} selected",
                "card into a",
                "{C:attention}#2#",
            ],
        },
        c_heirophant: {
            name: "The Hierophant",
            text: [
                "Enhances {C:attention}#1#",
                "selected cards to",
                "{C:attention}#2#s",
            ],
        },
        c_strength: {
            name: "Strength",
            text: [
                "Increases rank of",
                "up to {C:attention}#1#{} selected",
                "cards by {C:attention}1",
            ],
        },
        c_devil: {
            name: "The Devil",
            text: [
                "Enhances {C:attention}#1#{} selected",
                "card into a",
                "{C:attention}#2#",
            ],
        },
        c_magician: {
            name: "The Magician",
            text: [
                "Enhances {C:attention}#1#{}",
                "selected cards to",
                "{C:attention}#2#s",
            ],
        },
        c_temperance: {
            name: "Temperance",
            text: [
                "Gives the total sell",
                "value of all current",
                "Jokers {C:inactive}(Max of {C:money}$#1#{C:inactive})",
                "{C:inactive}(Currently {C:money}$#2#{C:inactive})",
            ],
        },
        c_world: {
            name: "The World",
            text: [
                "Converts up to",
                "{C:attention}#1#{} selected cards",
                "to {V:1}#2#{}",
            ],
        },
        c_fool: {
            name: "The Fool",
            text: [
                "Creates the last",
                "{C:tarot}Tarot{} or {C:planet}Planet{} card",
                "used during this run",
                "{s:0.8,C:tarot}The Fool{s:0.8} excluded",
            ],
        },
        c_tower: {
            name: "The Tower",
            text: [
                "Enhances {C:attention}#1#{} selected",
                "card into a",
                "{C:attention}#2#",
            ],
        },
        c_chariot: {
            name: "The Chariot",
            text: [
                "Enhances {C:attention}#1#{} selected",
                "card into a",
                "{C:attention}#2#",
            ],
        },
        c_death: {
            name: "Death",
            text: [
                "Select {C:attention}#1#{} cards,",
                "convert the {C:attention}left{} card",
                "into the {C:attention}right{} card",
                "{C:inactive}(Drag to rearrange)",
            ],
        },
        c_hermit: {
            name: "The Hermit",
            text: [
                "Doubles money",
                "{C:inactive}(Max of {C:money}$#1#{C:inactive})",
            ],
        },
        c_sun: {
            name: "The Sun",
            text: [
                "Converts up to",
                "{C:attention}#1#{} selected cards",
                "to {V:1}#2#{}",
            ],
        },
        c_lovers: {
            name: "The Lovers",
            text: [
                "Enhances {C:attention}#1#{} selected",
                "card into a",
                "{C:attention}#2#",
            ],
        },
        c_judgement: {
            name: "Judgement",
            text: [
                "Creates a random",
                "{C:attention}Joker{} card",
                "{C:inactive}(Must have room)",
            ],
        },
        c_high_priestess: {
            name: "The High Priestess",
            text: [
                "Creates up to {C:attention}#1#",
                "random {C:planet}Planet{} cards",
                "{C:inactive}(Must have room)",
            ],
        },
        c_hanged_man: {
            name: "The Hanged Man",
            text: [
                "Destroys up to",
                "{C:attention}#1#{} selected cards",
            ],
        },
    },
    Deck: {
        b_blue: {
            name: "Blue Deck",
            text: [
                "{C:blue}+#1#{} hand",
                "every round",
            ],
        },
        b_challenge: {
            name: "Challenge Deck",
            text: [
                "",
            ],
        },
        b_yellow: {
            name: "Yellow Deck",
            text: [
                "Start with",
                "extra {C:money}$#1#",
            ],
        },
        b_erratic: {
            name: "Erratic Deck",
            text: [
                "All {C:attention}Ranks{} and",
                "{C:attention}Suits{} in deck",
                "are randomized",
            ],
        },
        b_ghost: {
            name: "Ghost Deck",
            text: [
                "{C:spectral}Spectral{} cards may",
                "appear in the shop,",
                "start with a {C:spectral,T:c_hex}Hex{} card",
            ],
        },
        b_painted: {
            name: "Painted Deck",
            text: [
                "{C:attention}+#1#{} hand size,",
                "{C:red}#2#{} Joker slot",
            ],
        },
        b_plasma: {
            name: "Plasma Deck",
            text: [
                "Balance {C:blue}Chips{} and",
                "{C:red}Mult{} when calculating",
                "score for played hand",
                "{C:red}X#1#{} base Blind size",
            ],
        },
        b_magic: {
            name: "Magic Deck",
            text: [
                "Start run with the",
                "{C:tarot,T:v_crystal_ball}#1#{} voucher",
                "and {C:attention}2{} copies",
                "of {C:tarot,T:c_fool}#2#",
            ],
        },
        b_checkered: {
            name: "Checkered Deck",
            text: [
                "Start run with",
                "{C:attention}26{C:spades} Spades{} and",
                "{C:attention}26{C:hearts} Hearts{} in deck",
            ],
        },
        b_nebula: {
            name: "Nebula Deck",
            text: [
                "Start run with the",
                "{C:planet,T:v_telescope}#1#{} voucher",
                "",
                "{C:red}#2#{} consumable slot",
            ],
        },
        b_green: {
            name: "Green Deck",
            text: [
                "At end of each Round:",
                "{C:money}$#1#{s:0.85} per remaining {C:blue}Hand",
                "{C:money}$#2#{s:0.85} per remaining {C:red}Discard",
                "Earn no {C:attention}Interest",
            ],
        },
        b_anaglyph: {
            name: "Anaglyph Deck",
            text: [
                "After defeating each",
                "{C:attention}Boss Blind{}, gain a",
                "{C:attention,T:tag_double}#1#",
            ],
        },
        b_red: {
            name: "Red Deck",
            text: [
                "{C:red}+#1#{} discard",
                "every round",
            ],
        },
        b_black: {
            name: "Black Deck",
            text: [
                "{C:attention}+#1#{} Joker slot",
                "",
                "{C:blue}-#2#{} hand",
                "every round",
            ],
        },
        b_abandoned: {
            name: "Abandoned Deck",
            text: [
                "Start run with",
                "no {C:attention}Face Cards",
                "in your deck",
            ],
        },
        b_zodiac: {
            name: "Zodiac Deck",
            text: [
                "Start run with",
                "{C:tarot,T:v_tarot_merchant}#1#{},",
                "{C:planet,T:v_planet_merchant}#2#{},",
                "and {C:attention,T:v_overstock_norm}#3#",
            ],
        },
    },
    Joker: {
        j_chicot: {
            name: "Chicot",
            unlock: "Find this Joker from the Soul card.",
            description: "Disables effect of every Boss Blind",
            price: "N/A",
            rarity: "Legendary",
            order: 148,
        },
        j_gift: {
            name: "Gift Card",
            description: "Add <span class=\"hl-yellow\">$1</span> of <span class=\"hl-orange\">sell value</span> to every <strong><span class=\"hl-orange\">Joker</span></strong> and <span class=\"hl-orange\">Consumable</span> card at end of round",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 78,
        },
        j_hanging_chad: {
            name: "Hanging Chad",
            unlock: "Beat a Boss Blind with a High Card hand.",
            description: "Retrigger <span class=\"hl-orange\">first</span> played card used in scoring <span class=\"hl-orange\">2</span> additional times",
            price: "$4",
            rarity: "Common",
            order: 114,
        },
        j_egg: {
            name: "Egg",
            description: "Gains <span class=\"hl-yellow\">$3</span> of <span class=\"hl-orange\">sell value</span> at end of round",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 45,
        },
        j_walkie_talkie: {
            name: "Walkie Talkie",
            description: "Each played <span class=\"hl-orange\">10</span> or <span class=\"hl-orange\">4</span> gives <span class=\"hl-chips\">+10</span>&nbsp;Chips and <span class=\"hl-mult\">+4</span>&nbsp;Mult when scored",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 100,
        },
        j_hallucination: {
            name: "Hallucination",
            description: "<span class=\"hl-green\">1 in 2</span> chance to create a <span class=\"hl-purple\">Tarot</span> card when any <span class=\"hl-orange\">Booster Pack</span> is opened <br> <span style=\"color:#b1b1b1;\">(Must have room)</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 84,
        },
        j_baseball: {
            name: "Baseball Card",
            description: "<span class=\"hl-green\">Uncommon</span> Jokers each give <span class=\"hl-xmult\">X1.5</span>&nbsp;Mult",
            price: "$8",
            rarity: "Rare",
            unlock: "Available from start.",
            order: 91,
        },
        j_obelisk: {
            name: "Obelisk",
            description: "This Joker gains <span class=\"hl-xmult\">X0.2</span>&nbsp;Mult per <span class=\"hl-orange\">consecutive</span> hand played without playing your most played <span class=\"hl-orange\">poker hand</span> <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-xmult\">X1</span>&nbsp;Mult)</span>",
            price: "$8",
            rarity: "Rare",
            unlock: "Available from start.",
            order: 74,
        },
        j_bull: {
            name: "Bull",
            description: "<span class=\"hl-chips\">+2</span>&nbsp;Chips for each <span class=\"hl-yellow\">$1</span> you have <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-chips\">+0</span>&nbsp;Chips)</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 92,
        },
        j_ancient: {
            name: "Ancient Joker",
            description: "Each played card with <span class=\"hl-orange\">[suit]</span> gives <span class=\"hl-xmult\">X1.5</span>&nbsp;Mult when scored, <br> <span style=\"font-size: 85%;\">suit changes at end of round</span>",
            price: "$8",
            rarity: "Rare",
            unlock: "Available from start.",
            order: 98,
        },
        j_hack: {
            name: "Hack",
            description: "Retrigger each played <span class=\"hl-orange\">2</span>, <span class=\"hl-orange\">3</span>, <span class=\"hl-orange\">4</span>, or <span class=\"hl-orange\">5</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 35,
        },
        j_rough_gem: {
            name: "Rough Gem",
            unlock: "Have at least 30 Diamonds in your deck",
            description: "Played cards with <span style=\"color:#f15a27;\">Diamond</span> suit earn <span class=\"hl-yellow\">$1</span> when scored",
            price: "$7",
            rarity: "Uncommon",
            order: 115,
        },
        j_flower_pot: {
            name: "Flower Pot",
            unlock: "Reach Ante Level 8",
            description: "<span class=\"hl-xmult\">X3</span>&nbsp;Mult if poker hand contains a <span style=\"color:#f15a27;\">Diamond</span> card, <span style=\"color:#074540;\">Club</span> card, <span style=\"color:#f11b52;\">Heart</span> card, and <span style=\"color:#292189;\">Spade</span> card",
            price: "$6",
            rarity: "Uncommon",
            order: 121,
        },
        j_crazy: {
            name: "Crazy Joker",
            description: "<span class=\"hl-mult\">+12</span>&nbsp;Mult if played hand contains a <span class=\"hl-hand\">Straight</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 8,
        },
        j_four_fingers: {
            name: "Four Fingers",
            description: "All <span class=\"hl-hand\">Flushes</span> and <span class=\"hl-hand\">Straights</span> can be made with 4 cards",
            price: "$7",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 17,
        },
        j_seance: {
            name: "Séance",
            description: "If <span class=\"hl-orange\">poker hand</span> is a <span class=\"hl-hand\">Straight Flush</span>, create a random <span class=\"hl-sblue\">Spectral</span> card <br> <span style=\"color:#b1b1b1;\">(Must have room)</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 65,
        },
        j_dna: {
            name: "DNA",
            description: "If <span class=\"hl-orange\">first hand</span> of round has only <span class=\"hl-orange\">1</span> card, add a permanent copy to deck and draw it to <span class=\"hl-orange\">hand</span>",
            price: "$8",
            rarity: "Rare",
            unlock: "Available from start.",
            order: 50,
        },
        j_flash: {
            name: "Flash Card",
            description: "This Joker gains <span class=\"hl-mult\">+2</span>&nbsp;Mult per <span class=\"hl-orange\">reroll</span> in the shop <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-mult\">+0</span>&nbsp;Mult)</span>",
            price: "$5",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 95,
        },
        j_business: {
            name: "Business Card",
            description: "Played <span class=\"hl-orange\">face</span> cards have a <span class=\"hl-green\">1 in 2</span> chance to give <span class=\"hl-yellow\">$2</span> when scored",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 41,
        },
        j_cartomancer: {
            name: "Cartomancer",
            unlock: "Discover every Tarot Card.",
            description: "Create a <span class=\"hl-purple\">Tarot</span> card when <span class=\"hl-orange\">Blind</span> is selected <br> <span style=\"color:#b1b1b1;\">(Must have room)</span>",
            price: "$6",
            rarity: "Uncommon",
            order: 141,
        },
        j_dusk: {
            name: "Dusk",
            description: "Retrigger all played cards in <span class=\"hl-orange\">final hand</span> of the round",
            price: "$5",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 27,
        },
        j_rocket: {
            name: "Rocket",
            description: "Earn <span class=\"hl-yellow\">$1</span> at end of round. Payout increases by <span class=\"hl-yellow\">$2</span> when <span class=\"hl-orange\">Boss Blind</span> is defeated",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 73,
        },
        j_sock_and_buskin: {
            name: "Sock and Buskin",
            unlock: "Play 300 face cards across all runs.",
            description: "Retrigger all played <span class=\"hl-orange\">face</span> cards",
            price: "$6",
            rarity: "Uncommon",
            order: 108,
        },
        j_steel_joker: {
            name: "Steel Joker",
            description: "Gives <span class=\"hl-xmult\">X0.2</span>&nbsp;Mult for each <span class=\"hl-orange\">Steel Card</span> in your <span class=\"hl-orange\">full deck</span> <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-xmult\">X1</span>&nbsp;Mult)</span>",
            price: "$7",
            rarity: "Uncommon",
            unlock: "Available from start. (Will not appear in the shop unless the player has a Steel Card in their deck.)",
            order: 31,
        },
        j_popcorn: {
            name: "Popcorn",
            description: "<span class=\"hl-mult\">+20</span>&nbsp;Mult <br> <span class=\"hl-mult\">-4</span>&nbsp;Mult per round played",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 96,
        },
        j_red_card: {
            name: "Red Card",
            description: "This Joker gains <span class=\"hl-mult\">+3</span>&nbsp;Mult when any <span class=\"hl-orange\">Booster Pack</span> is skipped <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-mult\">+0</span>&nbsp;Mult)</span>",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 62,
        },
        j_ice_cream: {
            name: "Ice Cream",
            description: "<span class=\"hl-chips\">+100</span>&nbsp;Chips<br><span class=\"hl-chips\">-5</span>&nbsp;Chips for every hand played",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 49,
        },
        j_smeared: {
            name: "Smeared Joker",
            unlock: "Have 3 or more Wild Cards in your deck.",
            description: "<span style=\"color:#f11b52;\">Hearts</span> and <span style=\"color:#f15a27;\">Diamonds</span> count as the same suit, <span style=\"color:#292189;\">Spades</span> and <span style=\"color:#074540;\">Clubs</span> count as the same suit",
            price: "$7",
            rarity: "Uncommon",
            order: 112,
        },
        j_hologram: {
            name: "Hologram",
            description: "This Joker gains <span class=\"hl-xmult\">X0.25</span>&nbsp;Mult every time a <span class=\"hl-orange\">playing card</span> is added to your deck <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-xmult\">X1</span>&nbsp;Mult)</span>",
            price: "$7",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 69,
        },
        j_midas_mask: {
            name: "Midas Mask",
            description: "All played <span class=\"hl-orange\">face</span> cards become <span class=\"hl-orange\">Gold</span> cards when scored",
            price: "$7",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 75,
        },
        j_clever: {
            name: "Clever Joker",
            description: "<span class=\"hl-chips\">+80</span>&nbsp;Chips if played hand contains a <span class=\"hl-hand\">Two Pair</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 12,
        },
        j_caino: {
            name: "Canio",
            unlock: "Find this Joker from the Soul card.",
            description: "This Joker gains <span class=\"hl-xmult\">X1</span>&nbsp;Mult when a <span class=\"hl-orange\">face</span> card is destroyed <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-xmult\">X1</span>&nbsp;Mult)</span>",
            price: "N/A",
            rarity: "Legendary",
            order: 145,
        },
        j_erosion: {
            name: "Erosion",
            description: "<span class=\"hl-mult\">+4</span>&nbsp;Mult for each card below <span class=\"hl-orange\">[the deck's starting size]</span> in your full deck <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-mult\">+0</span>&nbsp;Mult)</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 80,
        },
        j_turtle_bean: {
            name: "Turtle Bean",
            description: "<span class=\"hl-orange\">+5</span> hand size, reduces by <span class=\"hl-red\">1</span> each round",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 79,
        },
        j_smiley: {
            name: "Smiley Face",
            description: "Played <span class=\"hl-orange\">face</span> cards give <span class=\"hl-mult\">+5</span>&nbsp;Mult when scored",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 103,
        },
        j_juggler: {
            name: "Juggler",
            description: "<span class=\"hl-orange\">+1</span> hand size",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 86,
        },
        j_zany: {
            name: "Zany Joker",
            description: "<span class=\"hl-mult\">+12</span>&nbsp;Mult if played hand contains a <span class=\"hl-hand\">Three of a Kind</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 6,
        },
        j_8_ball: {
            name: "8 Ball",
            description: "<span class=\"hl-green\">1 in 4</span> chance for each played <span class=\"hl-orange\">8</span> to create a <span class=\"hl-purple\">Tarot</span> card when scored<br><span style=\"color:#b1b1b1;\">(Must have room)</span>",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 25,
        },
        j_oops: {
            name: "Oops! All 6s",
            unlock: "Earn at least 10,000 Chips in a single hand.",
            description: "Doubles all <span class=\"hl-orange\">listed</span> <span class=\"hl-green\">probabilities</span> <br> <span class=\"hl-grey\">(ex: <span class=\"hl-green\">1 in 3</span> -&gt; <span class=\"hl-green\">2 in 3</span>)</span>",
            price: "$4",
            rarity: "Uncommon",
            order: 125,
        },
        j_trading: {
            name: "Trading Card",
            description: "If <span class=\"hl-orange\">first discard</span> of round has only <span class=\"hl-orange\">1</span> card, destroy it and earn <span class=\"hl-yellow\">$3</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 94,
        },
        j_brainstorm: {
            name: "Brainstorm",
            unlock: "Discard a Royal Flush.",
            description: "Copies the ability of leftmost <strong><span class=\"hl-orange\">Joker</span></strong>",
            price: "$10",
            rarity: "Rare",
            order: 137,
        },
        j_trousers: {
            name: "Spare Trousers",
            description: "This Joker gains <span class=\"hl-mult\">+2</span>&nbsp;Mult if played hand contains a <span class=\"hl-orange\">Two Pair</span> <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-mult\">+0</span>&nbsp;Mult)</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 97,
        },
        j_riff_raff: {
            name: "Riff-Raff",
            description: "When <span class=\"hl-orange\">Blind</span> is selected, create <span class=\"hl-orange\">2</span> <span class=\"hl-blue\">Common</span> <span class=\"hl-orange\">Jokers</span> <br> <span style=\"color:#b1b1b1;\">(Must have room)</span>",
            price: "$6",
            rarity: "Common",
            unlock: "Available from start.",
            order: 66,
        },
        j_acrobat: {
            name: "Acrobat",
            unlock: "Play 200 hands",
            description: "<span class=\"hl-xmult\">X3</span>&nbsp;Mult on <span class=\"hl-orange\">final hand</span> of round",
            price: "$6",
            rarity: "Uncommon",
            order: 107,
        },
        j_wee: {
            name: "Wee Joker",
            unlock: "Win a run in 18 or fewer rounds.",
            description: "This Joker gains <span class=\"hl-chips\">+8</span>&nbsp;Chips when each played <span class=\"hl-orange\">2</span> is scored <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-chips\">+0 </span>&nbsp;Chips)</span>",
            price: "$8",
            rarity: "Rare",
            order: 123,
        },
        j_family: {
            name: "The Family",
            unlock: "Win a run without playing a Four of a Kind.",
            description: "<span class=\"hl-xmult\">X4</span>&nbsp;Mult if played hand contains a <span class=\"hl-hand\">Four of a Kind</span>",
            price: "$8",
            rarity: "Rare",
            order: 132,
        },
        j_burglar: {
            name: "Burglar",
            description: "When <span class=\"hl-orange\">Blind</span> is selected, gain <span class=\"hl-blue\">+3</span> Hands and <span class=\"hl-orange\">lose all discards</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 46,
        },
        j_runner: {
            name: "Runner",
            description: "Gains <span class=\"hl-chips\">+15</span>&nbsp;Chips if played hand contains a <span class=\"hl-hand\">Straight</span> <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-chips\">+0</span>&nbsp;Chips)</span>",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 48,
        },
        j_bloodstone: {
            name: "Bloodstone",
            unlock: "Have at least 30 Hearts in your deck.",
            description: "<span class=\"hl-green\">1 in 2</span> chance for played cards with <span style=\"color:#f11b52;\">Heart</span> suit to give <span class=\"hl-xmult\">X1.5</span>&nbsp;Mult when scored",
            price: "$7",
            rarity: "Uncommon",
            order: 116,
        },
        j_delayed_grat: {
            name: "Delayed Gratification",
            description: "Earn <span class=\"hl-yellow\">$2</span> per <span class=\"hl-orange\">discard</span> if no discards are used by end of the round",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 34,
        },
        j_loyalty_card: {
            name: "Loyalty Card",
            description: "<span class=\"hl-xmult\">X4</span>&nbsp;Mult every <span class=\"hl-orange\">6</span> hands played<br><span class=\"hl-grey\">5 remaining</span>",
            price: "$5",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 24,
        },
        j_sixth_sense: {
            name: "Sixth Sense",
            description: "If <span class=\"hl-orange\">first hand</span> of round is a single <span class=\"hl-orange\">6</span>, destroy it and create a <span class=\"hl-sblue\">Spectral</span> card <br> <span style=\"color:#b1b1b1;\">(Must have room)</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 53,
        },
        j_gros_michel: {
            name: "Gros Michel",
            description: "<span class=\"hl-mult\">+15</span>&nbsp;Mult<br><span class=\"hl-green\">1 in 6</span> chance this is destroyed at the end of round.",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 37,
        },
        j_fibonacci: {
            name: "Fibonacci",
            description: "Each played <span class=\"hl-orange\">Ace</span>, <span class=\"hl-orange\">2</span>, <span class=\"hl-orange\">3</span>, <span class=\"hl-orange\">5</span>, or <span class=\"hl-orange\">8</span> gives <span class=\"hl-mult\">+8</span>&nbsp;Mult when scored",
            price: "$8",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 30,
        },
        j_abstract: {
            name: "Abstract Joker",
            description: "<span class=\"hl-mult\">+3</span>&nbsp;Mult for each <strong><span class=\"hl-orange\">Joker</span></strong> card <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-mult\">+0</span>&nbsp;Mult)</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 33,
        },
        j_baron: {
            name: "Baron",
            description: "Each <span class=\"hl-orange\">King</span> held in hand gives <span class=\"hl-xmult\">X1.5</span>&nbsp;Mult",
            price: "$8",
            rarity: "Rare",
            unlock: "Available from start.",
            order: 71,
        },
        j_banner: {
            name: "Banner",
            description: "<span class=\"hl-chips\">+30</span>&nbsp;Chips for each remaining <span class=\"hl-orange\">discard</span>",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 21,
        },
        j_astronomer: {
            name: "Astronomer",
            unlock: "Discover all Planet cards.",
            description: "All <span class=\"hl-blue\">Planet</span> cards and <span class=\"hl-blue\">Celestial Packs</span> in the shop are <span class=\"hl-orange\">free</span>",
            price: "$8",
            rarity: "Uncommon",
            order: 142,
        },
        j_mystic_summit: {
            name: "Mystic Summit",
            description: "<span class=\"hl-mult\">+15</span>&nbsp;Mult when <span class=\"hl-orange\">0</span> discards remaining",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 22,
        },
        j_chaos: {
            name: "Chaos the Clown",
            description: "<span class=\"hl-orange\">1</span> free <span class=\"hl-green\">Reroll</span> per shop",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 29,
        },
        j_burnt: {
            name: "Burnt Joker",
            unlock: "Sell 50 cards.",
            description: "Upgrade the level of the first <span class=\"hl-orange\">discarded</span> poker hand each round",
            price: "$8",
            rarity: "Rare",
            order: 143,
        },
        j_drivers_license: {
            name: "Driver's License",
            unlock: "Enhance 16 cards in your deck",
            description: "<span class=\"hl-xmult\">X3</span>&nbsp;Mult if you have at least <span class=\"hl-orange\">16</span> Enhanced cards in your full deck <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-orange\">0</span>)</span>",
            price: "$7",
            rarity: "Rare",
            order: 140,
        },
        j_cavendish: {
            name: "Cavendish",
            description: "<span class=\"hl-xmult\">X3</span>&nbsp;Mult <br> <span class=\"hl-green\">1 in 1000</span> chance this card is destroyed at the end of round",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start. (Will not appear in the shop unless  Gros Michel has destroyed itself during the current run.)",
            order: 60,
        },
        j_photograph: {
            name: "Photograph",
            description: "First played <span class=\"hl-orange\">face</span> card gives <span class=\"hl-xmult\">X2</span>&nbsp;Mult when scored",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 77,
        },
        j_misprint: {
            name: "Misprint",
            description: "<span class=\"hl-mult\">+0-23</span>&nbsp;Mult",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 26,
        },
        j_cloud_9: {
            name: "Cloud 9",
            description: "Earn <span class=\"hl-yellow\">$1</span> for each <span class=\"hl-orange\">9</span> in your <span class=\"hl-orange\">full deck</span> at end of round <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-yellow\">$4</span>)</span>",
            price: "$7",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 72,
        },
        j_wrathful_joker: {
            name: "Wrathful Joker",
            description: "Played cards with <span style=\"color:#292189;\">Spade</span> suit give <span class=\"hl-mult\">+3</span>&nbsp;Mult when scored",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 3,
        },
        j_wily: {
            name: "Wily Joker",
            description: "<span class=\"hl-chips\">+100</span>&nbsp;Chips if played hand contains a <span class=\"hl-hand\">Three of a Kind</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 11,
        },
        j_invisible: {
            name: "Invisible Joker",
            unlock: "Win a game while never having more than 4 jokers.",
            description: "After <span class=\"hl-orange\">2</span> rounds, sell this card to <span class=\"hl-orange\">Duplicate</span> a random Joker <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-orange\">0</span>/2)</span> <br> <span class=\"hl-gray\">(Removes <span class=\"hl-sblue\">Negative</span> from copy)</span>",
            price: "$8",
            rarity: "Rare",
            order: 136,
        },
        j_ride_the_bus: {
            name: "Ride the Bus",
            description: "This Joker gains <span class=\"hl-mult\">+1</span>&nbsp;Mult per <span class=\"hl-orange\">consecutive</span> hand played without a scoring <span class=\"hl-orange\">face</span> card <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-mult\">+0</span>&nbsp;Mult)</span>",
            price: "$6",
            rarity: "Common",
            unlock: "Available from start.",
            order: 43,
        },
        j_onyx_agate: {
            name: "Onyx Agate",
            unlock: "Have at least 30 Clubs in your deck",
            description: "Played cards with <span style=\"color:#074540;\">Club</span> suit give <span class=\"hl-mult\">+7</span>&nbsp;Mult when scored",
            price: "$7",
            rarity: "Uncommon",
            order: 118,
        },
        j_troubadour: {
            name: "Troubadour",
            unlock: "Win 5 consecutive rounds by playing only a single hand in each. (Discards are fine.)",
            description: "<span class=\"hl-orange\">+2</span> hand size, <br> <span class=\"hl-blue\">-1</span> hand per round",
            price: "$6",
            rarity: "Uncommon",
            order: 110,
        },
        j_ceremonial: {
            name: "Ceremonial Dagger",
            description: "When <span class=\"hl-orange\">Blind</span> is selected, destroy <strong>Joker</strong> to the right and permanently add <span class=\"hl-orange\">double</span> its sell value to this <span class=\"hl-red\">Mult</span> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-mult\">+0</span>&nbsp;Mult)</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 20,
        },
        j_mime: {
            name: "Mime",
            description: "Retrigger all card <span class=\"hl-orange\">held in hand</span> abilities",
            price: "$5",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 18,
        },
        j_bootstraps: {
            name: "Bootstraps",
            unlock: "Have at least 2 Polychrome Jokers at the same time.",
            description: "<span class=\"hl-mult\">+2</span>&nbsp;Mult for every <span class=\"hl-yellow\">$5</span> you have <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-mult\">+0</span>&nbsp;Mult)</span>",
            price: "$7",
            rarity: "Uncommon",
            order: 144,
        },
        j_droll: {
            name: "Droll Joker",
            description: "<span class=\"hl-mult\">+10</span>&nbsp;Mult if played hand contains a <span class=\"hl-hand\">Flush</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 9,
        },
        j_trio: {
            name: "The Trio",
            unlock: "Win a run without playing a Three of a Kind.",
            description: "<span class=\"hl-xmult\">X3</span>&nbsp;Mult if played hand contains a <span class=\"hl-hand\">Three of a Kind</span>",
            price: "$8",
            rarity: "Rare",
            order: 131,
        },
        j_yorick: {
            name: "Yorick",
            unlock: "Find this Joker from the Soul card.",
            description: "This Joker gains <span class=\"hl-xmult\">X1</span>&nbsp;Mult every <span class=\"hl-orange\">23</span> <span class=\"hl-gray\">[23]</span> cards discarded<br><span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-xmult\">X1</span>&nbsp;Mult)</span>",
            price: "N/A",
            rarity: "Legendary",
            order: 147,
        },
        j_odd_todd: {
            name: "Odd Todd",
            description: "Played cards with <span class=\"hl-orange\">odd</span> rank give <span class=\"hl-chips\">+31</span>&nbsp;Chips when scored <br> <span class=\"hl-gray\">(A, 9, 7, 5, 3)</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 39,
        },
        j_faceless: {
            name: "Faceless Joker",
            description: "Earn <span class=\"hl-yellow\">$5</span> if <span class=\"hl-orange\">3</span> or more <span class=\"hl-orange\">face cards</span> are discarded at the same time",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 56,
        },
        j_crafty: {
            name: "Crafty Joker",
            description: "<span class=\"hl-chips\">+80</span>&nbsp;Chips if played hand contains a <span class=\"hl-hand\">Flush</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 14,
        },
        j_scary_face: {
            name: "Scary Face",
            description: "Played <span class=\"hl-orange\">face</span> cards give <span class=\"hl-chips\">+30</span>&nbsp;Chips when scored",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 32,
        },
        j_joker: {
            name: "Joker",
            description: "<span class=\"hl-mult\">+4</span>&nbsp;Mult",
            price: "$2",
            rarity: "Common",
            unlock: "Available from start.",
            order: 0,
        },
        j_to_the_moon: {
            name: "To the Moon",
            description: "Earn an extra <span class=\"hl-yellow\">$1</span> of <span class=\"hl-orange\">interest</span> for every <span class=\"hl-yellow\">$5</span> you have at end of round",
            price: "$5",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 83,
        },
        j_ticket: {
            name: "Golden Ticket",
            unlock: "Play a 5 card hand that contains only Gold cards. (The player must also have a Gold Card in their deck for it to appear in the shop.)",
            description: "Played <span class=\"hl-orange\">Gold</span> cards earn <span class=\"hl-yellow\">$4</span> when scored",
            price: "$5",
            rarity: "Common",
            order: 105,
        },
        j_throwback: {
            name: "Throwback",
            unlock: "Continue a run from the Main Menu.",
            description: "<span class=\"hl-xmult\">X0.25</span>&nbsp;Mult for each <span class=\"hl-orange\">Blind</span> skipped this run <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-xmult\">X1</span>&nbsp;Mult)</span>",
            price: "$6",
            rarity: "Uncommon",
            order: 113,
        },
        j_marble: {
            name: "Marble Joker",
            description: "Adds one <span class=\"hl-orange\">Stone</span> card to the deck when <span class=\"hl-orange\">Blind</span> is selected",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 23,
        },
        j_certificate: {
            name: "Certificate",
            unlock: "Have a Gold card with a Gold Seal.",
            description: "When round begins, add a random <span class=\"hl-orange\">playing card</span> with a random <span class=\"hl-orange\">seal</span> to your hand",
            price: "$6",
            rarity: "Uncommon",
            order: 111,
        },
        j_swashbuckler: {
            name: "Swashbuckler",
            unlock: "Sell 20 Jokers.",
            description: "Adds the sell value of all other owned <strong><span class=\"hl-orange\">Jokers</span></strong> to Mult <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-mult\">+1</span>&nbsp;Mult)</span>",
            price: "$4",
            rarity: "Common",
            order: 109,
        },
        j_diet_cola: {
            name: "Diet Cola",
            description: "Sell this card to create a free <span class=\"hl-orange\">Double Tag</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 93,
        },
        j_superposition: {
            name: "Superposition",
            description: "Create a <span class=\"hl-purple\">Tarot</span> card if poker hand contains an <span class=\"hl-orange\">Ace</span> and a <span class=\"hl-hand\">Straight</span> <br> <span style=\"color:#b1b1b1;\">(Must have room)</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 58,
        },
        j_campfire: {
            name: "Campfire",
            description: "This Joker gains <span class=\"hl-xmult\">X0.25</span>&nbsp;Mult for each card <span class=\"hl-orange\">sold</span>, resets when <span class=\"hl-orange\">Boss Blind</span> is defeated <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-xmult\">X1</span>&nbsp;Mult)</span>",
            price: "$9",
            rarity: "Rare",
            unlock: "Available from start.",
            order: 104,
        },
        j_supernova: {
            name: "Supernova",
            description: "Adds the number of times <span class=\"hl-orange\">poker hand</span> has been played this run to Mult",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 42,
        },
        j_stuntman: {
            name: "Stuntman",
            unlock: "Earn at least 100 million (100,000,000) Chips in a single hand.",
            description: "<span class=\"hl-chips\">+250</span>&nbsp;Chips,<br><span class=\"hl-orange\">-2</span> hand size",
            price: "$7",
            rarity: "Rare",
            order: 135,
        },
        j_fortune_teller: {
            name: "Fortune Teller",
            description: "<span class=\"hl-mult\">+1</span>&nbsp;Mult per <span class=\"hl-purple\">Tarot</span> card used this run <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-red\">+0</span>)</span>",
            price: "$6",
            rarity: "Common",
            unlock: "Available from start.",
            order: 85,
        },
        j_devious: {
            name: "Devious Joker",
            description: "<span class=\"hl-chips\">+100</span>&nbsp;Chips if played hand contains a <span class=\"hl-hand\">Straight</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 13,
        },
        j_ramen: {
            name: "Ramen",
            description: "<span class=\"hl-xmult\">X2</span>&nbsp;Mult, loses <span class=\"hl-xmult\">X0.01</span>&nbsp;Mult per <span class=\"hl-orange\">card</span> discarded",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 99,
        },
        j_stencil: {
            name: "Joker Stencil",
            description: "<span class=\"hl-xmult\">X1</span>&nbsp;Mult for each empty <strong><span class=\"hl-orange\">Joker</span></strong> slot. Joker Stencil included <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-xmult\">X1</span>&nbsp;Mult)</span>",
            price: "$8",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 16,
        },
        j_blueprint: {
            name: "Blueprint",
            unlock: "Win 1 run.",
            description: "Copies ability of <strong><span class=\"hl-orange\">Joker</span></strong> to the right",
            price: "$10",
            rarity: "Rare",
            order: 122,
        },
        j_square: {
            name: "Square Joker",
            description: "This Joker gains <span class=\"hl-chips\">+4</span>&nbsp;Chips if played hand has exactly <span class=\"hl-orange\">4</span> cards <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-chips\">0</span>&nbsp;Chips)</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 64,
        },
        j_splash: {
            name: "Splash",
            description: "Every <span class=\"hl-orange\">played card</span> counts in scoring",
            price: "$3",
            rarity: "Common",
            unlock: "Available from start.",
            order: 51,
        },
        j_idol: {
            name: "The Idol",
            unlock: "In one hand, earn at least 1,000,000 Chips.",
            description: "Each played <span class=\"hl-orange\">[rank]</span> of <span class=\"hl-orange\">[suit]</span> gives <span class=\"hl-xmult\">X2</span>&nbsp;Mult when scored<br><small>Card changes every round<small></small></small>",
            price: "$6",
            rarity: "Uncommon",
            order: 126,
        },
        j_shoot_the_moon: {
            name: "Shoot the Moon",
            unlock: "Play every Heart card in your deck in one round.",
            description: "Each <span class=\"hl-orange\">Queen</span> held in hand gives <span class=\"hl-mult\">+13</span>&nbsp;Mult",
            price: "$5",
            rarity: "Common",
            order: 139,
        },
        j_sly: {
            name: "Sly Joker",
            description: "<span class=\"hl-chips\">+50</span>&nbsp;Chips if played hand contains a <span class=\"hl-hand\">Pair</span>",
            price: "$3",
            rarity: "Common",
            unlock: "Available from start.",
            order: 10,
        },
        j_golden: {
            name: "Golden Joker",
            description: "Earn <span class=\"hl-yellow\">$4</span> at end of round",
            price: "$6",
            rarity: "Common",
            unlock: "Available from start.",
            order: 89,
        },
        j_credit_card: {
            name: "Credit Card",
            description: "Go up to <span class=\"hl-red\">-$20</span> in debt",
            price: "$1",
            rarity: "Common",
            unlock: "Available from start.",
            order: 19,
        },
        j_matador: {
            name: "Matador",
            unlock: "Defeat a Boss Blind in one hand, without using discards.",
            description: "Earn <span class=\"hl-yellow\">$8</span> if played hand triggers the <span class=\"hl-orange\">Boss Blind</span> ability",
            price: "$7",
            rarity: "Uncommon",
            order: 128,
        },
        j_jolly: {
            name: "Jolly Joker",
            description: "<span class=\"hl-mult\">+8</span>&nbsp;Mult if played hand contains a <span class=\"hl-hand\">Pair</span>",
            price: "$3",
            rarity: "Common",
            unlock: "Available from start.",
            order: 5,
        },
        j_selzer: {
            name: "Seltzer",
            description: "Retrigger all cards played for the next <span class=\"hl-orange\">10</span> hands",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 101,
        },
        j_order: {
            name: "The Order",
            unlock: "Win a run without playing a Straight.",
            description: "<span class=\"hl-xmult\">X3</span>&nbsp;Mult if played hand contains a <span class=\"hl-hand\">Straight</span>",
            price: "$8",
            rarity: "Rare",
            order: 133,
        },
        j_lusty_joker: {
            name: "Lusty Joker",
            description: "Played cards with <span style=\"color:#f11b52;\">Heart</span> suit give <span class=\"hl-mult\">+3</span>&nbsp;Mult when scored",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 2,
        },
        j_seeing_double: {
            name: "Seeing Double",
            unlock: "Play a hand that contains four 7 of Clubs.\nOther suits that count as clubs (e.g. wild suits) with rank 7 will also count.",
            description: "<span class=\"hl-xmult\">X2</span>&nbsp;Mult if played hand has a scoring <span style=\"color:#074540;\">Club</span> card and a scoring card of any other suit",
            price: "$6",
            rarity: "Uncommon",
            order: 127,
        },
        j_scholar: {
            name: "Scholar",
            description: "Played <span class=\"hl-orange\">Aces</span> give <span class=\"hl-chips\">+20</span>&nbsp;Chips and <span class=\"hl-mult\">+4</span>&nbsp;Mult when scored",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 40,
        },
        j_todo_list: {
            name: "To Do List",
            description: "Earn <span class=\"hl-yellow\">$4</span> if <span class=\"hl-orange\">poker hand</span> is a <span class=\"hl-orange\">[Poker&nbsp;Hand]</span>, poker hand changes at end of round",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 59,
        },
        j_raised_fist: {
            name: "Raised Fist",
            description: "Adds <span class=\"hl-orange\">double</span> the rank of <span class=\"hl-orange\">lowest</span> ranked card held in hand to Mult",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 28,
        },
        j_greedy_joker: {
            name: "Greedy Joker",
            description: "Played cards with <span style=\"color:#f15a27;\">Diamond</span> suit give <span class=\"hl-mult\">+3</span>&nbsp;Mult when scored",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 1,
        },
        j_reserved_parking: {
            name: "Reserved Parking",
            description: "Each <span class=\"hl-orange\">face</span> card held in hand has a <span class=\"hl-green\">1 in 2</span> chance to give <span class=\"hl-yellow\">$1</span>",
            price: "$6",
            rarity: "Common",
            unlock: "Available from start.",
            order: 81,
        },
        j_satellite: {
            name: "Satellite",
            unlock: "Have at least $400.",
            description: "Earn <span class=\"hl-yellow\">$1</span> at end of round per unique <span class=\"hl-blue\">Planet</span> card used this run",
            price: "$6",
            rarity: "Uncommon",
            order: 138,
        },
        j_castle: {
            name: "Castle",
            description: "This Joker gains <span class=\"hl-chips\">+3</span>&nbsp;Chips per discarded <span class=\"hl-orange\">[suit]</span> card, suit changes every round <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-chips\">+0</span>&nbsp;Chips)</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 102,
        },
        j_perkeo: {
            name: "Perkeo",
            unlock: "Find this Joker from the Soul card.",
            description: "Creates a <span class=\"hl-sblue\">Negative</span> copy of <span class=\"hl-orange\">1</span> random <span class=\"hl-orange\">consumable</span> card in your possession at the end of the <span class=\"hl-orange\">shop</span>",
            price: "N/A",
            rarity: "Legendary",
            order: 149,
        },
        j_blackboard: {
            name: "Blackboard",
            description: "<span class=\"hl-xmult\">X3</span>&nbsp;Mult if all cards held in hand are <span style=\"color:#292189;\">Spades</span> or <span style=\"color:#074540;\">Clubs</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 47,
        },
        j_pareidolia: {
            name: "Pareidolia",
            description: "All cards are considered <span class=\"hl-orange\">face</span> cards",
            price: "$5",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 36,
        },
        j_vagabond: {
            name: "Vagabond",
            description: "Create a <span class=\"hl-purple\">Tarot</span> card if hand is played with <span class=\"hl-yellow\">$4</span> or less",
            price: "$8",
            rarity: "Rare",
            unlock: "Available from start.",
            order: 70,
        },
        j_card_sharp: {
            name: "Card Sharp",
            description: "<span class=\"hl-xmult\">X3</span>&nbsp;Mult if played <span class=\"hl-orange\">poker hand</span> has already been played this round",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 61,
        },
        j_tribe: {
            name: "The Tribe",
            unlock: "Win a run without playing a Flush.",
            description: "<span class=\"hl-xmult\">X2</span>&nbsp;Mult if played hand contains a <span class=\"hl-hand\">Flush</span>",
            price: "$8",
            rarity: "Rare",
            order: 134,
        },
        j_mr_bones: {
            name: "Mr. Bones",
            unlock: "Lose five runs.",
            description: "Prevents Death if chips scored are at least <span class=\"hl-orange\">25%</span> of required chips <br> <span class=\"hl-red\">self destructs</span>",
            price: "$5",
            rarity: "Uncommon",
            order: 106,
        },
        j_triboulet: {
            name: "Triboulet",
            unlock: "Find this Joker from the Soul card.",
            description: "Played Kings and Queens each give <span class=\"hl-xmult\">X2</span>&nbsp;Mult when scored",
            price: "N/A",
            rarity: "Legendary",
            order: 146,
        },
        j_shortcut: {
            name: "Shortcut",
            description: "Allows <span class=\"hl-hand\">Straights</span> to be made with gaps of <span class=\"hl-orange\">1 rank</span> <br> <span class=\"hl-gray\">(ex: <span class=\"hl-orange\">10 8 6 5 3</span>)</span>",
            price: "$7",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 68,
        },
        j_mail: {
            name: "Mail-In Rebate",
            description: "Earn <span class=\"hl-yellow\">$5</span> for each discarded <span class=\"hl-orange\">[rank]</span>, rank changes every round",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 82,
        },
        j_madness: {
            name: "Madness",
            description: "When <span class=\"hl-orange\">Small Blind</span> or <span class=\"hl-orange\">Big Blind</span> is selected, gain <span class=\"hl-xmult\">X0.5</span>&nbsp;Mult and <span class=\"hl-orange\">destroy</span> a random Joker <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-xmult\">X1</span>&nbsp;Mult)</span>",
            price: "$7",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 63,
        },
        j_mad: {
            name: "Mad Joker",
            description: "<span class=\"hl-mult\">+10</span>&nbsp;Mult if played hand contains a <span class=\"hl-hand\">Two Pair</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 7,
        },
        j_gluttenous_joker: {
            name: "Gluttonous Joker",
            description: "Played cards with <span style=\"color:#074540;\">Club</span> suit give <span class=\"hl-mult\">+3</span>&nbsp;Mult when scored",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 4,
        },
        j_hiker: {
            name: "Hiker",
            description: "Every played <span class=\"hl-orange\">card</span> permanently gains <span class=\"hl-chips\">+5</span>&nbsp;Chips when scored",
            price: "$5",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 55,
        },
        j_blue_joker: {
            name: "Blue Joker",
            description: "<span class=\"hl-chips\">+2</span>&nbsp;Chips for each remaining card in <span class=\"hl-orange\">deck</span> <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-chips\">+104</span>&nbsp;Chips)</span>",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 52,
        },
        j_lucky_cat: {
            name: "Lucky Cat",
            description: "This Joker gains <span class=\"hl-xmult\">X0.25</span>&nbsp;Mult every time a <span class=\"hl-orange\">Lucky</span> card <span class=\"hl-green\">successfully</span> triggers <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-xmult\">X1</span>&nbsp;Mult)</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start. (Will not appear in the shop unless the player has a Lucky Card in their deck.)",
            order: 90,
        },
        j_luchador: {
            name: "Luchador",
            description: "Sell this card to disable the current <span class=\"hl-orange\">Boss Blind</span>",
            price: "$5",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 76,
        },
        j_merry_andy: {
            name: "Merry Andy",
            unlock: "Win a run in 12 or fewer rounds",
            description: "<span class=\"hl-red\">+3</span> discards each round, <br><span class=\"hl-red\">-1</span> hand size",
            price: "$7",
            rarity: "Uncommon",
            order: 124,
        },
        j_vampire: {
            name: "Vampire",
            description: "This Joker gains <span class=\"hl-xmult\">X0.1</span>&nbsp;Mult per scoring <span class=\"hl-orange\">Enhanced card</span> played, removes card <span class=\"hl-orange\">Enhancement</span> <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-xmult\">X1</span>&nbsp;Mult)</span>",
            price: "$7",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 67,
        },
        j_space: {
            name: "Space Joker",
            description: "<span class=\"hl-green\">1 in 4</span> chance to upgrade level of played <span class=\"hl-orange\">poker hand</span>",
            price: "$5",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 44,
        },
        j_hit_the_road: {
            name: "Hit the Road",
            unlock: "Discard 5 Jacks at the same time.",
            description: "This Joker gains <span class=\"hl-xmult\">X0.5</span>&nbsp;Mult for every <span class=\"hl-orange\">Jack</span> discarded this round <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-xmult\">X1</span>&nbsp;Mult)</span>",
            price: "$8",
            rarity: "Rare",
            order: 129,
        },
        j_half: {
            name: "Half Joker",
            description: "<span class=\"hl-mult\">+20</span>&nbsp;Mult if played hand contains <span class=\"hl-orange\">3</span> or fewer cards.",
            price: "$5",
            rarity: "Common",
            unlock: "Available from start.",
            order: 15,
        },
        j_green_joker: {
            name: "Green Joker",
            description: "<span class=\"hl-mult\">+1</span>&nbsp;Mult per hand played <br> <span class=\"hl-mult\">-1</span>&nbsp;Mult per discard <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-mult\">+0</span>&nbsp;Mult)</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 57,
        },
        j_ring_master: {
            name: "Showman",
            unlock: "Reach Ante level 4",
            description: "<strong><span class=\"hl-orange\">Joker</span></strong>, <span class=\"hl-purple\">Tarot</span>, <span class=\"hl-cyan\">Planet</span>, and <span class=\"hl-sblue\">Spectral</span> cards may appear multiple times",
            price: "$5",
            rarity: "Uncommon",
            order: 120,
        },
        j_even_steven: {
            name: "Even Steven",
            description: "Played cards with <span class=\"hl-orange\">even</span> rank give <span class=\"hl-mult\">+4</span>&nbsp;Mult when scored <br> <span class=\"hl-gray\">(10, 8, 6, 4, 2)</span>",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 38,
        },
        j_arrowhead: {
            name: "Arrowhead",
            unlock: "Have at least 30 Spades in your deck.",
            description: "Played cards with <span style=\"color:#292189;\">Spade</span> suit give <span class=\"hl-chips\">+50</span>&nbsp;Chips when scored",
            price: "$7",
            rarity: "Uncommon",
            order: 117,
        },
        j_glass: {
            name: "Glass Joker",
            unlock: "Have 5 or more Glass cards in your deck. (The player must also have a Glass Card in their deck for it to appear in the shop.)",
            description: "This Joker gains <span class=\"hl-xmult\">X0.75</span>&nbsp;Mult for every <span class=\"hl-orange\">Glass Card</span> that is destroyed <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-xmult\">X1</span>&nbsp;Mult)</span>",
            price: "$6",
            rarity: "Uncommon",
            order: 119,
        },
        j_stone: {
            name: "Stone Joker",
            description: "Gives <span class=\"hl-chips\">+25</span>&nbsp;Chips for each <span class=\"hl-orange\">Stone Card</span> in your <span class=\"hl-orange\">full deck</span> <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-chips\">+0</span>&nbsp;Chips)</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start. (Will not appear in the shop unless the player has a Stone Card in their deck.)",
            order: 88,
        },
        j_duo: {
            name: "The Duo",
            unlock: "Win a run without playing a Pair.",
            description: "<span class=\"hl-xmult\">X2</span>&nbsp;Mult if played hand contains a <span class=\"hl-hand\">Pair</span>",
            price: "$8",
            rarity: "Rare",
            order: 130,
        },
        j_drunkard: {
            name: "Drunkard",
            description: "<span class=\"hl-red\">+1</span> discard each round",
            price: "$4",
            rarity: "Common",
            unlock: "Available from start.",
            order: 87,
        },
        j_constellation: {
            name: "Constellation",
            description: "This Joker gains <span class=\"hl-xmult\">X0.1</span>&nbsp;Mult every time a <span class=\"hl-cyan\">Planet</span> card is used <br> <span style=\"color:#b1b1b1;\">(Currently <span class=\"hl-xmult\">X1</span>&nbsp;Mult)</span>",
            price: "$6",
            rarity: "Uncommon",
            unlock: "Available from start.",
            order: 54,
        },
    },
    Planet: {
        c_neptune: {
            name: "Neptune",
            text: [
                "{S:0.8}({S:0.8,V:1}lvl.#1#{S:0.8}){} Level up",
                "{C:attention}#2#",
                "{C:mult}+#3#{} Mult and",
                "{C:chips}+#4#{} chips",
            ],
        },
        c_jupiter: {
            name: "Jupiter",
            text: [
                "{S:0.8}({S:0.8,V:1}lvl.#1#{S:0.8}){} Level up",
                "{C:attention}#2#",
                "{C:mult}+#3#{} Mult and",
                "{C:chips}+#4#{} chips",
            ],
        },
        c_mercury: {
            name: "Mercury",
            text: [
                "{S:0.8}({S:0.8,V:1}lvl.#1#{S:0.8}){} Level up",
                "{C:attention}#2#",
                "{C:mult}+#3#{} Mult and",
                "{C:chips}+#4#{} chips",
            ],
        },
        c_planet_x: {
            name: "Planet X",
            text: [
                "{S:0.8}({S:0.8,V:1}lvl.#1#{S:0.8}){} Level up",
                "{C:attention}#2#",
                "{C:mult}+#3#{} Mult and",
                "{C:chips}+#4#{} chips",
            ],
        },
        c_ceres: {
            name: "Ceres",
            text: [
                "{S:0.8}({S:0.8,V:1}lvl.#1#{S:0.8}){} Level up",
                "{C:attention}#2#",
                "{C:mult}+#3#{} Mult and",
                "{C:chips}+#4#{} chips",
            ],
        },
        c_uranus: {
            name: "Uranus",
            text: [
                "{S:0.8}({S:0.8,V:1}lvl.#1#{S:0.8}){} Level up",
                "{C:attention}#2#",
                "{C:mult}+#3#{} Mult and",
                "{C:chips}+#4#{} chips",
            ],
        },
        c_venus: {
            name: "Venus",
            text: [
                "{S:0.8}({S:0.8,V:1}lvl.#1#{S:0.8}){} Level up",
                "{C:attention}#2#",
                "{C:mult}+#3#{} Mult and",
                "{C:chips}+#4#{} chips",
            ],
        },
        c_saturn: {
            name: "Saturn",
            text: [
                "{S:0.8}({S:0.8,V:1}lvl.#1#{S:0.8}){} Level up",
                "{C:attention}#2#",
                "{C:mult}+#3#{} Mult and",
                "{C:chips}+#4#{} chips",
            ],
        },
        c_pluto: {
            name: "Pluto",
            text: [
                "{S:0.8}({S:0.8,V:1}lvl.#1#{S:0.8}){} Level up",
                "{C:attention}#2#",
                "{C:mult}+#3#{} Mult and",
                "{C:chips}+#4#{} chips",
            ],
        },
        c_mars: {
            name: "Mars",
            text: [
                "{S:0.8}({S:0.8,V:1}lvl.#1#{S:0.8}){} Level up",
                "{C:attention}#2#",
                "{C:mult}+#3#{} Mult and",
                "{C:chips}+#4#{} chips",
            ],
        },
        c_earth: {
            name: "Earth",
            text: [
                "{S:0.8}({S:0.8,V:1}lvl.#1#{S:0.8}){} Level up",
                "{C:attention}#2#",
                "{C:mult}+#3#{} Mult and",
                "{C:chips}+#4#{} chips",
            ],
        },
        c_eris: {
            name: "Eris",
            text: [
                "{S:0.8}({S:0.8,V:1}lvl.#1#{S:0.8}){} Level up",
                "{C:attention}#2#",
                "{C:mult}+#3#{} Mult and",
                "{C:chips}+#4#{} chips",
            ],
        },
    },
    Voucher: {
        v_wasteful: {
            name: "Wasteful",
            text: [
                "Permanently",
                "gain {C:red}+#1#{} discard",
                "each round",
            ],
        },
        v_hone: {
            name: "Hone",
            text: [
                "{C:dark_edition}Foil{}, {C:dark_edition}Holographic{}, and",
                "{C:dark_edition}Polychrome{} cards",
                "appear {C:attention}#1#X{} more often",
            ],
        },
        v_observatory: {
            text: [
                "{C:planet}Planet{} cards in your",
                "{C:attention}consumable{} area give",
                "{X:red,C:white} X#1# {} Mult for their",
                "specified {C:attention}poker hand",
            ],
            name: "Observatory",
            unlock: [
                "Use a total of {C:attention}#1#",
                "{C:planet}Planet{} cards from any",
                "{C:planet}Celestial Pack",
                "{C:inactive}(#2#)",
            ],
        },
        v_planet_merchant: {
            name: "Planet Merchant",
            text: [
                "{C:planet}Planet{} cards appear",
                "{C:attention}#1#X{} more frequently",
                "in the shop",
            ],
        },
        v_tarot_tycoon: {
            text: [
                "{C:tarot}Tarot{} cards appear",
                "{C:attention}#1#X{} more frequently",
                "in the shop",
            ],
            name: "Tarot Tycoon",
            unlock: [
                "Buy a total of",
                "{C:attention}#1#{C:tarot} Tarot{} cards",
                "from the shop",
                "{C:inactive}(#2#)",
            ],
        },
        v_tarot_merchant: {
            name: "Tarot Merchant",
            text: [
                "{C:tarot}Tarot{} cards appear",
                "{C:attention}#1#X{} more frequently",
                "in the shop",
            ],
        },
        v_seed_money: {
            name: "Seed Money",
            text: [
                "Raise the cap on",
                "interest earned in",
                "each round to {C:money}$#1#{}",
            ],
        },
        v_money_tree: {
            text: [
                "Raise the cap on",
                "interest earned in",
                "each round to {C:money}$#1#{}",
            ],
            name: "Money Tree",
            unlock: [
                "Max out the interest",
                "per round earnings for",
                "{C:attention}#1#{} consecutive rounds",
                "{C:inactive}(#2#)",
            ],
        },
        v_antimatter: {
            text: [
                "{C:dark_edition}+1{} Joker Slot",
            ],
            name: "Antimatter",
            unlock: [
                "Redeem {C:voucher}Blank{}",
                "{C:attention}#1#{} total times",
                "{C:inactive}(#2#)",
            ],
        },
        v_telescope: {
            name: "Telescope",
            text: [
                "{C:attention}Celestial Packs{} always",
                "contain the {C:planet}Planet{}",
                "card for your most",
                "played {C:attention}poker hand",
            ],
        },
        v_nacho_tong: {
            text: [
                "Permanently",
                "gain {C:blue}+#1#{} hand",
                "per round",
            ],
            name: "Nacho Tong",
            unlock: [
                "Play a total",
                "of {C:attention}#1#{} cards",
                "{C:inactive}(#2#)",
            ],
        },
        v_reroll_surplus: {
            name: "Reroll Surplus",
            text: [
                "Rerolls cost",
                "{C:money}$#1#{} less",
            ],
        },
        v_clearance_sale: {
            name: "Clearance Sale",
            text: [
                "All cards and packs in",
                "shop are {C:attention}#1#%{} off",
            ],
        },
        v_reroll_glut: {
            text: [
                "Rerolls cost",
                "{C:money}$#1#{} less",
            ],
            name: "Reroll Glut",
            unlock: [
                "Reroll the shop a",
                "total of {C:attention}#1#{} times",
                "{C:inactive}(#2#)",
            ],
        },
        v_glow_up: {
            text: [
                "{C:dark_edition}Foil{}, {C:dark_edition}Holographic{}, and",
                "{C:dark_edition}Polychrome{} cards",
                "appear {C:attention}#1#X{} more often",
            ],
            name: "Glow Up",
            unlock: [
                "Have at least {C:attention}#1#",
                "{C:attention}Joker{} cards with",
                "{C:dark_edition}Foil{}, {C:dark_edition}Holographic{}, or",
                "{C:dark_edition}Polychrome{} edition",
            ],
        },
        v_illusion: {
            text: [
                "{C:attention}Playing cards{} in shop",
                "may have an {C:enhanced}Enhancement{},",
                "{C:dark_edition}Edition{}, and/or a {C:attention}Seal{}",
            ],
            name: "Illusion",
            unlock: [
                "Buy a total of",
                "{C:attention}#1#{} playing cards",
                "from the shop",
                "{C:inactive}(#2#)",
            ],
        },
        v_hieroglyph: {
            name: "Hieroglyph",
            text: [
                "{C:attention}-#1#{} Ante,",
                "{C:blue}-#1#{} hand",
                "each round",
            ],
        },
        v_blank: {
            name: "Blank",
            text: [
                "{C:inactive}Does nothing?",
            ],
        },
        v_recyclomancy: {
            text: [
                "Permanently",
                "gain {C:red}+#1#{} discard",
                "each round",
            ],
            name: "Recyclomancy",
            unlock: [
                "Discard a total",
                "of {C:attention}#1#{} cards",
                "{C:inactive}(#2#)",
            ],
        },
        v_grabber: {
            name: "Grabber",
            text: [
                "Permanently",
                "gain {C:blue}+#1#{} hand",
                "per round",
            ],
        },
        v_crystal_ball: {
            name: "Crystal Ball",
            text: [
                "{C:attention}+1{} consumable slot",
            ],
        },
        v_magic_trick: {
            name: "Magic Trick",
            text: [
                "{C:attention}Playing cards{} can",
                "be purchased",
                "from the {C:attention}shop",
            ],
        },
        v_liquidation: {
            text: [
                "All cards and packs in",
                "shop are {C:attention}#1#%{} off",
            ],
            name: "Liquidation",
            unlock: [
                "Redeem at least",
                "{C:attention}#1#{C:voucher} Voucher{} cards",
                "in one run",
            ],
        },
        v_directors_cut: {
            name: "Director's Cut",
            text: [
                "Reroll Boss Blind",
                "{C:attention}1{} time per Ante,",
                "{C:money}$#1#{} per roll",
            ],
        },
        v_paint_brush: {
            name: "Paint Brush",
            text: [
                "{C:attention}+#1#{} hand size",
            ],
        },
        v_planet_tycoon: {
            text: [
                "{C:planet}Planet{} cards appear",
                "{C:attention}#1#X{} more frequently",
                "in the shop",
            ],
            name: "Planet Tycoon",
            unlock: [
                "Buy a total of",
                "{C:attention}#1#{C:planet} Planet{} cards",
                "from the shop",
                "{C:inactive}(#2#)",
            ],
        },
        v_palette: {
            text: [
                "{C:attention}+#1#{} hand size",
            ],
            name: "Palette",
            unlock: [
                "Reduce hand size",
                "down to {C:attention}#1#{} cards",
            ],
        },
        v_omen_globe: {
            text: [
                "{C:spectral}Spectral{} cards may",
                "appear in any of",
                "the {C:attention}Arcana Packs",
            ],
            name: "Omen Globe",
            unlock: [
                "Use a total of {C:attention}#1#",
                "{C:tarot}Tarot{} cards from any",
                "{C:tarot}Arcana Pack",
                "{C:inactive}(#2#)",
            ],
        },
        v_retcon: {
            text: [
                "Reroll Boss Blind",
                "{C:attention}unlimited{} times,",
                "{C:money}$#1#{} per roll",
            ],
            name: "Retcon",
            unlock: [
                "Discover",
                "{C:attention}#1#{} Blinds",
            ],
        },
        v_overstock_plus: {
            text: [
                "{C:attention}+1{} card slot",
                "available in shop",
            ],
            name: "Overstock Plus",
            unlock: [
                "Spend a total of",
                "{C:money}$#1#{} at the shop",
                "{C:inactive}($#2#)",
            ],
        },
        v_petroglyph: {
            text: [
                "{C:attention}-#1#{} Ante,",
                "{C:red}-#1#{} discard",
                "each round",
            ],
            name: "Petroglyph",
            unlock: [
                "Reach Ante",
                "level {E:1,C:attention}#1#",
            ],
        },
        v_overstock_norm: {
            name: "Overstock",
            text: [
                "{C:attention}+1{} card slot",
                "available in shop",
            ],
        },
    },
    Tag: {
        tag_charm: {
            name: "Charm Tag",
            text: [
                "Gives a free",
                "{C:tarot}Mega Arcana Pack",
            ],
        },
        tag_economy: {
            name: "Economy Tag",
            text: [
                "Doubles your money",
                "{C:inactive}(Max of {C:money}$#1#{C:inactive})",
            ],
        },
        tag_double: {
            name: "Double Tag",
            text: [
                "Gives a copy of the",
                "next selected {C:attention}Tag{}",
                "{s:0.8,C:attention}Double Tag{s:0.8} excluded",
            ],
        },
        tag_ethereal: {
            name: "Ethereal Tag",
            text: [
                "Gives a free",
                "{C:spectral}Spectral Pack",
            ],
        },
        tag_garbage: {
            name: "Garbage Tag",
            text: [
                "Gives {C:money}$#1#{} per unused",
                "{C:red}discard{} this run",
                "{C:inactive}(Will give {C:money}$#2#{C:inactive})",
            ],
        },
        tag_rare: {
            name: "Rare Tag",
            text: [
                "Shop has a free",
                "{C:red}Rare Joker",
            ],
        },
        tag_skip: {
            name: "Speed Tag",
            text: [
                "Gives {C:money}$#1#{} per skipped",
                "Blind this run",
                "{C:inactive}(Will give {C:money}$#2#{C:inactive})",
            ],
        },
        tag_uncommon: {
            name: "Uncommon Tag",
            text: [
                "Shop has a free",
                "{C:green}Uncommon Joker",
            ],
        },
        tag_boss: {
            name: "Boss Tag",
            text: [
                "Rerolls the",
                "{C:attention}Boss Blind",
            ],
        },
        tag_top_up: {
            name: "Top-up Tag",
            text: [
                "Create up to {C:attention}#1#",
                "{C:blue}Common{} Jokers",
                "{C:inactive}(Must have room)",
            ],
        },
        tag_foil: {
            name: "Foil Tag",
            text: [
                "Next base edition shop",
                "Joker is free and",
                "becomes {C:dark_edition}Foil",
            ],
        },
        tag_buffoon: {
            name: "Buffoon Tag",
            text: [
                "Gives a free",
                "{C:attention}Mega Buffoon Pack",
            ],
        },
        tag_coupon: {
            name: "Coupon Tag",
            text: [
                "Initial cards and",
                "booster packs in next",
                "shop are free",
            ],
        },
        tag_standard: {
            name: "Standard Tag",
            text: [
                "Gives a free",
                "{C:attention}Mega Standard Pack",
            ],
        },
        tag_voucher: {
            name: "Voucher Tag",
            text: [
                "Adds one {C:voucher}Voucher",
                "to the next shop",
            ],
        },
        tag_investment: {
            name: "Investment Tag",
            text: [
                "After defeating",
                "the Boss Blind,",
                "gain {C:money}$#1#",
            ],
        },
        tag_orbital: {
            name: "Orbital Tag",
            text: [
                "Upgrade {C:attention}#1#",
                "by {C:attention}#2# levels",
            ],
        },
        tag_juggle: {
            name: "Juggle Tag",
            text: [
                "{C:attention}+#1#{} hand size",
                "next round",
            ],
        },
        tag_meteor: {
            name: "Meteor Tag",
            text: [
                "Gives a free",
                "{C:planet}Mega Celestial Pack",
            ],
        },
        tag_d_six: {
            name: "D6 Tag",
            text: [
                "Rerolls in next shop",
                "start at {C:money}$0",
            ],
        },
        tag_negative: {
            name: "Negative Tag",
            text: [
                "Next base edition shop",
                "Joker is free and",
                "becomes {C:dark_edition}Negative",
            ],
        },
        tag_polychrome: {
            name: "Polychrome Tag",
            text: [
                "Next base edition shop",
                "Joker is free and",
                "becomes {C:dark_edition}Polychrome",
            ],
        },
        tag_holo: {
            name: "Holographic Tag",
            text: [
                "Next base edition shop",
                "Joker is free and",
                "becomes {C:dark_edition}Holographic",
            ],
        },
        tag_handy: {
            name: "Handy Tag",
            text: [
                "Gives {C:money}$#1#{} per played",
                "{C:blue}hand{} this run",
                "{C:inactive}(Will give {C:money}$#2#{C:inactive})",
            ],
        },
    },
    Edition: {
        e_base: {
            name: "Base",
            text: [
                "No extra effects",
            ],
        },
        e_negative: {
            name: "Negative",
            text: [
                "{C:dark_edition}+#1#{} Joker slot",
            ],
        },
        e_polychrome: {
            name: "Polychrome",
            text: [
                "{X:mult,C:white} X#1# {} Mult",
            ],
        },
        e_foil: {
            name: "Foil",
            text: [
                "{C:chips}+#1#{} chips",
            ],
        },
        e_negative_consumable: {
            name: "Negative",
            text: [
                "{C:dark_edition}+#1#{} consumable slot",
            ],
        },
        e_holo: {
            name: "Holographic",
            text: [
                "{C:mult}+#1#{} Mult",
            ],
        },
    },
};
