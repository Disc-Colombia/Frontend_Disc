import React from 'react';
import "../styles/tooltip.css"
import {TooltipProps} from "../type/type.tsx";

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
    return (
        <div className="tooltip-container">
            {children}
            <span className="tooltip-text">{content}</span>
        </div>
    );
};

export default Tooltip;