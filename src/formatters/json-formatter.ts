import { Formatter } from "./formatter";
import { validateAgainstSchema } from "../model/baseline-schema";
import { BaselineContentV1 } from "../model/baseline";

export class HJsonFormatter implements Formatter {
    parse(rawContent: string): BaselineContentV1 {
        const unvalidatedData = JSON.parse(rawContent);
        return validateAgainstSchema(unvalidatedData);
    }

    format(baselineContent: BaselineContentV1): string {
        return JSON.stringify(baselineContent, null, 2);
    }
}