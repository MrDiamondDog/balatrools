import { Balatro } from "@/lib/gamedata";

export default function JokersLibrary() {
    return (
        <div className="absolute-center">
            <h1 className="text-3xl font-bold mb-2">Jokers</h1>
            <p className="text-gray-600">Every joker in Balatro.</p>
            <div className="flex flex-wrap gap-2 mt-4 overflow-x-hidden overflow-y-scroll h-[80vh]">
            </div>
        </div>
    );
}
