import Layout from '../components/layout'

export default function Home() {
    return (
        <Layout title='返佣平台' active={2}>
            <>
                <div className="default-banner">
                    <div className="default-banner-size">
                        <h1 style={{color: '#fff'}}>为合作伙伴链接优秀大宗交易平台</h1>
                        <h2>立即成为返佣豆会员，交易佣金轻松享不停</h2>
                        <p className="join-btn"><a href="javascript:void(0);">立即加入</a></p>
                    </div>
                </div>

                <div className="grid1200">
                    <div>
                        <ul className="list-wrap" id="listWrap">
                            <li className="list-item host-cont clearfix"><a target="_blank"
                                                                            href="index/hostDetail?organizationId=2">
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="game-img"><img
                                                src="//img30.360buyimg.com/ditech/jfs/t29887/301/403910798/5430/8fe40e4/5bf2647dNe85b9eb3.png"
                                                data-original="//img30.360buyimg.com/ditech/jfs/t29887/301/403910798/5430/8fe40e4/5bf2647dNe85b9eb3.png"
                                                alt="京东数科" style={{display: 'inline'}}/></div>
                                        </td>
                                        <td>
                                            <div className="cont-txt-big"><h2 title="京东数科">京东数科</h2>
                                                <h5>预见 · 改变 · 实现</h5></div>
                                        </td>
                                        <td>
                                            <div className="cont-txt"><h2><i>2</i></h2>
                                                <h5>累积比赛场次</h5></div>
                                        </td>
                                        <td>
                                            <div className="cont-txt"><h2><i>2255</i></h2>
                                                <h5>累积参赛人次</h5></div>
                                        </td>
                                        <td>
                                            <div className="cont-txt"><h2><i>2200000</i></h2>
                                                <h5>累积总奖池</h5></div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </a></li>
                            <li className="list-item host-cont clearfix"><a target="_blank"
                                                                            href="index/hostDetail?organizationId=3">
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="game-img"><img
                                                src="//img30.360buyimg.com/ditech/jfs/t26455/81/1936943010/5683/133eb0e2/5bf26588N4a581522.png"
                                                data-original="//img30.360buyimg.com/ditech/jfs/t26455/81/1936943010/5683/133eb0e2/5bf26588N4a581522.png"
                                                alt="京东" style={{display: 'inline'}}/></div>
                                        </td>
                                        <td>
                                            <div className="cont-txt-big"><h2 title="京东">京东</h2>
                                                <h5>致力于成为为社会创造最大价值的企业</h5></div>
                                        </td>
                                        <td>
                                            <div className="cont-txt"><h2><i>2</i></h2>
                                                <h5>累积比赛场次</h5></div>
                                        </td>
                                        <td>
                                            <div className="cont-txt"><h2><i>2255</i></h2>
                                                <h5>累积参赛人次</h5></div>
                                        </td>
                                        <td>
                                            <div className="cont-txt"><h2><i>2200000</i></h2>
                                                <h5>累积总奖池</h5></div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </>
        </Layout>
    )
}
