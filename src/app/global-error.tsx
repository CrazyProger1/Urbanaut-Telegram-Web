"use client";

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

const GlobalError = (props: GlobalErrorProps) => {
  console.error(props);
  return (
    <html>
      <body>An error occurred</body>
    </html>
  );
};

export default GlobalError;
