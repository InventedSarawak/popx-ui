import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="bg-white max-w-screen flex justify-center items-center min-h-screen">
            <div className="container max-w-sm mx-auto bg-[#f7f8f9] border border-[#d1d5db] min-h-[90vh] p-4">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
