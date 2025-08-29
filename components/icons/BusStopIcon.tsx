
import React from 'react';

export const BusStopIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m5.636 1.636l-3.536-3.536m0 14.142l3.536-3.536M12 8v8m4-8v8M4 12h16" />
    </svg>
);
