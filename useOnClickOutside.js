import { useEffect } from "react";

export const useOnClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

// Example
const modalRef = useRef(null);

useOnClickOutside(modalRef, () => {
  // Handle the click outside of the modal here
});

{
  /* <div ref={modalRef}>

</div> */
}
