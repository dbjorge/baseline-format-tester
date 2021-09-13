import { Formatter } from "./formatter";
import JSON5 from 'json5';
import { validateAgainstSchema } from "../model/baseline-schema";
import { BaselineContentV1 } from "../model/baseline";
import prettyFormat, { Options as PrettyFormatOptions } from 'pretty-format';

export class PrettyFormatJson5Formatter implements Formatter {
    parse(rawContent: string): BaselineContentV1 {
        const unvalidatedData = JSON5.parse(rawContent);
        return validateAgainstSchema(unvalidatedData);
    }

    format(baselineContent: BaselineContentV1): string {
        const options: Partial<PrettyFormatOptions> = {
            indent: 2,
            printBasicPrototype: false,
        };
        return prettyFormat(baselineContent, options);
    }
}