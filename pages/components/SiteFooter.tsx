

const LIST = [
    '会員登録',
    '運営会社',
    '利用規約',
    '個人情報の取扱について',
    '特定商取引法に基づく表記',
    'お問い合わせ'
]
const SiteFooter = () => {

    return (
        <footer className='site-footer'>
            <div className='container'>
                {
                    LIST.map((item, index)=>{
                        return (
                            <a className="item" key={index}>{item}</a>
                        )
                    })
                }
            </div>
        </footer>
    )
}

export default SiteFooter