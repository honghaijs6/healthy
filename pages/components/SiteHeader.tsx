import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

import Image from "next/image";

const LIST = [
    { code: 'MY-RECORD', icon: 'note', title: '自分の記録', size: 26 },
    { code: 'MY-EXERCISE', icon: 'challenge', title: 'チャレンジ', size: 32 },
    { code: 'NEWS', icon: 'info', title: 'お知らせ', size: 32 },
    { code: 'menu', icon: 'menu', title: '', size: 32 },

];

const LIST_2 = [
    { code: 'MY-RECORD', icon: 'note', title: '自分の記録', size: 26 },
    { code: 'MY-EXERCISE', icon: 'challenge', title: '体重グラフ', size: 32 },
    { code: 'NEWS', icon: 'info', title: '目標', size: 32 },
    { code: '選択中のコース', icon: 'info', title: '選択中のコース', size: 32 },
    { code: 'コラム一覧', icon: 'info', title: 'コラム一覧', size: 32 },
    { code: '設定', icon: 'info', title: '設定', size: 32 },

]

interface iNav {
    code: string
    icon: string
    title: string
    size: number
}
const SiteHeader = () => {

    const myRef = useRef<HTMLDivElement>(null);
    const [localState, setLocalState] = useState({
        isOpenMenu: false
    });


    const _toggleMenu = () => {
        setLocalState((prev) => {
            return {
                ...prev,
                isOpenMenu: !prev.isOpenMenu
            }
        })
    }
    const _navTo = (to: string) => {


        if (to === 'menu') {
            _toggleMenu()
        } else {
            document.querySelector(`[id='${to}']`)?.scrollIntoView({
                behavior: "smooth", block: 'start', inline: 'nearest'
            });

            setLocalState((prev) => {
                return {
                    ...prev,
                    isOpenMenu: false
                }
            })
        }



    }

    const _onScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {

        const handleClickOutside = (e: any) => {
            try {

                if (!myRef.current?.contains(e?.target)) {
                    setLocalState((prev) => {
                        return {
                            ...prev,
                            isOpenMenu: false
                        }
                    })
                }

            } catch (err) { }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);

    }, [])

    return (
        <div className="site-header">
            <div ref={myRef} className="container flex" style={{ position: 'relative' }}>
                <div className="LOGO">
                    
                    <Image src="/logo.png" width={100} height={50} onClick={_onScrollTop} alt="Health logo" />
                </div>
                <div className="NAV" >
                    {
                        LIST.map((item: iNav, index: number) => {

                            let myIcon = item.icon;
                            if (myIcon === 'menu') {
                                myIcon = localState.isOpenMenu ? 'close' : 'menu'
                            }

                            return (
                                <a key={index} onClick={() => _navTo(item?.code)}>
                                    <Icon name={myIcon} size={item.size} />
                                    {item.title}
                                </a>
                            )
                        })
                    }


                </div>

                <div className="NAV-MOBILE">
                    <a onClick={_toggleMenu}>
                        <Icon name={localState.isOpenMenu ? 'close' : 'menu'} size={32} />
                    </a>

                </div>
                <ul className={`drawMenu ${localState.isOpenMenu ? 'show' : 'hide'}`}>
                    {
                        LIST_2.map((item, index) => {


                            return (
                                <li onClick={() => _navTo(item?.code)} key={index}>
                                    <a>{item.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SiteHeader