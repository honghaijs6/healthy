//CONFIGS
import SETTINGS from "config/settings.json";

//LIBS
import { useEffect, useRef, useState } from "react";

//COMPONENTS
import Icon from "./Icon";
import Image from "next/image";

interface iNav {
    code: string;
    icon: string;
    title: string;
    size: number;
}

// IMPLEMENT CONCRETE
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
            };
        });
    };
    const _navTo = (to: string) => {
        if (to === "menu") {
            _toggleMenu();
        } else {
            document.querySelector(`[id='${to}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });

            setLocalState((prev) => {
                return {
                    ...prev,
                    isOpenMenu: false
                };
            });
        }
    };

    const _onScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            try {
                if (!myRef.current?.contains(e?.target)) {
                    setLocalState((prev) => {
                        return {
                            ...prev,
                            isOpenMenu: false
                        };
                    });
                }
            } catch (err) {}
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="site-header">
            <div ref={myRef} className="container flex" style={{ position: "relative" }}>
                <div className="LOGO">
                    <Image src="/logo.png" width={100} height={50} onClick={_onScrollTop} alt="Health logo" />
                </div>
                <div className="NAV">
                    {SETTINGS.HEADER_NAV_SHORT.map((item: iNav, index: number) => {
                        let myIcon = item.icon;
                        if (myIcon === "menu") {
                            myIcon = localState.isOpenMenu ? "close" : "menu";
                        }

                        return (
                            <a key={index} onClick={() => _navTo(item?.code)} style={{ position: "relative" }}>
                                <Icon name={myIcon} size={item.size} />
                                {item.title}
                                { item.code === "NEWS" && <label style={{ position: "absolute", left:20,top:0, borderRadius: "50%", fontSize: 9, fontFamily: "Inter", color: "#fff", width: 16, height: 16, display: "flex", justifyContent: "center", alignItems: "center", background: "#EA6C00" }}>1</label>}
                            </a>
                        );
                    })}
                </div>

                <div className="NAV-MOBILE">
                    <a onClick={_toggleMenu}>
                        <Icon name={localState.isOpenMenu ? "close" : "menu"} size={32} />
                    </a>
                </div>
                <ul className={`drawMenu ${localState.isOpenMenu ? "show" : "hide"}`}>
                    {SETTINGS.HEADER_NAV.map((item, index) => {
                        return (
                            <li onClick={() => _navTo(item?.code)} key={index}>
                                <a>{item.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SiteHeader;
