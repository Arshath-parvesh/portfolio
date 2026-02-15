import { useEffect, useState } from "react";

const Loader = ({ loading }) => {
  const [phase, setPhase] = useState("enter"); // enter | hold | exit
  const [readyToExit, setReadyToExit] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (loading) {
      setVisible(true);
      setPhase("enter");
      setReadyToExit(false);
    }
  }, [loading]);

  useEffect(() => {
    if (!loading && readyToExit) {
      setPhase("exit");
    }
  }, [loading, readyToExit]);

  // simulate "line reached center"
  useEffect(() => {
    if (phase === "enter") {
      const timer = setTimeout(() => {
        setPhase("hold");
        setReadyToExit(true);
      }, 1000); // same as animation duration

      return () => clearTimeout(timer);
    }

    if (phase === "exit") {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [phase]);

  if (!visible) return null;

  const topStyle =
    phase === "enter"
      ? "translate-y-[50vh]"
      : phase === "hold"
        ? "translate-y-[50vh]"
        : "-translate-y-full";

  const bottomStyle =
    phase === "enter"
      ? "-translate-y-[50vh]"
      : phase === "hold"
        ? "-translate-y-[50vh]"
        : "translate-y-full";

  return (
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">
      {/* Top Line */}
      <div
        className={`absolute top-0 w-full h-1 bg-white transform transition-transform duration-1000 ease-in-out ${topStyle}`}
      ></div>

      {/* Bottom Line */}
      <div
        className={`absolute bottom-0 w-full h-1 bg-white transform transition-transform duration-1000 ease-in-out ${bottomStyle}`}
      ></div>
    </div>
  );
};

export default Loader;
