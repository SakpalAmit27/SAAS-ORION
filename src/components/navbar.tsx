import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import {SignOutButton} from "@clerk/nextjs"

const Navbar = () => {

  const user = false 


  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white backdrop-blur-lg transition-all bg-white/80">
        <MaxWidthWrapper>
            <div className="flex h-16 items-center justify-between">
                <Link href='/' className="flex z-40 font-logo text-4xl text-zinc-900 hover:text-red-500 ease-in-out">orion</Link>

                <div className='h-full flex items-center space-x-4'>
                  {user ? <>
                  
                  <SignOutButton>
                    <button className=""></button>
                  </SignOutButton>
                  </> : null}

                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
