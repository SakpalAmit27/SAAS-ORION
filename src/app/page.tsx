import { MaxWidthWrapper } from "./components/max-width-wrapper";
import Heading from "./components/heading";

const page = () => {
  return <>
  
  <section className="relative py-24 sm:py-32 bg-brand-25">
    {/* creating a custom max with wrapper component to reuse later on*/}
    <MaxWidthWrapper className="text-center">
      <div className="relative mx-auto text-center flex flex-col items-center gap-10">
        <div>
          <Heading>
            <span>Real-Time SaaS Insights,</span>
            <br />
            <span className="relative bg-gradient-to-r from-zinc-700 to-orange-300 text-transparent bg-clip-text ">Delivered to Your Discord</span>
          </Heading>
        </div>
        
      </div>
    </MaxWidthWrapper>
  </section>
  <section></section> 
  <section></section>
  <section></section>
  
  </>
}

export default page;