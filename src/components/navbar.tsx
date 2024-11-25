import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import {SignOutButton} from "@clerk/nextjs"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"

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
                    <Button size="sm" variant="ghost">Sign Out</Button>
                  </SignOutButton>

                  <Link href='/dashboard' className={buttonVariants({
                    size:"sm",
                    className:"flex items-center gap-1"
                  })}>Dashboard <ArrowRight className="ml-1.5 size-4"/></Link>
                  </> : 
                  <>

                  
                  <Link href='/pricing' className={buttonVariants({
                    size:"sm",
                    variant:'ghost',
                  })}>Pricing</Link>

                       
                  <Link href='/sign-in' className={buttonVariants({
                    size:"sm",
                    variant:'outline',
               
                  })}>Sign in</Link>


                    <Link href='/sign-up' className={buttonVariants({
                    size:"sm",
                    className:'bg-zinc-900 text-white flex items-center gap-1.5'
                  })}>Sign Up <ArrowRight className="size-4"/></Link>
                  
                  
                  
                  
                  </>
                  
                 }

                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
