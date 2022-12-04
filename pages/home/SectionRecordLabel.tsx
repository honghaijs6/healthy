import LineChart from "components/LineChart"
import SquareRecord from "components/SqareRecord"


const SectionRecordLabel = () => {
    return (
        <div className="container">
            <div className="my-record">
                <div className="my-record-nav">

                    <SquareRecord src="/images/MyRecommend-1.jpg" title="Body record" label="自分のカラダの記録" />
                    <SquareRecord src="/images/MyRecommend-2.jpg" title="MY EXERCISE" label="自分の運動の記録" />
                    <SquareRecord src="/images/MyRecommend-3.jpg" title="MY DIARY" label="自分の日記" />



                </div>

                <div className="my-record-graph">
                    <LineChart type="big" title="BODY RECORD" date="2021.05.21" columnWidth={87} />
                </div>

                <div className="my-record-data">
                    My Exercise here
                </div>

                <div className="my-record-diary">
                    My Diary here
                </div>

            </div>
        </div>
    )
}

export default SectionRecordLabel