import AuditModel from "./AuditModel";

export default interface Image extends AuditModel{
    title:string,
    filename:string
}