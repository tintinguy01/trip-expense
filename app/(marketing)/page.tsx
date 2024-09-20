import { SignupModal } from "@/components/modals/signup-modal";
import { Login } from "./_components/login";

const MarketingPage = () => {
    return ( 
        <div className="min-h-full flex flex-col">
            <div className="flex flex-1 items-center">
                <div className="flex justify-center items-center w-full max-w-[60%]">
                    <Login />
                </div>
                <SignupModal />
            </div>
        </div>
     );
}

export default MarketingPage;
