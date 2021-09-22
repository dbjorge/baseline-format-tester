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
            required: ['fileFormatVersion'],
            additionalProperties: false,
        },
        results: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    rule: { type: 'number' },
                    urls: { type: 'array', items: { type: 'string' } },
                    cssSelector: { type: 'string' },
                    xpathSelector: { type: 'string' },
                    htmlSnippet: { type: 'string' },
                },
                // xpathSelector is intentionally optional
                required: ['rule', 'cssSelector', 'htmlSnippet', 'urls'],
                additionalProperties: false,
            }
        },
    },
    required: ['metadata', 'results'],
    additionalProperties: false,
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
