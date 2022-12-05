// HELPER
import drawLine from "ultils/drawLine";

// LIBS
import React, { memo, useEffect, useState } from "react";
import converValue from "ultils/convertValue";

// DEPENDENCIES
export interface iGraphData {
    month: number;
    year: number;
    value: number;
}
interface LineChartProps {
    columnWidth?: number;
    type?: string;
    title?: string;
    date?: string;
    style?: React.CSSProperties;
    svgStyle?: React.CSSProperties;

    onlineLineTouch?(line: string, data: iGraphData | null): void;
    dataWeight: iGraphData[];
    dataFat: iGraphData[];
}

interface LineChartState {
    DATA_WEIGHT: iGraphData[];
    DATA_FAT: iGraphData[];
    COLUMN_WIDTH?: number;
}
const LineChart: React.FC<LineChartProps> = ({
    onlineLineTouch = (line: string, data: iGraphData | null) => {},
    columnWidth = 50,
    type = "small",
    title = "",
    date = "",
    style = {},
    svgStyle = {},

    dataWeight = [{ month: 1, year: 2021, value: 0 }],
    dataFat = [{ month: 1, year: 2021, value: 0 }]
}) => {
    const MAX_VALUE = 250;
    const [localState, setLocalState] = useState<LineChartState>({
        COLUMN_WIDTH: 50,
        DATA_WEIGHT: [{ month: 1, year: 2021, value: 0 }],
        DATA_FAT: [{ month: 1, year: 2021, value: 0 }]
    });

    useEffect(() => {
        setLocalState((prev: LineChartState) => {
            return {
                ...prev,
                COLUMN_WIDTH: columnWidth || 0,
                DATA_WEIGHT: converValue(MAX_VALUE, dataWeight),
                DATA_FAT: converValue(MAX_VALUE, dataFat)
            };
        });
    }, [columnWidth, dataWeight, dataFat]);

    // IMPLEMENT RENDER
    const { DATA_WEIGHT, DATA_FAT, COLUMN_WIDTH = 0 } = localState;

    const bodyWeighLine = drawLine(
        DATA_WEIGHT.map((item: iGraphData) => {
            return item.value;
        }),
        COLUMN_WIDTH
    );

    const bodyFatLine = drawLine(
        DATA_FAT.map((item: iGraphData) => {
            return item.value;
        }),
        COLUMN_WIDTH
    );

    return (
        <div className="my-chart" style={{ ...style }}>
            {/* GRAPH TITLE */}
            {title !== "" && date !== "" && (
                <div className="title">
                    <span className="name">BODY RECORD</span>
                    <span className="date">2021.05.21</span>
                </div>
            )}

            {/* GRAPH DATA */}
            <svg style={{ marginLeft: -50, ...svgStyle }} version="1.2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="health-graph">
                <defs>
                    <pattern id={type} width={columnWidth} height={columnWidth} patternUnits="userSpaceOnUse">
                        <path d="M 0 0 M 0 0 0 100" fill="none" stroke="#e5e5e5" stroke-width="1"></path>
                    </pattern>
                </defs>

                {/* BACKGROUND GRID */}
                {type === "big" ? <rect x={COLUMN_WIDTH} width={`calc(100% - ${columnWidth}px)`} height="80%" fill="url(#big)" /> : <rect x={COLUMN_WIDTH} width={`calc(100% - ${columnWidth}px)`} height="80%" fill="url(#small)" />}

                <g className="y-labels hide">
                    {Array.from(Array(6)).map((_, index) => {
                        const value = MAX_VALUE - index * 50;
                        const y = index * 50 + 5;

                        return (
                            <text key={index} x="30" y={y}>
                                {value}
                            </text>
                        );
                    })}
                </g>

                {/* LINE 1 */}
                <polyline className="line-1" fill="url(#grad)" stroke="#8FE9D0" strokeWidth={5} points={bodyWeighLine} />
                <g>
                    {DATA_WEIGHT.map((item, index) => {
                        const cx = (index + 1) * COLUMN_WIDTH;
                        const percentage = ((MAX_VALUE - item.value) * 100) / MAX_VALUE;
                        const data = { ...item, value: percentage };

                        return <circle key={index} className="health-graph-dot" onMouseOver={() => onlineLineTouch("DATA_WEIGHT", data)} cx={cx} cy={item.value} r={5} />;
                    })}
                </g>

                {/* LINE 2 */}
                <polyline className="line-2" fill="url(#grad)" stroke="#FFCC21" strokeWidth={5} points={bodyFatLine} />
                <g>
                    {DATA_FAT.map((item, index) => {
                        const cx = (index + 1) * COLUMN_WIDTH;
                        const percentage = ((MAX_VALUE - item.value) * 100) / MAX_VALUE;
                        const data = { ...item, value: percentage };

                        return <circle key={index} className="health-graph-dot-yellow"  onMouseOver={() => onlineLineTouch("DATA_FAT", data)} cx={cx} cy={item.value} r={5} />;
                    })}
                </g>

                {/* X LABEL */}
                <g className="x-labels">
                    {DATA_WEIGHT.map((item, index) => {
                        const x = (index + 1) * COLUMN_WIDTH;
                        const y = 285;
                        return (
                            <text key={index} x={x} y={y}>
                                {item.month}月
                            </text>
                        );
                    })}
                </g>
            </svg>

            {/* GRAPH FOOTER */}
            {type === "big" && (
                <div className="chart-footer">
                    <ul>
                        <li>日</li>
                        <li>週</li>
                        <li>月</li>
                        <li className="active">年</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default memo(LineChart);
