import CirleProgressBar from "components/CircleProgressBar"
import LineChart from "components/LineChart";

import { CSSProperties } from 'react';




const SectionAchievementRate = () => {

    return (
        <div className="achievement-board">
            <div className="content">
                <div className="rate" >

                    <CirleProgressBar percentage={75} />

                </div>
                <div className="graph">
                <LineChart />
                </div>
            </div >
        </div >
    )
}

export default SectionAchievementRate