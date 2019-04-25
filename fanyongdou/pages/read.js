import Layout from '../components/layout'
import dynamic from 'next/dynamic';
import {QuanQiuQiHuo, QuanQiuGuZhi} from '../api'

const SideQuotes = dynamic(() => import('../components/SideQuotes'));

export default function Read(props) {
    return (
        <Layout title='平台资讯' active={3}>
            <div className='page-container'>
                <div className='g1200'>
                    <div className='lay-block'>
                        <div className='lay-list read'>
                            <div className="article-title">
                                <h3>

                                    <span property="schema:name" title="深圳农村商业银行单位大额存单 2019年第8期发行公告">深圳农村商业银行单位大额存单 2019年第8期发行公告</span>
                                </h3>
                                <span className="publish-date">2019-04-19</span>
                            </div>
                            <div className='read-content'>
                                <p>周四（4月25日）现货黄金小幅走低，现报1273.80美元，跌幅0.15%。</p>

                                <p>尽管周三加拿大利率决议明确表示放弃加息，多数非美货币走弱，美元刷新近一年高点，但是黄金并未走低，且一度反弹至1280美元附近，呈现出明显的抗跌性，因地缘风险因素提振了黄金买需。但是需注意黄金ETF仍呈现出持续流出的状态，暗示市场对金价走向持看空立场。市场正密切关注晚间美国的耐用品订单数据和周五公布的美国一季度GDP数据表示，这将对黄金走向产生直接的影响。</p>
                            </div>
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
Read.getInitialProps = async () => {
    const quanQiuQiHuo = await QuanQiuQiHuo();
    const quanQiuGuZhi = await QuanQiuGuZhi();
    return {
        quanQiuQiHuo: quanQiuQiHuo.data,
        quanQiuGuZhi: quanQiuGuZhi.data,
    }
}
