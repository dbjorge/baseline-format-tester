export type BaselineContentV1Result = {
    rule: string,
    url: string,
    selectorChain: string[],
};
export type BaselineContentV1 = {
    metadata: { fileFormatVersion: '1' },
    results: BaselineContentV1Result[],
};
