import { useState } from "react";
import { FaX } from "react-icons/fa6";

type ErrorMessageProps = {
    error: string;
};

export default function ErrorMessage({ error }: ErrorMessageProps) {
    const [isClicked, setIsClicked] = useState(false);

    function handleXClick() {
        setIsClicked(!isClicked);
    }

    return (
        <>
            {!isClicked && (
                <div className="absolute bg-custom-gradient-3 rounded-md shadow-custom-inset bottom-2 right-2 py-4">
                    <div
                        onClick={handleXClick}
                        className="flex justify-center cursor-pointer rounded-md p-0.5 mx-6 w-6 text-md text-[#B0B0B0] border-solid border-2 border-[#B0B0B0] hover:border-white hover:bg-[#BD2621] hover:outline-white outline-2"
                    >
                        <FaX />
                    </div>
                    <p className="font-heading text-2xl text-stroke pb-2 px-14">
                        {error}
                    </p>
                    <p className="font-body text-[#B0B0B0] text-xl px-6">
                        Failed to load titles. Try refreshing the page.
                    </p>
                </div>
            )}
        </>
    );
}
