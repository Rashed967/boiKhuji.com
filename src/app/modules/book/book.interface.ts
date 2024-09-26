import { Types } from 'mongoose'

// book interface
export interface IBook {
    title: string
    author: Array<Types.ObjectId>
    translator?: Array<Types.ObjectId>
    coverDesigner?: Types.ObjectId
    categories: Array<string>
    reviewsAndRatings?: Array<Types.ObjectId>
    price: number
    bookLength?: number
    firstPublished: string
    editionAndDate: {
        edition: number
        date: string
    }
    publication: Types.ObjectId
    isbn: string
    languages: Array<string>
    format: 'Hardcover' | 'Paperback' | 'Ebook'
    summary: {
        shortSummary: string
        longSummary: string
    }
}
