import AdminLayout from '../../components/adminLayout'
import OpenOnline from '../../components/openOnline'
import {getPlatform, readOpenAccountOther} from "../../api";

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
        const [platform, openAccount]= await Promise.all([getPlatform(), readOpenAccountOther(token)]);
        props.platform = platform.data;
        props.openAccount = openAccount.data;
    }
    return props;
}
