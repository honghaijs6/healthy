import React, { memo, useEffect, useState } from "react";


const BODY_WEIGHT_2 = [
    {
        month: 6,
        value: 30
    },
    {
        month: 7,
        value: 60
    },
    {
        month: 8,
        value: 90
    },
    {
        month: 9,
        value: 100
    },
    {
        month: 10,
        value: 130
    },
    {
        month: 11,
        value: 150
    },
    {
        month: 12,
        value: 160
    },
    {
        month: 1,
        value: 170
    },
    {
        month: 2,
        value: 200
    },
    {
        month: 3,
        value: 210
    },
    {
        month: 4,
        value: 220
    },
    {
        month: 5,
        value: 240
    },

];

const BODY_FAT_2 = [
    {
        month: 6,
        value: 30
    },
    {
        month: 7,
        value: 50
    },
    {
        month: 8,
        value: 120
    },
    {
        month: 9,
        value: 80
    },
    {
        month: 10,
        value: 90
    },
    {
        month: 11,
        value: 130
    },
    {
        month: 12,
        value: 80
    },
    {
        month: 1,
        value: 140
    },
    {
        month: 2,
        value: 150
    },
    {
        month: 3,
        value: 160
    },
    {
        month: 4,
        value: 170
    },
    {
        month: 5,
        value: 150
    },

]

const drawLine = (arr: number[] = [], COLUMN_WIDTH: number = 50) => {
    return arr.map((item, index) => {
        const stt: number = index + 1;
        const obj = {
            x: stt * COLUMN_WIDTH,
            y: item
        }
        return obj.x + ',' + obj.y

    }).join();
}

interface LineChartProps {
    columnWidth?: number
    type?: string
    title?: string
    date?: string
    style?: React.CSSProperties
    svgStyle?: React.CSSProperties

    onLineClick?(line: string): void
}
const LineChart: React.FC<LineChartProps> = ({ onLineClick = (line: string) => { }, columnWidth = 50, type = "small", title = '', date = '', style = {}, svgStyle = {} }) => {

    const [COLUMN_WIDTH, setW] = useState(50);

    useEffect(() => {
        setW(columnWidth);
    }, [columnWidth])

    const bodyWeighLine = drawLine(BODY_WEIGHT_2.map((item) => {
        return item.value
    }), COLUMN_WIDTH);
    const bodyFatLine = drawLine(BODY_FAT_2.map((item) => {
        return item.value
    }), COLUMN_WIDTH);





    return (
        <div className="my-chart" style={{ ...style }}>

            {/* GRAPH TITLE */}
            {
                title !== '' && date !== '' && (
                    <div className="title">
                        <span className="name">
                            BODY RECORD
                        </span>
                        <span className="date">
                            2021.05.21
                        </span>

                    </div>
                )
            }

            {/* GRAPH DATA */}
            <svg style={{ marginLeft: -50, ...svgStyle }} version="1.2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="health-graph">

                <defs>
                    <pattern id={type} width={columnWidth} height={columnWidth} patternUnits="userSpaceOnUse">
                        <path d={`M 0 0 M 0 0 0 ${COLUMN_WIDTH}`} fill="none" stroke="#e5e5e5" strokeWidth={1} />
                    </pattern>
                </defs>


                {type === 'big' ? <rect x={COLUMN_WIDTH} width={`calc(100% - ${columnWidth}px)`} height="80%" fill="url(#big)" /> : <rect x={COLUMN_WIDTH} width={`calc(100% - ${columnWidth}px)`} height="80%" fill="url(#small)" />}


                {<g className="x-labels">
                    {
                        BODY_WEIGHT_2.map((item, index) => {
                            const x = (index + 1) * COLUMN_WIDTH;
                            const y = 285;
                            return (
                                <text key={index} x={x} y={y} >{item.month}月</text>
                            )
                        })
                    }
                </g>
                }
                {/* LINE 1 */}
                <polyline onClick={() => onLineClick('line_1')} className="line-1" fill="url(#grad)" stroke="#8FE9D0" strokeWidth={3} points={bodyWeighLine} />
                <g onClick={() => onLineClick('line_1')}>
                    {
                        BODY_WEIGHT_2.map((item) => {
                            return item.value
                        }).map((dot, index) => {
                            const cx = (index + 1) * COLUMN_WIDTH;
                            return (
                                <circle className="health-graph-dot" cx={cx} cy={dot} r={5} />
                            )
                        })
                    }
                </g>

                {/* LINE 2 */}
                <polyline onClick={() => onLineClick('line_2')} className="line-2" fill="url(#grad)" stroke="#FFCC21" strokeWidth={3} points={bodyFatLine} />
                <g onClick={() => onLineClick('line_2')}>
                    {
                        BODY_FAT_2.map((item) => {
                            return item.value
                        }).map((dot, index) => {
                            const cx = (index + 1) * COLUMN_WIDTH;
                            return (
                                <circle className="health-graph-dot-yellow" cx={cx} cy={dot} r={5} />
                            )
                        })
                    }
                </g>


            </svg>

            {/* GRAPH FOOTER */}
            {type === 'big' && (
                <div className="chart-footer">
                    <ul>
                        <li>
                            日
                        </li>
                        <li>
                            週
                        </li>
                        <li>
                            月
                        </li>
                        <li className="active">
                            年
                        </li>

                    </ul>
                </div>
            )}
        </div>
    )
}

export default memo(LineChart)