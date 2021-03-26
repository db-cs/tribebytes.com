import { useEffect, useRef } from "react";

export default function Bailey() {
  const cursorRef = useRef(null);
  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        "style",
        "top: " + e.pageY + "px; left: " + e.pageX + "px;"
      );
      console.log("yes2");
    });
    // ADD SECOND ARGUMENT
    document.addEventListener("click", () => {
      console.log("yes1");
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add("expand");
      setTimeout(() => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.remove("expand");
      }, 500);
    });
  }, []);

  return (
    <div className="bailey" ref={cursorRef}>
      <img src="/thebailey.jpg" class="absolute"></img>;
    </div>
  );
}
