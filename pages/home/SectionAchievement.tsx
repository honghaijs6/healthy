import CirleProgressBar from "components/CircleProgressBar"
import LineChart from "components/LineChart";
import useWindowDimensions from "pages/hooks/useWindowDimension";

import { CSSProperties, useEffect, useState } from 'react';




const SectionAchievementRate = () => {

    const [localStyle, setStyle] = useState({
        height: 301,
        marginTop: -10,
        marginLeft: 0,
        columnWidth: 50
    });
    const handleResize = useWindowDimensions();

    useEffect(() => {

        if (handleResize) {

            // MOBILE SIZE
            setStyle((prev) => {
                return {
                    ...prev,
                    height: handleResize?.width > 768 ? 301 : 330,
                    marginTop: handleResize?.width > 768 ? -10 : 0,
                    marginLeft: handleResize?.width > 768 ? 0 : -25,
                    columnWidth: handleResize?.width > 768 ? 50 : 38
                }
            });
        }

    }, [handleResize?.width])


    const { height, marginTop, marginLeft, columnWidth } = localStyle;
    return (
        <div style={{ paddingTop: 64 }}>
            <div className="achievement-board">
                <div className="content">
                    <div className="rate" >

                        <CirleProgressBar percentage={75} />

                    </div>
                    <div className="graph" >
                        <LineChart svgStyle={{ marginLeft }} columnWidth={columnWidth} style={{ height, marginTop, width: '95%' }} />

                    </div>
                </div >
            </div >
        </div>
    )
}

export default SectionAchievementRate