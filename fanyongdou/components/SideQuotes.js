import React, {Component} from 'react'
import util from '../util'

export default class SideQuotes extends Component {
    static defaultProps = {
        quanQiuGuZhi: "",
        quanQiuQiHuo: "",
    }
    static getDerivedStateFromProps(props){
        let {
            quanQiuQiHuo,
            quanQiuGuZhi,
        } = props;
        quanQiuGuZhi = util.toJson(quanQiuGuZhi,'~');
        return {
            quanQiuQiHuo: util.toJson(quanQiuQiHuo),
            quanQiuGuZhi: quanQiuGuZhi.slice(1,4),
        }
    }
    state ={
        quanQiuQiHuo: [],
        quanQiuGuZhi: [],
    }
    render() {
        const {
            quanQiuQiHuo,
            quanQiuGuZhi,
        } = this.state;
        return (
            <>
                <div className='side-item'>
                    <h2>全球股指</h2>
                    <div className='side-item-box'>
                        <table>
                            <thead>
                            <tr>
                                <th className="g3i_th0">名称</th>
                                <th className="g3i_th02">最新价</th>
                                <th className="g3i_th02">时间</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                quanQiuGuZhi.map((it,key)=>(
                                    <tr key={key}>
                                        <th className="g3i_th0">{it[1]}</th>
                                        <td className="g3i_th02">{it[3]}</td>
                                        <td className="g3i_th02" style={{
                                            lineHeight: '20px',
                                            padding: '10px 0'
                                        }}>{it[30]}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='side-item'>
                    <h2>全球期货</h2>
                    <div className='side-item-box'>
                        <table>
                            <thead>
                            <tr>
                                <th className="g3i_th0">名称</th>
                                <th className="g3i_th02">最新价</th>
                                <th className="g3i_th02">涨跌幅</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                quanQiuQiHuo.map((it,key)=>(
                                    <tr key={key}>
                                        <th className="g3i_th0">{it[13]}</th>
                                        <td className="g3i_th02">{it[0]}</td>
                                        <td className="g3i_th02">{util.formatNum(it[1], '%')}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>

            </>
        )
    }
}
