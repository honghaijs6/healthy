import CirleProgressBar from "components/CircleProgressBar"

import { CSSProperties } from 'react';
import { AreaChart } from 'charts-css-react';



const SectionAchievementRate = () => {

    return (
        <div className="achievement-board">
            <div className="content">
                <div className="rate" >

                    <CirleProgressBar percentage={75} />

                </div>
                <div className="graph">
                <AreaChart data={[2, 4, 8, 6, 1, 3]} />

                </div >
            </div >
        </div >
    )
}

export default SectionAchievementRate