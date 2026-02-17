import React from 'react'

const Card = ({ title, children }) => {
    return (
        <section className="relative bgprimary shadow-inner-lg rounded-2xl p-6 backdrop-blur-2xl bg-opacity-80">
            {/* Top Dots */}
            <div className="dot1"></div>
            <div className="dot2"></div>
            {/* Content */}
            <span className='flex'>
                <h2 className="text-2xl font-bold w-40 textmain mb-2 mt-3">{title}</h2>
                <div className='w-[0.5vh] h-auto bgsecondary mx-2'></div>
                <div className="text-sm textmain ml-3">{children}</div>
            </span>
        </section>
    )
}

export default Card