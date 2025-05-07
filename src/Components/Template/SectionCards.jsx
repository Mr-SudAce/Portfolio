import React from 'react'

const SectionCards = ({ title, children }) => {
    return (
        <section className="relative shadow-inner-lg max-h-[30vh] rounded-2xl p-6 backdrop-blur-2xl bg-opacity-80">
            {/* Top Dots */}
            <div className="dot1"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
            <div className="dot4"></div>
            {/* Content */}
            <span>
                <h2 className="text-2xl font-bold textmain mb-2 mt-3">{title}</h2>
                <div className="text-sm textmain ml-6">{children}</div>
            </span>
        </section>
    )
}

export default SectionCards