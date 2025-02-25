import { useContext, useEffect, useRef } from "react";
import { AppContext, MobileNavigation } from "./index";

export function Footer() {
    const { isInputFocussed, isSearchBarIconClicked } = useContext(AppContext);
    const footerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function adjustFooterPosition() {
            if (footerRef.current) {
                if (window.visualViewport) {
                    const { height } = window.visualViewport;
                    footerRef.current.style.bottom = `${
                        window.innerHeight - height
                    }px`;
                } else {
                    footerRef.current.style.bottom = "0px";
                }
            }
        }

        function handleFocusSearch() {
            if (isInputFocussed || isSearchBarIconClicked) {
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    adjustFooterPosition();
                }, 300);
            } else {
                setTimeout(() => {
                    if (footerRef.current) {
                        footerRef.current.style.bottom = "0px";
                    }
                }, 400);
            }
        }

        handleFocusSearch();

        if (window.visualViewport) {
            window.visualViewport.addEventListener(
                "resize",
                adjustFooterPosition
            );
            window.visualViewport.addEventListener(
                "scroll",
                adjustFooterPosition
            );
        }

        return () => {
            if (window.visualViewport) {
                window.visualViewport.removeEventListener(
                    "resize",
                    adjustFooterPosition
                );
                window.visualViewport.removeEventListener(
                    "scroll",
                    adjustFooterPosition
                );
            }
        };
    }, [isInputFocussed, isSearchBarIconClicked]);

    return (
        <nav
            ref={footerRef}
            className="md:hidden flex items-center fixed bottom-0 w-full z-50 justify-center bg-custom-gradient-1 shadow-custom-drop"
        >
            <MobileNavigation />
        </nav>
    );
}
