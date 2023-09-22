import { useSWEffect, LiveReload } from "@remix-pwa/sw";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  // LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from './tailwind.css';
import { useOneSignal } from "./hooks/one-signal";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
];


export default function App() {
  useSWEffect();
  useOneSignal({
    appId: '53edc69c-e37b-4916-aa16-a3c663669843',
    allowLocalhostAsSecureOrigin: true,
    serviceWorkerPath: '/OneSignalSDKWorker.js'
  })

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
