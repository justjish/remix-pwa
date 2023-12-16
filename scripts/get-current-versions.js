import { readdirSync, readFileSync } from 'fs';

const directories = readdirSync('packages', { withFileTypes: true })

/**
 * @type {Record<string, string>[]}
 */
let versions = [];

directories.map((directory) => {
  if (!directory.isDirectory() || directory.name === 'workbox-runtime') {
    return;
  }

  const packageName = readFileSync(`packages/${directory.name}/package.json`, 'utf-8');

  versions.push({
    name: directory.name,
    version: JSON.parse(packageName).version,
  });
});

console.log(versions);

export { versions };
