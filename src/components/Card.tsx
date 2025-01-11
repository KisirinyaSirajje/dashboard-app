import { ReactNode } from "react";

interface CardProps {
    title: string;
    value: number | string;
    responseRate?: number;
    icon?: ReactNode;
    isMiddleCard?: boolean;
}

const Card: React.FC<CardProps> = ({ title, value, responseRate, icon, isMiddleCard }) => {
    return (
        <div className="p-3 bg-white shadow-md rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 cursor-pointer">
            {icon && <div className="text-xl text-purple-600 hover:text-purple-800 transition-colors duration-200">{icon}</div>}
            <h2 className="text-base font-semibold">{title}</h2>
            <p className="text-lg font-bold">{value}</p>
            {responseRate !== undefined && (
                <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-gray-500">Response Rate</p>
                        <p className="text-xs font-semibold text-purple-600">{responseRate}%</p>
                    </div>
                    {isMiddleCard ? (
                        <div className="flex justify-end">
                            <div className="w-20 h-20 relative">
                                <svg className="w-20 h-20 transform -rotate-90">
                                    <circle
                                        className="text-gray-200"
                                        strokeWidth="6"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="30"
                                        cx="40"
                                        cy="40"
                                    />
                                    <circle
                                        className="text-purple-600 transition-all duration-500"
                                        strokeWidth="6"
                                        strokeDasharray={188.5}
                                        strokeDashoffset={188.5 - (188.5 * responseRate) / 100}
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="30"
                                        cx="40"
                                        cy="40"
                                    />
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                                className="bg-purple-600 h-1.5 rounded-full transition-all duration-500" 
                                style={{ width: `${responseRate}%` }}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Card;
