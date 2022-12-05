import CirleProgressBar from "components/CircleProgressBar"
import LineChart from "components/LineChart";

import { useWindowSize } from 'usehooks-ts'


import { CSSProperties, useEffect, useState } from 'react';




const SectionAchievementRate = () => {

    const [localStyle, setStyle] = useState({
        height: 301,
        marginTop: -10,
        marginLeft: 0,
        columnWidth: 50,

        percentafe: 75
    });

    const { width } = useWindowSize()


    useEffect(() => {

        setStyle((prev) => {
            return {
                ...prev,
                height: width > 768 ? 301 : 330,
                marginTop: width > 768 ? -10 : 0,
                marginLeft: width > 768 ? 20 : -25,
                columnWidth: width > 768 ? 50 : 38
            }
        });


    }, [width]);

    const onGraphLineClick = (line: string) => {
        try {

            const mix: any = {
                line_1: 75,
                line_2: 25
            }

            setStyle((prev) => {
                return {
                    ...prev,
                    percentafe: mix[line]
                }
            })


        } catch { }
    }


    const { height, marginTop, marginLeft, columnWidth } = localStyle;
    return (
        <div style={{ paddingTop: 64 }}>
            <div className="achievement-board">
                <div className="content">
                    <div className="rate" >

                        <CirleProgressBar percentage={localStyle.percentafe} />

                    </div>
                    <div className="graph" >
                        <LineChart
                            onLineClick={(line) => {
                                onGraphLineClick(line)
                            }}
                            svgStyle={{ marginLeft }}
                            columnWidth={columnWidth}
                            style={{ height, marginTop, width: '95%' }}

                        />

                    </div>
                </div >
            </div >
        </div>
    )
}

export default SectionAchievementRate