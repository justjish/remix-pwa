#!/usr/bin/env ts-node
//@ts-nocheck

(async () => {
  const run = (await import('@remix-pwa/dev')).run;

  await run();
})();

