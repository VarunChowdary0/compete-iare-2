import { Department } from "@/models/departmentSchema";
import React, { useState } from "react";

interface RegisterFormProps {
    formData: {
        rollNumber: string;
        name: string;
        department: string;
        password: string;
        leetcode: string;
        codechef: string;
        hackerrank: string;
        gfg: string;
    };
    setters: {
        setRollNumber: React.Dispatch<React.SetStateAction<string>>;
        setName: React.Dispatch<React.SetStateAction<string>>;
        setDepartment: React.Dispatch<React.SetStateAction<string>>;
        setPassword: React.Dispatch<React.SetStateAction<string>>;
        setLeetcode: React.Dispatch<React.SetStateAction<string>>;
        setCodechef: React.Dispatch<React.SetStateAction<string>>;
        setHackerrank: React.Dispatch<React.SetStateAction<string>>;
        setGfg: React.Dispatch<React.SetStateAction<string>>;
        seterr : React.Dispatch<React.SetStateAction<string>>;
    };
    departments: Department[];
    handleSubmit: () => void;
    loading: boolean;
}

export const RegisterForm:React.FC<RegisterFormProps> = ({ formData, setters, departments, handleSubmit, loading, }) => {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const nextStep = () => {
        if (step === 1) {
            // Validate basic info
            if (formData.rollNumber.length !== 10) {
                setters.seterr("Roll Number must be 10 characters long");
                return;
            }
            if (formData.name.trim().length < 5) {
                setters.seterr("Name must be at least 5 characters long");
                return;
            }
        }
        if (step === 2) {
            // Validate password
            if (formData.password.length < 8) {
                setters.seterr("Password must be at least 8 characters long");
                return;
            }
        }
        setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-7">
                        <h2 className="text-xl font-semibold text-[#8f3249] mb-6">Basic Information</h2>
                        <div className="flex gap-8">
                            <div>
                                <label className="block max-sm:text-sm font-thin text-gray-700">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setters.setName(e.target.value.toUpperCase())}
                                    className="mt-1 py-3 block w-full max-w-[230px] rounded-lg border border-gray-300 px-4"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div>
                                <label className="block max-sm:text-sm font-thin text-gray-700">Roll Number</label>
                                <input
                                    type="text"
                                    value={formData.rollNumber}
                                    onChange={(e) => setters.setRollNumber(e.target.value.trim().toUpperCase())}
                                    className="mt-1 py-3 block w-full max-w-[230px] rounded-lg border border-gray-300 px-4"
                                    placeholder="26951A05X9"
                                />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-7">
                        <h2 className="text-xl font-semibold text-[#8f3249] mb-6">Department & Security</h2>
                        <div className="flex gap-8">
                            <div>
                                <label className="block max-sm:text-sm font-thin text-gray-700">Department</label>
                                <select
                                    value={formData.department}
                                    onChange={(e) => setters.setDepartment(e.target.value)}
                                    className="mt-1 py-3 block w-full max-w-[230px] rounded-lg border border-gray-300 px-4"
                                >
                                    {departments.map((dept) => (
                                        <option key={dept.departmentCode} value={dept.departmentCode}>
                                            {dept.departmentName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block max-sm:text-sm font-thin text-gray-700">Password</label>
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setters.setPassword(e.target.value.trim())}
                                    className="mt-1 py-3 block w-full max-w-[230px] rounded-lg border border-gray-300 px-4"
                                    placeholder="Min 8 characters"
                                />
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-7">
                        <h2 className="text-xl font-semibold text-[#8f3249] mb-6">Coding Profiles</h2>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <label className="block max-sm:text-sm font-thin text-gray-700">LeetCode Username</label>
                                <input
                                    type="text"
                                    value={formData.leetcode}
                                    onChange={(e) => setters.setLeetcode(e.target.value.trim())}
                                    className="mt-1 py-3 block w-full max-w-[230px] rounded-lg border border-gray-300 px-4"
                                    placeholder="leetcode_username"
                                />
                            </div>
                            <div>
                                <label className="block max-sm:text-sm font-thin text-gray-700">CodeChef Username</label>
                                <input
                                    type="text"
                                    value={formData.codechef}
                                    onChange={(e) => setters.setCodechef(e.target.value.trim())}
                                    className="mt-1 py-3 block w-full max-w-[230px] rounded-lg border border-gray-300 px-4"
                                    placeholder="codechef_username"
                                />
                            </div>
                            <div>
                                <label className="block max-sm:text-sm font-thin text-gray-700">HackerRank Username</label>
                                <input
                                    type="text"
                                    value={formData.hackerrank}
                                    onChange={(e) => setters.setHackerrank(e.target.value.trim())}
                                    className="mt-1 py-3 block w-full max-w-[230px] rounded-lg border border-gray-300 px-4"
                                    placeholder="hackerrank_username"
                                />
                            </div>
                            <div>
                                <label className="block max-sm:text-sm font-thin text-gray-700">GeeksForGeeks Username</label>
                                <input
                                    type="text"
                                    value={formData.gfg}
                                    onChange={(e) => setters.setGfg(e.target.value.trim())}
                                    className="mt-1 py-3 block w-full max-w-[230px] rounded-lg border border-gray-300 px-4"
                                    placeholder="gfg_username"
                                />
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-7 relative h-full pb-20 max-sm:pb-0 pt-3 max-w-[650px] px-5 min-w-[300px] md:min-w-[500px] tracking-widest font-thin">
            {/* Progress indicator */}
            <div className="flex justify-center mb-8">
                {[1, 2, 3].map((dot) => (
                    <div
                        key={dot}
                        className={`h-3 w-3 rounded-full mx-2 ${
                            dot === step ? 'bg-[#8f3249]' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>

            {renderStepContent()}

            {/* Navigation buttons */}
            <div className=" absolute w-full px-10 bottom-0 flex justify-between mt-8">
                {step > 1 && (
                    <button
                        onClick={prevStep}
                        className="px-6 py-2 text-[#8f3249] border border-[#8f3249] rounded-md hover:bg-[#8f3249] hover:text-white transition-colors"
                    >
                        Previous
                    </button>
                )}
                {step < totalSteps ? (
                    <button
                        onClick={nextStep}
                        className="px-6 py-2 bg-[#8f3249] text-white rounded-md hover:bg-[#7a2b3f] transition-colors ml-auto"
                    >
                        Next
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="px-6 py-2 bg-[#8f3249] text-white rounded-md hover:bg-[#7a2b3f] transition-colors ml-auto"
                    >
                        {loading ? 'Loading...' : 'Register'}
                    </button>
                )}
            </div>
        </div>
    );
};