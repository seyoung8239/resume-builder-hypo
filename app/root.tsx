import { Outlet } from "@remix-run/react";

const Root = () => {
  return (
    <html lang="kr">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
};

export default Root;
