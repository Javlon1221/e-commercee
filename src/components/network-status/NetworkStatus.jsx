import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import React from "react";
import "./style.css";

const OnlineStatus = () => {
  const { online, firstEnter } = useOnlineStatus();

  if (!firstEnter) return null;

  return (
    <p
      className={`text-center text-white text-sm ${
        online
          ? "bg-green-500 online-status"
          : "bg-red-500 offline-status"
      }`}
    >
      {online ? "online" : "offline"}
    </p>
  );
};

export default React.memo(OnlineStatus);
