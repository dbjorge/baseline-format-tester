import { Formatter } from "./formatter";
import JSON5 from 'json5';
import { validateAgainstSchema } from "../model/baseline-schema";
import { BaselineContentV1 } from "../model/baseline";

export class Json5Formatter implements Formatter {
    parse(rawContent: string): BaselineContentV1 {
        const unvalidatedData = JSON5.parse(rawContent);
        return validateAgainstSchema(unvalidatedData);
    }

    format(baselineContent: BaselineContentV1): string {
        const options = {
            space: 2,
            quote: "\"",
        };
        return JSON5.stringify(baselineContent, options);
    }
}