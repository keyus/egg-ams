import AdminLayout from '../../components/adminLayout'
import OpenAccountPage from '../../components/openAccountPage'
import {getPlatform,readIdCardAuth, readOpenAccount} from "../../api";
export default function OpenAccount(props) {
    return (
        <AdminLayout active={6}>
            <OpenAccountPage  {...props}/>
        </AdminLayout>
    )
}
OpenAccount.getInitialProps = async (ctx) => {
    const props = {}
    if (ctx.req) {
        const token = ctx.reduxStore.getState().token;
        const [idCard, platform, openAccount]= await Promise.all([readIdCardAuth(token),getPlatform(), readOpenAccount(token)]);
        props.platform = platform.data;
        props.idCard = idCard.data;
        props.openAccount = openAccount.data;
    }
    return props;
}
