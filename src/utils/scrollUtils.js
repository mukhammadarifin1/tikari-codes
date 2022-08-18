import { useRef } from "react";
const ScrollTo = (id) => {
  const ref = useRef(id);
  ref.current.scrollIntoView({ behavior: "smooth" });
}
export { ScrollTo };
