import SETTINGS from "config/settings.json";
import Icon from "./Icon";

const SiteFooter = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <footer className="site-footer">
            <div className="container wrapper">
                {SETTINGS.FOOTER_NAV.map((item, index) => {
                    return (
                        <a href="#" className="item text-white" key={index}>
                            {item}
                        </a>
                    );
                })}
            </div>

            <button onClick={scrollToTop} className="btn btn-rounded">
                <Icon name="arrowUp" style={{ marginLeft: 4, marginTop: -1 }} color="#777777" />
            </button>
        </footer>
    );
};

export default SiteFooter;
