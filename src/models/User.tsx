import AuditModel from "./AuditModel";
import Article from "./Article";
import Image from "./Image";

export default interface User extends AuditModel{
    username?: string,
    email?:string,
    password?:string,
    fullName?:string,
    address?:string,
    phone?:string,
    photo?:Image,
    role?:string,
    description?: string
    articles?:Article[];
}