import Icon from "./Icon"

const SiteHeader = () => {

    return (
        <div className="site-header">
            <div className="container flex">
                <div className="LOGO">
                    <img src="/logo.png" alt="Health logo" />
                </div>
                <div className="NAV">
                    <a>
                        <Icon name="note" size={26} />
                        自分の記録
                    </a>
                    <a>
                        <Icon name="challenge" size={32} />
                        チャレンジ
                    </a>
                    <a>
                        <Icon name="info" size={32} />
                        お知らせ
                    </a>
                    <a>
                        <Icon name="menu" size={32} />
                    </a>
                </div>

                <div className="NAV-MOBILE">
                    <a>
                        <Icon name="menu" size={32} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SiteHeader