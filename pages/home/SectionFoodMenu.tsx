import Icon from "components/Icon"
import ShapeFood from "components/ShapeFood"


const LIST = [
    {
        title: 'Morning',
        icon: 'knife'
    },
    {
        title: 'Lunch',
        icon: 'knife'
    },
    {
        title: 'Dinner',
        icon: 'knife'
    },
    {
        title: 'Snack',
        icon: 'coffee'
    },

];

const DATA = [
    {
        cate: 'morning',
        title: '05.21 Morning',
        photo: '/images/m01.jpg',
    },
    {
        cate: 'morning',
        title: '05.20 Morning',
        photo: '/images/m02.jpg',
    },
    {
        cate: 'morning',
        title: '05.19 Morning',
        photo: '/images/m03.jpg',
    },

    {
        cate: 'lunch',
        title: '05.21 lunch',
        photo: '/images/l01.jpg',
    },
    {
        cate: 'lunch',
        title: '05.20 lunch',
        photo: '/images/l02.jpg',
    },
    {
        cate: 'lunch',
        title: '05.19 lunch',
        photo: '/images/l03.jpg',
    },

    {
        cate: 'dinner',
        title: '05.21 Dinner',
        photo: '/images/d01.jpg',
    },
    {
        cate: 'dinner',
        title: '05.20 Dinner',
        photo: '/images/d02.jpg',
    },

    {
        cate: 'snack',
        title: '05.21 Snack',
        photo: '/images/d01.jpg',
    },


]
const SectionFoodMenu = () => {

    return (
        <div className="section-food-menu container" >

            <div className="tab">
                {
                    LIST.map((item, index) => {
                        return (
                            <ShapeFood iconName={item.icon} label={item.title} key={index} />
                        )
                    })
                }
            </div>
            <div className="content">
                {
                    DATA.slice(0, 8).map((item, index) => {
                        return (
                            <div key={index} className="item" style={{ background: 'url(' + item.photo + ')' }}>
                                <label>
                                    {item.title}
                                </label>
                            </div>
                        )
                    })
                }

                <button className="btn my-btn btn-load-more" style={{ marginTop: 30 }}>記録をもっと見る</button>
            </div>
        </div>
    )
}

export default SectionFoodMenu 