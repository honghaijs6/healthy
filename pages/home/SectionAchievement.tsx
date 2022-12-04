import CirleProgressBar from "components/CircleProgressBar"
import LineChart from "components/LineChart";

import { CSSProperties } from 'react';




const SectionAchievementRate = () => {

    return (
        <div style={{ paddingTop: 64 }}>
            <div className="achievement-board">
                <div className="content">
                    <div className="rate" >

                        <CirleProgressBar percentage={75} />

                    </div>
                    <div className="graph">
                        <LineChart svgStyle={{ marginLeft:0}} columnWidth={50} style={{ height: 301, marginTop: -10, width:'95%' }} />

                    </div>
                </div >
            </div >
        </div>
    )
}

export default SectionAchievementRate