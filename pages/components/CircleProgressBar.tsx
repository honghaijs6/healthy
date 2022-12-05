const CirleProgressBar = ({ percentage = 0, title = "" }) => {
    return (
        <div className="circle-progress">
            <svg viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background" />
                <circle cx="16" cy="16" r="15.9155" className="progress-bar__progress js-progress-bar" style={{ strokeDashoffset: 100 - percentage }} />
            </svg>
            <label style={{ display: "grid", fontSize: 25, placeItems: "center", width: 181, height: 181, position: "absolute", top: 0, left: 0 }}>
                <div>
                    <small>{title}</small>
                    <span style={{ textShadow: "0px 0px 6px #FCA500" }}> {percentage} %</span>
                </div>
            </label>
        </div>
    );
};

export default CirleProgressBar;
