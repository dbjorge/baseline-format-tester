import { Formatter } from "./formatter";
import hjson, { SerializeOptions } from 'hjson';
import { validateAgainstSchema } from "../model/baseline-schema";
import { BaselineContentV1 } from "../model/baseline";

export class HJsonFormatter implements Formatter {
    parse(rawContent: string): BaselineContentV1 {
        const unvalidatedData = hjson.parse(rawContent);
        return validateAgainstSchema(unvalidatedData);
    }

    format(baselineContent: BaselineContentV1): string {
        const options: SerializeOptions = {
            quotes: "strings",
            space: 2,
            eol: '\n',
            bracesSameLine: true,
        } as SerializeOptions;
        return hjson.stringify(baselineContent, options);
    }
}