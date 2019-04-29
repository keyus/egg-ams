import AdminLayout from '../../components/adminLayout'
import MoneyPage from '../../components/MoneyPage'
export default function Money() {
    return (
        <AdminLayout active={2}>
            <MoneyPage/>
        </AdminLayout>
    )
}
