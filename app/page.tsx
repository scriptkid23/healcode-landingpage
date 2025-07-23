import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import OvalMovingAnim from "@/components/OvalMovingAnim"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large animated oval outline */}
        <OvalMovingAnim
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 mix-blend-difference"
          rx={400}
          ry={200}
          stroke="#374151"
          strokeWidth={2}
          opacity={0.3}
        />

        {/* Decorative stars/plus symbols */}
        <div className="absolute top-20 left-20 text-blue-400 text-2xl">+</div>
        <div className="absolute top-40 right-32 text-pink-400 text-2xl">+</div>
        <div className="absolute bottom-40 left-32 text-yellow-400 text-2xl">+</div>
        <div className="absolute top-80 right-20 text-green-400 text-2xl">+</div>
        <div className="absolute bottom-60 left-16 text-blue-400 text-2xl">+</div>
        <div className="absolute top-32 right-1/4 text-pink-400 text-2xl">+</div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 md:p-8">
        <div className="text-xl font-bold tracking-wider">CLARIS</div>
        <nav className="hidden md:flex space-x-8 text-sm tracking-wider">
          <a href="#" className="hover:text-pink-400 transition-colors">
            WORKS
          </a>
          <a href="#" className="hover:text-pink-400 transition-colors">
            ABOUT
          </a>
          <a href="#" className="hover:text-pink-400 transition-colors">
            CONTACT
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6">
        <div className="text-center max-w-4xl">
          {/* Top text */}
          <div className="text-lg md:text-xl tracking-widest mb-4 opacity-80">FROM</div>

          {/* Main heading */}
          <div className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-2">
            <div className="uppercase">Imper</div>
            <div className="uppercase">fections</div>
          </div>

          {/* Subtitle */}
            <div className="text-sm md:text-base tracking-widest mb-6 opacity-80">TO</div>

            {/* Secondary heading */}
            <div className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-12">
            <div>BRILL</div>
            <div className="flex items-center justify-center">
              <span>—IANCE</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-sm tracking-wider font-medium transition-all duration-300 hover:scale-105">
            Get in touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  )
}
