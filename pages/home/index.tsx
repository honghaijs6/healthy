import SiteHeader from "components/SiteHeader"
import SectionAchievementRate from "./SectionAchievement"
import SectionColumn from "./SectionColumn"
import SectionFoodMenu from "./SectionFoodMenu"
import SectionRecordLabel from "./SectionRecordLabel"



const Home = () => {

    return (
        <>
            {/* 1:  TOP PAGE SECTION  */}
            {/* HEADER */}
            <SiteHeader />
            {/* ACHIEVEMENT RATE */}
            <SectionAchievementRate />
            {/* FOOD MENU */}
            <SectionFoodMenu />
            {/****** END TOP PAGE SECTION  */}

            {/* 2: MY RECORD SECTION */}
            <SectionRecordLabel />
            {/* END MY RECORD SECTION */}

            {/* 3: COLUMN PAGE */}
            <SectionColumn />

            
        </>
    )
}

export default Home