import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-800  flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1295094894/vector/blue-brush-pattern-background.jpg?s=612x612&w=0&k=20&c=OqEJXuGg1gj0Ono3GJ_DgrU5ADTF8-lk46i_pgbq0oc=')`
          }}>
            <Navbar />
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full space-y-6">
                <h1 className="text-2xl font-semibold text-center text-gray-800">
                    Welcome!
                </h1>

                <div className="space-y-4">
                    <p className="text-gray-600">
                        If you are already registered with us, Please choose Login
                    </p>

                    <p className="text-gray-600">
                        If you are visiting for the first time, Please choose Signup
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <Link href="/getin/login" className="px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                            Log in
                        </Link>
                        <Link href="/getin/signup" className="px-8 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>

            {/* Background pattern */}
            <div className="fixed inset-0 -z-10 bg-[linear-gradient(45deg,_#f1f5f9_25%,_transparent_25%,_transparent_75%,_#f1f5f9_75%,_#f1f5f9),linear-gradient(45deg,_#f1f5f9_25%,_transparent_25%,_transparent_75%,_#f1f5f9_75%,_#f1f5f9)] bg-[length:60px_60px] opacity-10" />
        </div>
    );
}