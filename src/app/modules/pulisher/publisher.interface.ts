import { Types } from 'mongoose'

// author bio intrface
export interface IPublisherBio {
    shortBio: string
    longBio?: string
}

// publisher intrface
export interface IPublisher {
    name: string
    imageUrl?: string
    bio: IPublisherBio
    books?: Array<Types.ObjectId>
    authors?: Array<Types.ObjectId>
    isDeleted?: boolean
}
