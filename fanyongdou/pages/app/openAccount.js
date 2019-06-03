import AdminLayout from '../../components/adminLayout'
import OpenAccountPage from '../../components/openAccountPage'
import {getPlatform} from "../../api";
export default function OpenAccount(props) {
    return (
        <AdminLayout active={6}>
            <OpenAccountPage  {...props}/>
        </AdminLayout>
    )
}
OpenAccount.getInitialProps = async ({req}) => {
    const props = {}
    if (req) {
        const res = await getPlatform();
        props.platform = res.data;
    }
    return props
}
