'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LoginForm } from '@/components/LoginForm';
import { RegisterForm } from '@/components/RegisterForm';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

interface Department {
    departmentCode: string;
    departmentName: string;
}

export default function AuthPage() {

    const router = useRouter();
    const parms = useSearchParams();

    const [department, setDepartment] = useState<string>("CSE");
    const [allDepts, setDepts] = useState<Department[]>([]);
    const [message, setMessage] = useState<string>("");
    const [isLogin, setIsLogin] = useState<boolean>(parms.get('register') === 'true' ? false : true);
    const [loading, setLoading] = useState<boolean>(false);

    // Form states
    const [rollNumber, setRollNumber] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [leetcode, setLeetcode] = useState<string>("");
    const [codechef, setCodechef] = useState<string>("");
    const [hackerrank, setHackerrank] = useState<string>("");
    const [gfg, setGfg] = useState<string>("");

    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            window.location.href = '/dashboard';
        }
        fetchDepartments();
    }, []);

    useEffect(()=>{
        if(!isLogin){
            router.push('?register=true');
        }
        else{
            if(parms.get('register') === 'true'){
                router.back();
            }
        }
    })

    const fetchDepartments = async () => {
        try {
            const response = await axios.get('/api/departments');
            setDepts(response.data);
        } catch (error) {
            console.error('Error fetching departments:', error);
        }
    };

    const handleLogin = async () => {
        if (rollNumber.length !== 10) {
            showMessage("Roll Number must be 10 characters long");
            return;
        }

        if (password.length < 8) {
            showMessage("Password must be at least 8 characters long");
            return;
        }

        setLoading(true);
        signIn('credentials', {
            rollNumber,
            password
        })
        .then((response) => {
            console.log(response);
            setMessage("✅ Login successful!");
            router.push('/');
        })
        .catch((error: any) => {
            showMessage(error.response?.data?.message || "Login failed");
        })
        .finally(() => setLoading(false));
    };

    const handleRegister = async () => {
        if (rollNumber.length !== 10) {
            showMessage("Roll Number must be 10 characters long");
            return;
        }

        if (password.length < 8) {
            showMessage("Password must be at least 8 characters long");
            return;
        }

        if (name.trim().length < 5) {
            showMessage("Name must be at least 5 characters long");
            return;
        }

        setLoading(true);
        try {
            await axios.post('/api/auth/register', {
                rollNumber,
                name,
                department,
                password,
                leetcode,
                codechef,
                hackerrank,
                gfg
            });

            showMessage("✅ Registration successful! Please login.");
            setIsLogin(true);
        } catch (error: any) {
            showMessage(error.response?.data?.message || "Registration failed");
        }
        setLoading(false);
    };

    const showMessage = (msg: string) => {
        setMessage(msg);
        setTimeout(() => setMessage(""), 1700);
    };

    return (
        <div className="min-h-screen w-full bg-[#fffcf7] flex items-center justify-center px-4">
            <div className="bg-white rounded-xl shadow-xl  w-fit ">
                <div className="flex  min-h-[500px] max-sm:flex-col max-sm:min-w-0 min-w-[600px] rounded-xl overflow-hidden w-fit  h-fit">
                    {/* Left Panel */}
                    <div className=' bg-[#8f3249] w-[40%] max-sm:w-full
                    flex items-center justify-center relative py-7 min-w-[350px]'>
                        <p className=' text-white text-5xl font-4'>{isLogin ? 'Login' : 'Register'}</p>
                            <div className=' absolute bottom-9 w-full flex items-center justify-center'>
                                <button 
                                onClick={() => setIsLogin(!isLogin)}
                                    className=' px-10 w-fit bg-white  max-sm:scale-90 max-sm:bottom-[100px] right-5'>
                                    {isLogin ? 'Need to Register?' : 'Back to Login'}
                                </button>
                            </div>
                    </div>
                    {/* Right Panel */}

                    <div className=' flex-col relative flex p-5 max-sm:px-3  flex-1'>
                        {isLogin ? (
                                <LoginForm 
                                    rollNumber={rollNumber}
                                    setRollNumber={setRollNumber}
                                    password={password}
                                    setPassword={setPassword}
                                    handleSubmit={handleLogin}
                                    loading={loading}
                                />
                            ) : (
                                <RegisterForm 
                                    formData={{
                                        rollNumber, name, password, department,
                                        leetcode, codechef, hackerrank, gfg
                                    }}
                                    setters={{
                                        setRollNumber, setName, setPassword, setDepartment,
                                        setLeetcode, setCodechef, setHackerrank, setGfg, seterr:setMessage
                                    }}
                                    departments={allDepts}
                                    handleSubmit={handleRegister}
                                    loading={loading}
                                />
                            )}

                        <div className=" absolute bottom-0 mb-10 text-center font-sans text-red-600">
                            {message}
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className=' hidden max-sm:block absolute bottom-20 right-8'>
                <button 
                    onClick={() => setIsLogin(!isLogin)}
                    className=' px-10 w-fit bg-white/0 right-5'>
                    {isLogin ? 'Need to Register?' : 'Back to Login'}
                </button>
            </div>
        </div>
    );
}

interface LoginFormProps {
    rollNumber: string;
    setRollNumber: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    handleSubmit: () => void;
    loading: boolean;
}



// Add RegisterForm component with similar structure