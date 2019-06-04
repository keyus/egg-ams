import AdminLayout from '../../components/adminLayout'
import PayPage from '../../components/PayPage'
export default function Pay(props) {
    return (
        <AdminLayout active={4}>
            <PayPage {...props}/>
        </AdminLayout>
    )
}

