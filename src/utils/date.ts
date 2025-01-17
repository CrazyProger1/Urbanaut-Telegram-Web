import { format } from "date-fns";

export const formatDate = (date?: Date) => {
  if (!date) return "unknown";
  try {
    return format(date, "MMMM d, yyyy");
  } catch (e) {
    return "unknown";
  }
};
