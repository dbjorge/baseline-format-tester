import { BaselineContentV1 } from "./baseline";

export const baselineContentV1Sample: BaselineContentV1 = {
    metadata: {
        fileFormatVersion: "1",
    },
    results: [
        {
            rule: 'rule-id-1',
            url: 'https://example.com/path?queryparam=value',
            selectorChain: ['#id1', '#id2', '#id3'],
        },
        {
            rule: 'rule-id-2',
            url: 'https://example.com/other/path',
            selectorChain: ['.root-class[data-attr="quoted value"]'],
        }
    ]
};