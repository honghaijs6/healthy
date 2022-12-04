import SiteHeader from "components/SiteHeader"
import SectionAchievementRate from "./SectionAchievement"
import SectionFoodMenu from "./SectionFoodMenu"
import SectionRecordLabel from "./SectionRecordLabel"



const Home = () => {

    return (
        <>
            {/* TOP PAGE SECTION  */}
            {/* HEADER */}
            <SiteHeader />
            {/* ACHIEVEMENT RATE */}
            <SectionAchievementRate />
            {/* FOOD MENU */}
            <SectionFoodMenu />
            {/****** END TOP PAGE SECTION  */}

            {/* MY RECORD SECTION */}
            <SectionRecordLabel />

            {/* END MY RECORD SECTION */}

        </>
    )
}

export default Home