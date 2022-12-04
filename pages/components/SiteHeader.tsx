import Icon from "./Icon"

const LIST = [
    { code: 'MY-RECORD', icon: 'note', title: '自分の記録', size: 26 },
    { code: 'MY-EXERCISE', icon: 'challenge', title: 'チャレンジ', size: 32 },
    { code: 'NEWS', icon: 'info', title: 'お知らせ', size: 32 },
    { code: '', icon: 'menu', title: '', size: 32 },

];

interface iNav {
    code: string
    icon: string
    title: string
    size: number
}
const SiteHeader = () => {

    const _navTo = (to: string) => {

        document.querySelector(`[id='${to}']`)?.scrollIntoView({
            behavior: "smooth", block: 'start', inline: 'nearest'
        })
    }

    const _onScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className="site-header">
            <div className="container flex">
                <div className="LOGO">
                    <img src="/logo.png" onClick={_onScrollTop} alt="Health logo" />
                </div>
                <div className="NAV">
                    {
                        LIST.map((item: iNav, index: number) => {
                            return (
                                <a key={index} onClick={() => _navTo(item?.code)}>
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