import AdminLayout from '../../components/adminLayout'
import MoneyPage from '../../components/MoneyPage'
import {getPlatform} from "../../api";
export default function Money(props) {
    return (
        <AdminLayout active={2}>
            <MoneyPage {...props}/>
        </AdminLayout>
    )
}
Money.getInitialProps = async ({req}) => {
    const props = {}
    if (req) {
        const res = await getPlatform();
        props.platform = res.data.data;
    }
    return props
}
