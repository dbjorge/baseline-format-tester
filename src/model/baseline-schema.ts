import Ajv, { Schema, ValidateFunction } from "ajv";
import { BaselineContentV1 } from "./baseline";
import { inspect } from "util";

export const baselineContentV1Schema: Schema = {
    type: 'object',
    properties: {
        metadata: {
            type: 'object',
            properties: {
                fileFormatVersion: { const: '1' }
            },
            additionalProperties: false,
        },
        results: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    rule: { type: 'string' },
                    url: { type: 'string' },
                    selectorChain: {
                        type: 'array',
                        items: { type: 'string' }
                    },
                    additionalProperties: false,
                }
            }
        },
        additionalProperties: false,
    }
};

const ajv = new Ajv({ allErrors: true });
const schemaValidator: ValidateFunction<BaselineContentV1> = ajv.compile(baselineContentV1Schema);
export function validateAgainstSchema(unvalidatedBaselineContent: any): BaselineContentV1 {
    const isValid = schemaValidator(unvalidatedBaselineContent);
    if (isValid) {
        return unvalidatedBaselineContent;
    } else {
        throw new Error(`YamlFormatter.parse: input did not match schema. Errors: ${inspect(schemaValidator.errors)}`);
    }
}
