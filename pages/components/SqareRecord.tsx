

const SquareRecord = ({ src = '/images/MyRecommend-1.jpg', title = '', label = '' }) => {

    return (
        <div className="record-square">
            <div className="photo" style={{ background: 'url(' + src + ') no-repeat center center' }}></div>
            <div className="marked">
                <div style={{ textAlign: 'center' }}>
                    <h3>{title}</h3>
                    <span>{label}</span>
                </div>
            </div>
        </div>
    )
}

export default SquareRecord