import React, { useEffect, useState } from 'react';
import Container from '../../Shared/Container/Container';

const Faq = () => {
    const [faq, setFaq] = useState([]);
    useEffect(() =>{
        fetch('faq.json')
        .then(res => res.json())
        .then(data => setFaq(data))
    },[])
    return (
        <div className='py-20'>
            <Container>
                <div className='text-center'>
                    <h1 className=' border-black text-[#3b8d5d] font-serif font-bold sm:text-2xl text-lg '>| Faq</h1>
                    <h1 className=' border-black font-bold text-xl  sm:text-4xl '>Frequently Asked Questions</h1>
                </div>
                <div className='grid sm:grid-cols-2 items-center grid-cols-1 pt-10'>
    <div className="sm:order-2">
        <iframe className='sm:w-full md:w-auto w-full sm:px-0 px-4 sm:h-80 h-60' src="https://www.youtube.com/embed/e89J3eW4a24?si=wVV9AlDAJI0ol1re" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div className="sm:order-1">
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <div className="flex flex-col divide-y sm:px-4 lg:px-8 xl:px-24 dark:divide-gray-700">
                    {faq.map((faqs) => (
                        <div key={faqs.id} className='bg-[#bbbdbc65] my-2 rounded p-2'>
                            <details className=''>
                                <summary className="py-2 outline-none text-lg cursor-pointer focus:underline">{faqs.question}</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>{faqs.answer}</p>
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
</div>

            </Container>
        </div>
    );
};

export default Faq;