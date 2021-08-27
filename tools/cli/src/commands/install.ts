import { Command, flags } from '@oclif/command';
import * as inquirer from 'inquirer';

export default class Install extends Command {
  static description = 'Installer';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  async run() {
    const { args, flags } = this.parse(Install);
    const detectPackageManager = require('detect-package-manager');

    const pm = await detectPackageManager();

    const { packages } = await prompt();

    if (packages.length) {
      const shell = `${pm} ${pm === 'npm' ? 'install' : 'add'} ${packages.join(
        ' '
      )}`;

      require('child_process').execSync(shell, {
        stdio: 'inherit',
      });
    }
  }
}

const packages = [
  '@ngneat/elf',
  '@ngneat/elf-devtools',
  '@ngneat/elf-requests',
  '@ngneat/elf-state-history',
  '@ngneat/elf-persist-state',
  '@ngneat/elf-pagination',
];

export async function prompt() {
  return inquirer.prompt<{ packages: string[] }>([
    {
      name: 'packages',
      message: 'Select packages',
      type: 'checkbox',
      choices: packages.map((p) => ({
        name: p,
        value: p,
      })),
    },
  ]);
}
