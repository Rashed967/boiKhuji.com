import z from 'zod'


// book validation schema 
const createBookValidationSchema = z.object({
    body: z.object({
        title: z.string(),
        author: z.array(z.string()),
        translators: z.array(z.string()),
        coverDesigner: z.string(),
        categories: z.array(z.string()),
        reviewsAndRatings: z.array(z.string()),
        price: z.number().min(0, {message: "Price should be positive integer"}),
        bookLength: z.number().min(1),
        firstPublished: z.string(),
        editionAndDate:  z.object({
            edition: z.number(),
            date: z.string()
        }),
        publication: z.string(),
        isbn: z.string(),
        languages: z.array(z.string()),
        format: z.enum(['Hardcover', 'Paperback', 'Ebook']),
        summary: z.object({
            shortSummary: z.string(),
            longSummary: z.string()
        })

    })
})


export const bookValidationSchema = {
    createBookValidationSchema
}