import { ReactNode } from "react";


export const MockDiscordUI = ({children} : {children:ReactNode}) => {

    return <div className="flex min-h-[800px] w-full max-w-[1200px] bg-discord-background text-white rounded-lg overflow-hidden shadow-xl">

        <div className="hidden sm:flex w-[72px] bg-discord-background py-3 flex-col items-center">
            <div className="size-12 bg-discord-brand-color rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200"></div>
        </div>

    </div>
}