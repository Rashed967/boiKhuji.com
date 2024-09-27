import z from 'zod'
// create autor validation schema
const createAuthorValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        bio: z.object({
            shortBio: z.string(),
            longBio: z.string().optional(),
        }),
    }),
})
// update autor validation schema
const updateAuthorValidationSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        bio: z
            .object({
                shortBio: z.string().optional(),
                longBio: z.string().optional(),
            })
            .optional(),
    }),
})

// export validation
export const authorValidationSchema = {
    createAuthorValidationSchema,
    updateAuthorValidationSchema,
}
