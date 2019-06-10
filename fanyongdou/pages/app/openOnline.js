import AdminLayout from '../../components/adminLayout'
import OpenOnline from '../../components/openOnline'
import {getPlatform,readIdCardAuth, readOpenAccount} from "../../api";

export default function Index(props) {
    return (
        <AdminLayout active={7}>
            <OpenOnline  {...props}/>
        </AdminLayout>
    )
}
Index.getInitialProps = async (ctx) => {
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
