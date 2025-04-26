import { format } from "date-fns";

export const formatDate = (date?: Date) => {
  if (!date) return "unknown";
  try {
    return format(date, "MMMM d, yyyy").toLowerCase();
  } catch (e) {
    return "unknown";
  }
};

export const formatTime = (date?: Date) => {
  if (!date) return "";
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
