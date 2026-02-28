import { useEffect, useState } from "react";

const CursorTrail = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Only add custom cursor on larger screens where people use a mouse
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Expand cursor when hovering over interactive elements
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (window.matchMedia("(pointer: coarse)").matches) return null;

    return (
        <>
            <div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-accent pointer-events-none z-[99] transition-transform duration-300 ease-out"
                style={{
                    transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isHovering ? 1.5 : 1})`,
                }}
            />
        </>
    );
};

export default CursorTrail;
