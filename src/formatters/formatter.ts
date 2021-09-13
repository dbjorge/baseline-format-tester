import { BaselineContentV1 } from "../model/baseline";

export interface Formatter {
    parse(rawContent: string): BaselineContentV1;
    format(baselineContent: BaselineContentV1): string;
}