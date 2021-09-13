import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { Format, print, read, write } from './index';

async function main() {
    await yargs(hideBin(process.argv))
        .scriptName('baseline-format-tester')
        .demandOption('format', 'yaml | json')
        .alias('f', 'format')
        .command('print', 'print a new generated file', {}, async (argv) =>
            await print({ format: argv.format as Format })
        )
        .command('read <file>', 'read a previously-generated file', {}, async (argv) =>
            await read({ file: argv.file as string, format: argv.format as Format })
        )
        .command('write <file>', 'write a new generated file', {}, async (argv) => {
            await write({ file: argv.file as string, format: argv.format as Format })
        })
        .parse();
}

main().catch((e: Error) => {
    console.error('Unexpected error:')
    console.error(e.stack ?? e.message);
    process.exit(1);
})
