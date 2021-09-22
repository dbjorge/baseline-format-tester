export type BaselineContentV1Result = {
    rule: string;
    urls: string[];
    cssSelector: string;
    xpathSelector?: string;
    htmlSnippet: string;
}

export type BaselineContentV1 = {
    metadata: { fileFormatVersion: '1' };
    results: BaselineContentV1Result[];
}
