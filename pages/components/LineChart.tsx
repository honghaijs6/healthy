

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
        const stt = index + 1;
        const obj = {
            x: stt * COLUMN_WIDTH,
            y: item
        }
        return obj.x + ',' + obj.y

    }).join();
}
const LineChart = () => {

    const COLUMN_WIDTH = 50;
    const bodyWeighLine = drawLine(BODY_WEIGHT_2.map((item) => {
        return item.value
    }), COLUMN_WIDTH);
    const bodyFatLine = drawLine(BODY_FAT_2.map((item) => {
        return item.value
    }), COLUMN_WIDTH);



    return (
        <div style={{ width: '95%' }}>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="health-graph">
                <defs>
                    <pattern id="grid" width={COLUMN_WIDTH} height={COLUMN_WIDTH} patternUnits="userSpaceOnUse">
                        <path d="M 0 0 M 0 0 0 50" fill="none" stroke="#e5e5e5" strokeWidth={1} />
                    </pattern>
                </defs>


                <rect x={COLUMN_WIDTH} width={`calc(100% - ${COLUMN_WIDTH}px)`} height="80%" fill="url(#grid)" />



                {<g className="x-labels">
                    {
                        BODY_WEIGHT_2.map((item, index) => {
                            const x = (index + 1) * COLUMN_WIDTH;
                            const y = 290;
                            return (
                                <text key={index} x={x} y={y} >{item.month}月</text>
                            )
                        })
                    }
                </g>
                }
                {/* LINE 1 */}
                <polyline fill="url(#grad)" stroke="#8FE9D0" strokeWidth={3} points={bodyWeighLine} />
                <g>
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
                <polyline fill="url(#grad)" stroke="#FFCC21" strokeWidth={3} points={bodyFatLine} />
                <g>
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
        </div>
    )
}

export default LineChart