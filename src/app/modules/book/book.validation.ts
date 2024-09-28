import z from 'zod'

// create book validation schema
const createBookValidationSchema = z.object({
    body: z.object({
        book: z.object({
            title: z.string(),
            imageUrl: z.string().optional(),
            author: z.array(z.string()),
            translators: z.array(z.string()).optional(),
            coverDesigner: z.string().optional(),
            categories: z.array(z.string()),
            reviewsAndRatings: z.array(z.string()).optional(),
            price: z
                .number()
                .min(0, { message: 'Price should be positive integer' }),
            bookLength: z.number().min(1).optional(),
            firstPublished: z.string(),
            editionAndDate: z.object({
                edition: z.number(),
                date: z.string(),
            }),
            publication: z.string(),
            isbn: z.string(),
            languages: z.array(z.string()),
            format: z.enum(['Hardcover', 'Paperback', 'Ebook']),
            summary: z.object({
                shortSummary: z.string(),
                longSummary: z.string(),
            }).optional(),
        }),
    }),
})
// update book validation schema
const updateBookValidationSchema = z.object({
    body: z.object({
        book: z.object({
            title: z.string().optional(),
            imageUrl: z.string().optional(),
            author: z.array(z.string()).optional(),
            translators: z.array(z.string()).optional(),
            coverDesigner: z.string().optional(),
            categories: z.array(z.string()).optional(),
            reviewsAndRatings: z.array(z.string()).optional(),
            price: z
                .number()
                .min(0, { message: 'Price should be positive integer' })
                .optional(),
            bookLength: z.number().min(1).optional(),
            firstPublished: z.string().optional(),
            editionAndDate: z
                .object({
                    edition: z.number().optional(),
                    date: z.string().optional(),
                })
                .optional(),
            publication: z.string().optional(),
            isbn: z.string().optional(),
            languages: z.array(z.string()).optional(),
            format: z.enum(['Hardcover', 'Paperback', 'Ebook']).optional(),
            summary: z
                .object({
                    shortSummary: z.string().optional(),
                    longSummary: z.string().optional(),
                })
                .optional(),
        }),
    }),
})

// export book validation
export const bookValidationSchema = {
    createBookValidationSchema,
    updateBookValidationSchema,
}
