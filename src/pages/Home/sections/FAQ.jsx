import React from 'react';
import {faqs} from "../../../constants/index.js";

export default function FAQ() {

  return (
    <section>
    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 sm:text-5xl">Frequently Asked Questions</h2>
        <p className="p-2 mt-2 mb-4 text-base text-gray-500 font-medium text-center">Everything you need to know about the product and billing.</p>
        <div className="divide-y divide-gray-200 rounded-xl md:m-12">

            {
                faqs.map((faq)=>{
                    return(
                        <details className="p-6 group" key={faq.id}>
                          <summary className="flex items-center justify-between cursor-pointer">
                            <h5 className="text-lg font-medium text-gray-900">
                                {faq.question}
                            </h5>

                            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                           </summary>
                           <p>
                                 {faq.answer}
                           </p>
                        </details>
                    )
                })
            }
        </div>
    </div>
</section>
  )
}
