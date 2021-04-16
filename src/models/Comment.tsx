import AuditModel from "./AuditModel";
import User from "./User";

export default interface Comment extends AuditModel{
    text?: string,
    author?:User,
    status?:string,
}