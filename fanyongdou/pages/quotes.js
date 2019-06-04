import Layout from '../components/layout'
import axios from "axios";
import moment from "moment";
import classnames from 'classnames'
import util from '../util'
import menus from '../components/quotes/menus'

export default function Quotes(props) {
    let {
        data,
        exchName,
    } = props;
    let current = menus.find(it=>it.name === exchName) || {}
    if(Array.isArray(data)){
        data = data.filter(it=>it.name);
    }
    return (
        <Layout title='大宗行情'
                header='primary'
                active={7}>
            <div className="sub-floor sub-sort sub-page">
                <div className="sub-cont">
                    <div className="sort-cont">
                        <div>
                            <div className="detail-box">
                                <h6 className="title">{current.title || '国际外汇'}</h6>
                                <table className='data-table'>
                                    <thead>
                                    <tr>
                                        <th>名称</th>
                                        <th>最新价</th>
                                        <th>涨跌</th>
                                        <th>涨跌幅</th>
                                        <th>咋收</th>
                                        <th>更新时间</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        Array.isArray(data) &&
                                        data.map((it,key)=>{

                                            const zd = (parseFloat(it.c) - parseFloat(it.p)).toFixed(it.c.toString().split('.')[1].length)
                                            const zdf = (zd/it.c * 100).toFixed(2) + '%'
                                           return (
                                               <tr key={key}>
                                                   <td>{it.name}</td>
                                                   <td>{it.c}</td>
                                                   <td className='bold'>
                                                       {util.formatNum(zd)}
                                                   </td>
                                                   <td>
                                                       {util.formatNum(zdf, '%')}
                                                   </td>
                                                   <td>{it.p}</td>
                                                   <td>{moment(it.t* 1000).format('HH:mm:ss')}</td>
                                               </tr>
                                           )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div className="sort-menu-list">
                        {
                            menus.map((it,key)=>(
                                <a href={`/quotes?exchName=${it.name}`} key={key} className={classnames({
                                    active: exchName === it.name
                                })}><span>{it.title}</span></a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}
Quotes.getInitialProps = async ({ req, query }) => {
    let {exchName} = query;
    exchName = exchName || 'WH'
    const res = await axios.get(`https://api-q.fx678.com/exchangeSymbol.php?exchName=${exchName}`);
    return {
        data: res.data,
        exchName,
    }
}
