import React from "react";

interface SquareRecordProps {
    src?: string;
    title?: string;
    label?: string;
    onClick?: () => void;
}
const SquareRecord: React.FC<SquareRecordProps> = ({ src = "/images/MyRecommend-1.jpg", title = "", label = "", onClick = () => {} }) => {
    return (
        <div className="record-square" onClick={onClick}>
            <div className="photo" style={{ background: "url(" + src + ") no-repeat center center" }}></div>
            <div className="marked">
                <div style={{ textAlign: "center" }}>
                    <h3>{title}</h3>
                    <span>{label}</span>
                </div>
            </div>
        </div>
    );
};

export default SquareRecord;
