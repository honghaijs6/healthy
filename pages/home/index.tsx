import SiteHeader from "components/SiteHeader"
import SectionAchievementRate from "./SectionAchievement"
import SectionFoodMenu from "./SectionFoodMenu"



const Home = () => {

    return (
        <>
            {/* HEADER */}
            <SiteHeader />
            
            
            {/* ACHIEVEMENT RATE */}
            <SectionAchievementRate />

            {/* FOOD MENU */}
            <SectionFoodMenu />

        </>
    )
}

export default Home