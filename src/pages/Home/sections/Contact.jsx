import React from 'react'

export default function Contact() {
  return (
    <section className="flex justify-center items-center flex-col text-center max-w-6xl mx-10 mt-11 mb-16">
    <h1 className="max-w-2xl my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-6xl">No long-term contracts.
No catches. Simple.</h1>
    <div>
        <p className=" mx-auto my-2 text-base text-gray-600 md:leading-relaxed">
        Start your 30-day free trial. Cancel anytime.
        </p>
    </div>
    <div className="hidden md:flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
        <a className="inline-block w-auto min-w-[250px] px-6 py-4 text-white transition-all bg-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-slate-300 hover:shadow-2xl hover:shadow-slate-400 hover:-translate-y-px"
            href="">Contact us
        </a>
    </div>
</section>
  )
}
