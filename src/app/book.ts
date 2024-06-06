export type Book = {
    id?:string,
    title?:string,
    price?:number,
    imgUrl?:string,
    publishedDate?:Date,
    author?:Author
}
type Author={
    firstName?:string,
    lastName?:string
}
