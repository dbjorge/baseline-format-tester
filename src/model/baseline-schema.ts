import { Schema } from "ajv";

export const baselineContentV1Schema: Schema = {
    type: 'object',
    properties: {
        metadata: {
            type: 'object',
            properties: {
                version: { const: '1' }
            },
            additionalProperties: false,
        },
        results: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    rule: { type: 'number' },
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