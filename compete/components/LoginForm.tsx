import React from "react";

interface LoginFormProps {
    rollNumber : string,
    setRollNumber : React.Dispatch<React.SetStateAction<string>>,
    password : string,
    setPassword : React.Dispatch<React.SetStateAction<string>>,
    handleSubmit : () => void,
    loading : boolean 
}

export const LoginForm:React.FC<LoginFormProps> = 
({ rollNumber, setRollNumber, password, setPassword, handleSubmit, loading }) => {
    return (
        <div className="space-y-6 px-5 min-w-[300px] pt-16 w-full font-thin tracking-widest">
            <div className=" flex flex-col gap-2 items-start">
                <label className="block text-gray-700">Roll Number</label>
                <input
                    type="text"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value.trim())}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="26951A05X9"
                />
            </div>
            <div className=" flex flex-col gap-2 items-start">
                <label className="block text-gray-700">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value.trim())}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="********"
                />
            </div>
            <div className=" w-[100%] flex justify-center items-center mt-16 ">
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-fit px-10 bg-[#8f3249] text-white py-2 rounded-md
                     hover:bg-[#7a2b3f]  transition-colors"
                >
                    {loading ? 'Loading...' : 'Login'}
                </button>
            </div>
        </div>
    );
}