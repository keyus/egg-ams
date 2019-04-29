import AdminLayout from '../../components/adminLayout'
import AccountPage from '../../components/AccountPage'
export default function Account() {
    return (
        <AdminLayout active={3}>
            <AccountPage/>
        </AdminLayout>
    )
}
