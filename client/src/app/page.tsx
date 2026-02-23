import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { OrbitCountdown } from "@/components/ui/OrbitCountdown";
import { Today } from "@/components/ui/Today";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%27M40%200l20%2020-20%2020-20-20L40%200zm0%2080l20-20-20-20-20%2020%2020%2080zM0%2040l20-20%2020%2020-20%2020L0%2040zm80%2040l-20-15-20%2015%2020%2015%2020-15z%27%20fill%3D%27%23D4AF37%27%20fill-opacity%3D%270.02%27%20fill-rule%3D%27evenodd%27/%3E%3C/svg%3E')] bg-no-repeat bg-center bg-cover pointer-events-none"></div>
      <div className="w-full mx-auto max-w-5xl">
        <Navbar />
      </div>
      <div className="flex flex-col w-full flex items-center justify-center mt-12 mb-8 p-4">
        <OrbitCountdown />

        {/* Date */}
        <div className="mt-4 sm:mt-8 md:mt-10 lg:mt-16 text-center space-y-2 sm:space-y-4">
          <h2 className="font-serif text-base sm:text-lg md:text-xl font-light tracking-[0.2em] text-white">
            14 RAMADAN 1445
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/40"></div>
            <p className="text-[8px] sm:text-xs uppercase tracking-[0.5em] text-primary font-bold">
              Monday, 25 March 2024
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/40"></div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl">
        <Today />
      </div>
      <Footer />
    </main>
  );
}
