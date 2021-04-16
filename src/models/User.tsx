import AuditModel from "./AuditModel";
import Post from "./Post";

export default interface User extends AuditModel{
    username?: string,
    email?:string,
    password?:string,
    fullName?:string,
    address?:string,
    phone?:string,
    photo?:string,
    role?:string,
    articles?:Post[];
}