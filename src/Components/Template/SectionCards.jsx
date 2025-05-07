import React from 'react'

const SectionCards = ({ title, children }) => {
    return (
        <section className="relative bg-white rounded-2xl p-6 shadow-xl backdrop-blur-2xl bg-opacity-80">
            {/* Top Dots */}
            <div className="dot1"></div>
            <div className="dot2"></div>
            {/* Content */}
            <span>
                <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-3">{title}</h2>
                <div className="text-sm text-gray-600 ml-6">{children}</div>
            </span>
        </section>
    )
}

export default SectionCards