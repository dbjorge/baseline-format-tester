import fs from 'fs/promises';
import { YamlFormatter } from './formatters/yaml-formatter';
import { baselineContentV1Sample } from './model/baseline-sample';

const formatters = {
    'yaml': new YamlFormatter(),
};

export type Format = keyof typeof formatters;

export type PrintOptions = {
    format: Format,
};
export async function print({format}: PrintOptions): Promise<any> {
    const content = formatters[format].format(baselineContentV1Sample);
    console.log(content);
}

export type ReadOptions = {
    file: string,
    format: Format,
};
export async function read({file, format}: ReadOptions): Promise<any> {
    const fileContent = await fs.readFile(file, { encoding: 'utf8'});
    return formatters[format].parse(fileContent);
}

export type WriteOptions = {
    file: string,
    format: Format,
};
export async function write({file, format}: WriteOptions): Promise<void> {
    const fileContent = formatters[format].format(baselineContentV1Sample);
    await fs.writeFile(file, fileContent, { encoding: 'utf8' });
}