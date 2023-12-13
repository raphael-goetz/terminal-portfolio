import {Description} from "@/model/Description";
import {CommandType} from "@/model/CommandType";

export interface Command {
    readonly command: string,
    readonly alias: string[]
    readonly descriptions: Description[],
    readonly type: CommandType
}