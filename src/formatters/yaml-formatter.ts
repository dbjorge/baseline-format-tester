import { Formatter } from "./formatter";
import { load, dump, FAILSAFE_SCHEMA, DumpOptions } from 'js-yaml';
import Ajv, { ValidateFunction } from 'ajv';
import { inspect } from 'util';
import { baselineContentV1Schema } from "../model/baseline-schema";
import { BaselineContentV1 } from "../model/baseline";

export class YamlFormatter implements Formatter {
    private schemaValidator: ValidateFunction<BaselineContentV1>;

    constructor() {
        const ajv = new Ajv({ allErrors: true });
        this.schemaValidator = ajv.compile(baselineContentV1Schema);
    }

    parse(rawContent: string): BaselineContentV1 {
        const unvalidatedData = load(rawContent, { schema: FAILSAFE_SCHEMA });
        const isValid = this.schemaValidator(unvalidatedData);
        if (isValid) {
            return unvalidatedData;
        } else {
            throw new Error(`YamlFormatter.parse: input did not match schema. Errors: ${inspect(this.schemaValidator.errors)}`);
        }
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