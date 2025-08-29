
import React from 'react';

export const SubwayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M6 21h12M6 3h12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 3v18h8V3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 6h4M10 18h4" strokeLinecap="round" />
        <path d="M12 10v4" strokeLinecap="round" />
    </svg>
);
