
const TABS = [
    {
        title: 'RECOMMENDED COLUMN',
        desc: 'オススメ'
    },

    {
        title: 'RECOMMENDED COLUMN',
        desc: 'ダイエット'
    },
    {
        title: 'RECOMMENDED COLUMN',
        desc: '美容'
    },
    {
        title: 'RECOMMENDED COLUMN',
        desc: '健康'
    },

];

const ARTICLES = [
    {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        photo: '/images/column-1.jpg',
        tags: ['魚料理', '和食', 'DHA'],
        date: '2021.05.17   23:25'
    },
    {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        photo: '/images/column-2.jpg',
        tags: ['魚料理', '和食', 'DHA'],
        date: '2021.05.17   23:25'
    },
    {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        photo: '/images/column-3.jpg',
        tags: ['魚料理', '和食', 'DHA'],
        date: '2021.05.17   23:25'
    },
    {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        photo: '/images/column-4.jpg',
        tags: ['魚料理', '和食', 'DHA'],
        date: '2021.05.17   23:25'
    },
    {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        photo: '/images/column-5.jpg',
        tags: ['魚料理', '和食', 'DHA'],
        date: '2021.05.17   23:25'
    },
    {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        photo: '/images/column-6.jpg',
        tags: ['魚料理', '和食', 'DHA'],
        date: '2021.05.17   23:25'
    },
    {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        photo: '/images/column-7.jpg',
        tags: ['魚料理', '和食', 'DHA'],
        date: '2021.05.17   23:25'
    },
    {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        photo: '/images/column-8.jpg',
        tags: ['魚料理', '和食', 'DHA'],
        date: '2021.05.17   23:25'
    },



];

const SectionColumn = () => {
    return (
        <>
            <div id="NEWS" style={{ height: 70 }}></div>
            
            <div className="container" >
                <div className="section-column-page">
                    <div className="rec-nav">
                        {
                            TABS.map((item, index) => {
                                return (
                                    <div key={index} className="item">
                                        <h3>{item.title}</h3>
                                        <hr />
                                        <span>{item.desc}</span>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="content">
                        {
                            ARTICLES.map((item, index) => {
                                return (
                                    <div key={index} className="article">
                                        <a href="#">
                                            <div className="photo" style={{ background: 'url(' + item.photo + ')' }}>
                                                <span>{item.date}</span>
                                            </div>
                                        </a>
                                        <div className="title">
                                            <a href="#">
                                                {item.title}
                                            </a>
                                        </div>
                                        <div className="tags">
                                            {
                                                item.tags.map((tag, subIndex) => {
                                                    const myKey = index + 'sub-' + subIndex
                                                    return (
                                                        <a href="#" key={myKey}>#{tag}</a>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div style={{ width: '100%', textAlign: 'center', marginTop: 30 }}>
                            <button className="btn my-btn btn-load-more">コラムをもっと見る</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SectionColumn