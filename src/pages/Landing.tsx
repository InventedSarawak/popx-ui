const Landing = () => {
    return (
        <div className="flex flex-col justify-end h-full min-h-[90vh]">
            <h1 className="poppins-semibold text-3xl text-[#1d2226]">Welcome to PopX</h1>
            <p className="text-[#74777b] poppins-regular my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex flex-col align-middle mt-4 gap-y-2">
                <a href="/signup" className="rounded">
                    <button className="bg-[#6c25ff] text-white py-3 px-4 rounded min-w-full poppins-medium cursor-pointer">
                        Create Account
                    </button>
                </a>
                <a href="/login" className="rounded">
                    <button className="bg-[#cebafb] text-black py-3 px-4 rounded min-w-full poppins-medium cursor-pointer">
                        Already Registered? Login
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Landing
