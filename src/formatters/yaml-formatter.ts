import { Formatter } from "./formatter";
import { load, dump, FAILSAFE_SCHEMA, DumpOptions } from 'js-yaml';
import { validateAgainstSchema } from "../model/baseline-schema";
import { BaselineContentV1 } from "../model/baseline";

export class YamlFormatter implements Formatter {
    parse(rawContent: string): BaselineContentV1 {
        const unvalidatedData = load(rawContent, { schema: FAILSAFE_SCHEMA });
        return validateAgainstSchema(unvalidatedData);
    }

    format(baselineContent: BaselineContentV1): string {
        const options: DumpOptions = {
            condenseFlow: false,
            forceQuotes: true,
            indent: 2,
            flowLevel: 3,
            quotingType: "'",
            schema: FAILSAFE_SCHEMA,
            sortKeys: true,
            lineWidth: -1,
            noRefs: true,
        }
        return dump(baselineContent, options);
    }
}