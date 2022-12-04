import Icon from "./Icon"

const LIST = [
    { icon: 'note', title: '自分の記録', size: 26 },
    { icon: 'challenge', title: 'チャレンジ', size: 32 },
    { icon: 'info', title: 'お知らせ', size: 32 },
    { icon: 'menu', title: '', size: 32 },

];

interface iNav {
    icon: string
    title: string
    size: number
}
const SiteHeader = () => {

    return (
        <div className="site-header">
            <div className="container flex">
                <div className="LOGO">
                    <img src="/logo.png" alt="Health logo" />
                </div>
                <div className="NAV">
                    {
                        LIST.map((item: iNav, index: number) => {
                            return (
                                <a key={index}>
                                    <Icon name={item.icon} size={item.size} />
                                    {item.title}
                                </a>
                            )
                        })
                    }
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