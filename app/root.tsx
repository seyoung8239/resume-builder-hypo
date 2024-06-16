import { Link, Links, Meta, Outlet, Scripts } from "@remix-run/react";

const Root = () => {
  return (
    <html lang="kr">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <nav>
          <Link to="/step/1">step1</Link>
        </nav>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
};

export default Root;
