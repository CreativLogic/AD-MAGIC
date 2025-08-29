
import React from 'react';

export const BusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a2 2 0 01-2-2m2 2a2 2 0 002-2m-2 2v-2m0 2h-2m2-2h2M12 3v2m0 14V3m0 0h-2m2 0h2m-2 14h-2m2 14h2M6 21H4a2 2 0 01-2-2v-7a2 2 0 012-2h2m12 0h2a2 2 0 012 2v7a2 2 0 01-2 2h-2m-6-14v2m0-2h-2m2 0h2" />
    </svg>
);
