import { BaselineContentV1 } from "./baseline";

export const baselineContentV1Sample: BaselineContentV1 = {
    metadata: {
        fileFormatVersion: "1",
    },
    results: [
        {
            rule: 'rule-id-1',
            urls: ['https://example.com/1', 'https://example.com/2'],
            cssSelector: '#id1;#id2;#id3',
            xpathSelector: '/id1;/id2;/id3',
            htmlSnippet: '<div id="id3" />',
        },
        {
            rule: 'rule-id-2',
            urls: ['https://example.com/other/path'],
            cssSelector: '.root-class[data-attr="quoted value"]',
            htmlSnippet: '<span class="root-class" data-attr="quoted value" />',
        }
    ]
};