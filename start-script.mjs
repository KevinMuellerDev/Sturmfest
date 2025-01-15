import os from 'os';
import { execSync } from 'child_process';

const isWindows = os.platform() === 'win32';

const command = isWindows
  ? 'set NODE_TLS_REJECT_UNAUTHORIZED=0 && nuxt dev --https --ssl-cert localhost.pem --ssl-key localhost-key.pem'
  : 'NODE_TLS_REJECT_UNAUTHORIZED=0 nuxt dev --https --ssl-cert localhost.pem --ssl-key localhost-key.pem';

console.log(`Running command: ${command}`);
execSync(command, { stdio: 'inherit', shell: true });
