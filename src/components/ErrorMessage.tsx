import { useState } from "react";
import { FaX } from "react-icons/fa6";

type ErrorMessageProps = {
    error?: string;
};

export function ErrorMessage({ error }: ErrorMessageProps) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            {!isClicked && (
                <div className="fixed z-40 bg-custom-gradient-3 rounded-md shadow-custom-inset bottom-24 lg:bottom-2 right-2 py-4 w-[85%] sm:w-auto">
                    <div
                        onClick={() => setIsClicked(!isClicked)}
                        className="flex justify-center cursor-pointer rounded-md p-0.5 mx-6 w-6 text-md text-custom-gray border-solid border-2 border-custom-gray hover:border-white hover:bg-[#BD2621] hover:outline-custom-white hover:text-custom-white outline-2"
                    >
                        <FaX />
                    </div>
                    <p className="font-heading text-xl lg:text-2xl text-stroke-blue pb-2 px-14">
                        {error}
                    </p>
                    <p className="font-body text-custom-gray text-xl px-6">
                        Failed to load titles. Try refreshing the page.
                    </p>
                </div>
            )}
        </>
    );
}
