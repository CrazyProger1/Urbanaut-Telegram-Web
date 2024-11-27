import { notFound } from "next/navigation";

const NotFoundCatchAll = () => {
  // TODO: find appropriate solution. Needed bc Vercel doesn't handle not-found as expected.
  notFound();
};

export default NotFoundCatchAll;
