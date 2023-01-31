import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen bg-base_white flex items-center justify-center">
            <div
                className="
                    block w-full sm:max-w-4xl 
                    mx-5 p-10 
                    bg-white shadow-md 
                    overflow-hidden rounded-lg"
            >
                <ApplicationLogo />
                {children}
            </div>
        </div>
    );
}
