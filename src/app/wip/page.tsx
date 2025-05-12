import Discord from "@/components/Discord";
import GitHub from "@/components/GitHub";

export default function WipPage() {
    return (<div className="absolute-center text-center">
        <h1>WIP</h1>
        <p>
            This page is still under development.
            Check the progress in the <GitHub>Github Repository</GitHub>,
            or come help contribute by joining the <Discord>Discord server</Discord>!
        </p>
    </div>);
}
