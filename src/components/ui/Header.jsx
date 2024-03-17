import { useEffect } from "react";
import { useState } from "react";

export default function Header() {
    const [state, setState] = useState(false);

    useEffect(() => {
        document.onclick = (e) => {
          const target = e.target;
          if (!target.closest(".menu-btn")) setState(false);
        };
      }, []);

  return (
    <header className="sticky inset-0 z-50 border-slate-100 backdrop-blur-lg">
    <nav className="mx-auto flex justify-between max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
        <div className="relative flex items-center">
            <a href="/" className="text-gray-700 font-bold">UniCraft</a>
        </div>
        <ul className={` ${state ? 'block' : 'hidden'} items-center justify-center gap-6 md:flex`}>
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                <a href="#">How it works</a>
            </li>
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                <a href="#">Pricing</a>
            </li>
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                <a href="#">FAQ</a>
            </li>
        </ul>
        <div className="hidden items-center justify-center gap-6 md:flex">
        <a href="" className="block border border-gray-600 rounded-md px-8 py-2 text-sm font-semibold text-gray-600 text-center">Contact us</a>
        </div>
        <div className="relative flex items-center justify-center md:hidden">
            <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-auto text-slate-900"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
            </button>
        </div>
    </nav>
</header>
  )
}

