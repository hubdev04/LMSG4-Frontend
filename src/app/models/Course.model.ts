export interface Course{
    id:number,
    title:string,
    category:string,
    createdBy:string,
    duration:number,
    approvalStatus:string;
    createdDate:Date;
    lastModifiedDate:Date;
    lastModifiedBy:string;
    isActive:string;
    isDeleted:string;
    role:string
}