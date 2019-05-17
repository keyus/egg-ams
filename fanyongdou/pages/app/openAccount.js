import AdminLayout from '../../components/adminLayout'
import OpenAccountPage from '../../components/openAccountPage'
export default function OpenAccount() {
    return (
        <AdminLayout active={6}>
            <OpenAccountPage/>
        </AdminLayout>
    )
}
