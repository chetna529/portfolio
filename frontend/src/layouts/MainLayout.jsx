import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { Cursor } from "../components/Cursor/Cursor";
import { Particles } from "../components/Particles/Particles";

export const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden selection:bg-cyber-cyan/35 selection:text-white">
      <Cursor />
      <Particles />
      <Navbar />
      <main className="flex-1 w-full relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
