
import LineChart from "components/LineChart"
import SquareRecord from "components/SqareRecord"
import useWindowDimensions from "pages/hooks/useWindowDimension"
import { useEffect, useState } from "react";


const SectionRecordLabel = () => {

    const handleScreen = useWindowDimensions();

    const [localStyle, setStyle] = useState({
        marginLeft: -50,
        columnWidth: 90
    })

    useEffect(() => {

        if (handleScreen) {
            setStyle({
                marginLeft: handleScreen?.width > 768 ? -50 : -10,
                columnWidth: handleScreen?.width > 768 ? 90 : 34
            })
        }
    }, [handleScreen?.width])



    const { marginLeft, columnWidth } = localStyle

    return (
        <div>
            <div id="MY-RECORD" style={{ height: 70 }}></div>
            <div className="container">
                <div className="my-record">
                    <div className="my-record-nav">

                        <SquareRecord src="/images/MyRecommend-1.jpg" title="Body record" label="自分のカラダの記録" />
                        <SquareRecord src="/images/MyRecommend-2.jpg" title="MY EXERCISE" label="自分の運動の記録" />
                        <SquareRecord src="/images/MyRecommend-3.jpg" title="MY DIARY" label="自分の日記" />



                    </div>

                    {/* BODY RECORD GRAPH */}
                    <div className="my-record-graph">
                        <LineChart svgStyle={{ marginLeft }}
                            type="big"
                            title="BODY RECORD"
                            date="2021.05.21"
                            columnWidth={columnWidth}
                        />
                    </div>

                    <div id="MY-EXERCISE" style={{ height: 70 }}></div>

                    {/* EXERCISE DATA */}
                    <div className="my-record-data" >

                        <div className="title">
                            <label>My Exercise</label>
                            <span>2021.05.21</span>
                        </div>
                        <div className="content">
                            <div className="left">
                                <ul className="data">
                                    {
                                        Array.from(Array(10)).map((_, index) => {
                                            return (
                                                <li key={index}>
                                                    <div className="title">
                                                        家事全般（立位・軽い）<br />
                                                        <span>26kcal</span>
                                                    </div>
                                                    <div className="time">
                                                        10 mins
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="right">
                                <ul className="data">
                                    {
                                        Array.from(Array(8)).map((_, index) => {
                                            return (
                                                <li key={index}>
                                                    <div className="title">
                                                        家事全般（立位・軽い）<br />
                                                        <span>26kcal</span>
                                                    </div>
                                                    <div className="time">
                                                        10 mins
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* DIARY DATA */}
                    <div className="my-record-diary">
                        <h3>My Diary</h3>
                        <div className="content">
                            {
                                Array.from(Array(8)).map((_, index) => {
                                    return (
                                        <div key={index} className="diary">
                                            <h4>2021.05.21</h4>
                                            <span>23:25</span>
                                            <div className="text">
                                                私の日記の記録が一部表示されます。
                                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div style={{ textAlign: 'center', marginTop: 30 }}>
                            <button className="btn my-btn btn-load-more" >自分の日記をもっと見る</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SectionRecordLabel