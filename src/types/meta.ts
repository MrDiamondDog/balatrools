import { DiscoverableItem } from "@/lib/gamedata";

export type MetaFileData = {
    alerted: Partial<Record<DiscoverableItem, boolean>>;
    discovered: Partial<Record<DiscoverableItem, boolean>>;
    unlocked: Partial<Record<DiscoverableItem, boolean>>;
}
