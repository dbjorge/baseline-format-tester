import { Formatter } from "./formatter";
import JSON5 from 'json5';
import Ajv, { ValidateFunction } from 'ajv';
import { inspect } from 'util';
import { baselineContentV1Schema } from "../model/baseline-schema";
import { BaselineContentV1 } from "../model/baseline";

export class Json5Formatter implements Formatter {
    private schemaValidator: ValidateFunction<BaselineContentV1>;

    constructor() {
        const ajv = new Ajv({ allErrors: true });
        this.schemaValidator = ajv.compile(baselineContentV1Schema);
    }

    parse(rawContent: string): BaselineContentV1 {
        const unvalidatedData = JSON5.parse(rawContent);
        const isValid = this.schemaValidator(unvalidatedData);
        if (isValid) {
            return unvalidatedData;
        } else {
            throw new Error(`YamlFormatter.parse: input did not match schema. Errors: ${inspect(this.schemaValidator.errors)}`);
        }
    }

    format(baselineContent: BaselineContentV1): string {
        const options = {
            space: 2,
            quote: "'",
        };
        return JSON5.stringify(baselineContent, options);
    }
}