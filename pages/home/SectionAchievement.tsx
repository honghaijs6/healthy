// DATA
import DATA from "config/data.json";

// LIBS
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

//COMPONENTS
import CirleProgressBar from "components/CircleProgressBar";
import LineChart, { iGraphData } from "components/LineChart";

const SectionAchievementRate = () => {
    const [localState, setLocalState] = useState({
        height: 301,
        marginTop: -10,
        marginLeft: 0,
        columnWidth: 50,

        percentage: 0,
        date: ""
    });

    const { width } = useWindowSize();

    useEffect(() => {
        setLocalState((prev) => {
            return {
                ...prev,
                height: width > 768 ? 301 : 330,
                marginTop: width > 768 ? -10 : 0,
                marginLeft: width > 768 ? 20 : -25,
                columnWidth: width > 768 ? 50 : 38
            };
        });
    }, [width]);

    const _onGraphLineClick = (line: string, data: iGraphData | null) => {
        try {
            setLocalState((prev) => {
                return {
                    ...prev,
                    percentage: data ? data.value : 0,
                    date: data ? (data.month > 9 ? data.month : "0" + String(data.month)) + "/" + String(data.year).slice(2) : ""
                };
            });
        } catch {}
    };

    const { height, marginTop, marginLeft, columnWidth } = localState;
    return (
        <div style={{ paddingTop: 64 }}>
            <div className="achievement-board">
                <div className="content">
                    <div className="rate">
                        <CirleProgressBar percentage={localState.percentage} title={localState.date} />
                    </div>
                    <div className="graph">
                        <LineChart
                            dataFat={DATA.BODY_FAT}
                            dataWeight={DATA.BODY_WEIGHT}
                            onlineLineTouch={(line: string, data: iGraphData | null) => {
                                _onGraphLineClick(line, data);
                            }}
                            svgStyle={{ marginLeft }}
                            columnWidth={columnWidth}
                            style={{ height, marginTop, width: "95%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionAchievementRate;
