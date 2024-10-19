import React, { ReactNode } from 'react';
import "../styles/tooltip.css"
interface TooltipProps {
    content: string;
    children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
    return (
        <div className="tooltip-container">
            {children}
            <span className="tooltip-text">{content}</span>
        </div>
    );
};

export default Tooltip;