import Layout from '../components/layout'
import dynamic from 'next/dynamic';
import {QuanQiuQiHuo, QuanQiuGuZhi} from '../api'

const SideQuotes = dynamic(() => import('../components/SideQuotes'));

export default function PlatformNews(props) {
    return (
        <Layout title='平台资讯' active={3}>
            <div className='page-container'>
                <div className='g1200'>
                    <ul className="tab-h">
                        <li className="active">平台资讯</li>
                        <li id="tabP">要闻</li>
                        <li className="tab-h-l">研报</li>
                        <li className="tab-h-l">财经日历</li>
                    </ul>
                    <div className='lay-block'>
                        <div className='lay-list'>
                            <ul>
                                <li>
                                    <div className='lay-list-fl fl'>
                                        <img src="/static/images/test.jpg" alt=""/>
                                    </div>
                                    <div className='lay-list-fr fr'>
                                        <div className='item-container'>
                                            <p className='item-title'><a>注意！基本面和技術面均現重磅利好 美元新一輪漲勢一觸即發？</a></p>
                                            <p className='item-desc'>
                                                <a>FX168財經報社(香港)訊
                                                    周五(4月19日)，美國最新公布的新屋開工數據創下近兩年以來的最低水平，美元指數交投於平盤下方。由於多個市場恰逢耶穌受難日而休市，交投非常清淡。技術上，有分析指出，眼下美元又逼近此...
                                                </a>
                                            </p>
                                        </div>
                                        <p className='time'>
                                            <span>2018-28-29 12:32</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='lay-list-fl fl'>
                                        <img src="/static/images/test.jpg" alt=""/>
                                    </div>
                                    <div className='lay-list-fr fr'>
                                        <div className='item-container'>
                                            <p className='item-title'><a>注意！基本面和技術面均現重磅利好 美元新一輪漲勢一觸即發？</a></p>
                                            <p className='item-desc'>
                                                <a>FX168財經報社(香港)訊
                                                    周五(4月19日)，美國最新公布的新屋開工數據創下近兩年以來的最低水平，美元指數交投於平盤下方。由於多個市場恰逢耶穌受難日而休市，交投非常清淡。技術上，有分析指出，眼下美元又逼近此...
                                                </a>
                                            </p>
                                        </div>
                                        <p className='time'>
                                            <span>2018-28-29 12:32</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='lay-list-fl fl'>
                                        <img src="/static/images/test.jpg" alt=""/>
                                    </div>
                                    <div className='lay-list-fr fr'>
                                        <div className='item-container'>
                                            <p className='item-title'><a>注意！基本面和技術面均現重磅利好 美元新一輪漲勢一觸即發？</a></p>
                                            <p className='item-desc'>
                                                <a>FX168財經報社(香港)訊
                                                    周五(4月19日)，美國最新公布的新屋開工數據創下近兩年以來的最低水平，美元指數交投於平盤下方。由於多個市場恰逢耶穌受難日而休市，交投非常清淡。技術上，有分析指出，眼下美元又逼近此...
                                                </a>
                                            </p>
                                        </div>
                                        <p className='time'>
                                            <span>2018-28-29 12:32</span>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='lay-side'>
                            <SideQuotes {...props}/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
PlatformNews.getInitialProps = async () => {
    const quanQiuQiHuo = await QuanQiuQiHuo();
    const quanQiuGuZhi = await QuanQiuGuZhi();
    return {
        quanQiuQiHuo: quanQiuQiHuo.data,
        quanQiuGuZhi: quanQiuGuZhi.data,
    }
}
