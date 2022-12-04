import Icon from "./Icon"


const LIST = [
    '会員登録',
    '運営会社',
    '利用規約',
    '個人情報の取扱について',
    '特定商取引法に基づく表記',
    'お問い合わせ'
]
const SiteFooter = () => {


    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});

    }
    return (
        <footer className='site-footer'>
            <div className='container'>
                {
                    LIST.map((item, index) => {
                        return (
                            <a className="item" key={index}>{item}</a>
                        )
                    })
                }
            </div>

            <button onClick={scrollToTop} className="btn btn-rounded">
                <Icon name="arrowUp" style={{ marginLeft: 4, marginTop: -1 }} color="#777777" />
            </button>
        </footer>
    )
}

export default SiteFooter