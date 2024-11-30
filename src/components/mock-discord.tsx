import { ReactNode } from "react";
import { Icons } from "./icons";


export const MockDiscordUI = ({children} : {children:ReactNode}) => {

    return <div className="flex min-h-[800px] w-full max-w-[1200px] bg-discord-background text-white rounded-lg overflow-hidden shadow-xl">

        <div className="hidden sm:flex w-[72px] bg-discord-background py-3 flex-col items-center">
            <div className="size-12 bg-discord-brand-color rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200">
                <Icons.discord className="size-3/5 text-white"/>
            </div>

            <div className="w-8 h-[2px] bg-discord-background rounded-full my-2"></div>
        </div>

    </div>
}