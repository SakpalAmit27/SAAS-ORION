import { ReactNode } from "react";
import { Icons } from "./icons";
import { PlusCircle } from "lucide-react";


export const MockDiscordUI = ({children} : {children:ReactNode}) => {

    return <div className="flex min-h-[800px] w-full max-w-[1200px] bg-discord-background text-white rounded-lg overflow-hidden shadow-xl">

        <div className="hidden sm:flex w-[72px] bg-[#202225] py-3 flex-col items-center">
            <div className="size-12 bg-discord-brand-color rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200">
                <Icons.discord className="size-3/5 text-white"/>
            </div>

            <div className="w-8 h-[2px] bg-discord-background rounded-full my-2">
        </div>
        {[...Array(5)].map((_,i) => (
            <div key={i} className="size-12 bg-discord-background rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-discord-brand-color cursor-not-allowed">
                <span className="text-lg font-semibold text-gray-400">{String.fromCharCode(65+i)}</span>
            </div>
        ))}
            <div className=" group size-12 mt-auto bg-discord-background rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-[#3ba55c] cursor-not-allowed">
                <span className="text-lg font-semibold text-gray-400"><PlusCircle className="text-[#3ba55c] group-hover:text-white"/></span>
            </div>
        </div>

        {/*dm list here . */}

        <div className="hidden md:flex w-60 bg-[#2f3136] flex-col">
            <div className="px-4 h-16 border-b border-[#202225] flex items-center shadow-sm">
                <div className="w-full bg-[#202225] text-sm rounded px-2 h-8 items-center flex justify-center text-gray-500 cursor-not-allowed">
                    Find or start a conversation
                </div>
            </div>
        </div>
    </div>
}