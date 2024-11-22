"use client";

import Link from "next/link";

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

const GlobalError = ({ error, reset }: GlobalErrorProps) => {
  return (
    <html>
      <body>
        <Link href={CONTACT_ADMIN_URL}>Contact the administrators.</Link>
      </body>
    </html>
  );
};

export default GlobalError;
