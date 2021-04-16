import AuditModel from "./AuditModel";
import Article from "./Article";

export default interface User extends AuditModel{
    username?: string,
    email?:string,
    password?:string,
    fullName?:string,
    address?:string,
    phone?:string,
    photo?:string,
    role?:string,
    articles?:Article[];
}