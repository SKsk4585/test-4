
export class TasksModel{
   public _id: string
   public name: string
   public description: string
   public date: Date
   public customerId: string
   public Done: boolean

   public customer: {
    _id:string
    name:string
    Occupation:string
    fone:string
    email:string
   }
}