import { Types } from "mongoose";

// author interface
export interface IAuthor {
    name : string;
    bio : {
        shortBio: string;
        longBio: string;
    },
    books?: Array<Types.ObjectId>
}
