// COMPONENTS
import SectionAchievementRate from "./SectionAchievement";
import SectionColumn from "./SectionColumn";
import SectionFoodMenu from "./SectionFoodMenu";
import SectionRecordLabel from "./SectionRecordLabel";

// IMPLEMENT CONCRETE
const Home = () => {
    return (
        <>
            <SectionAchievementRate />
            <SectionFoodMenu />
            <SectionRecordLabel />
            <SectionColumn />
        </>
    );
};

export default Home;
