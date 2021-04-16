import AuditModel from "./AuditModel";
import Comment from "./Comment";
import Tag from "./Tag";

export default interface Article extends AuditModel{
    title?: string,
    text?:string,
    status?:string,
    tags?:Tag[],
    comments?:Comment[],
    categories?:String[],
}