import z from 'zod'

// create publisher bio validation schmea
const createPublisherBioValidationSchema = z.object({
    shortBio: z.string({
        message: 'short bio cannot be empty',
        required_error: 'Short bio is required',
    }),
    longBio: z.string({ message: 'short bio cannot be empty' }).optional(),
})

// create publisher validation schema
const createPublisherValidationSchema = z.object({
    body: z.object({
        author: z.object({
            name: z.string({
                message: 'name field cannot be empty',
                invalid_type_error: 'name must be string',
                required_error: 'name is required',
            }),
            imageUrl: z
                .string()
                .url({ message: 'Invalid image url' })
                .optional(),
            bio: createPublisherBioValidationSchema,
            books: z.array(z.string()).optional(),
            authors: z.array(z.string().optional()),
        }),
    }),
})

// create publisher bio validation schmea
const updatePublisherBioValidationSchema = z.object({
    shortBio: z
        .string({
            message: 'short bio cannot be empty',
        })
        .optional(),
    longBio: z.string({ message: 'short bio cannot be empty' }).optional(),
})

// update publisher validation schema

const updatePublisherValidationSchema = z.object({
    body: z.object({
        author: z.object({
            name: z
                .string({
                    message: 'name field cannot be empty',
                    invalid_type_error: 'name must be string',
                    required_error: 'name is required',
                })
                .optional(),
            imageUrl: z
                .string()
                .url({ message: 'Invalid image url' })
                .optional(),
            bio: updatePublisherBioValidationSchema.optional(),
            books: z.array(z.string()).optional(),
            authors: z.array(z.string().optional()),
        }),
    }),
})

// export validation schemas
export const publisherValidationSchemas = {
    createPublisherValidationSchema,
    updatePublisherValidationSchema,
}
