import AuditModel from "./AuditModel";
import Comment from "./Comment";
import Tag from "./Tag";
import Image  from "./Image";
import User from "./User";

export default interface Article extends AuditModel{
    title?: string,
    text?:string,
    status?:string,
    tags?:Tag[],
    comments?:Comment[],
    categories?:String[],
    image?: Image,
    author?: User
}