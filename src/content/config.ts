import { defineCollection, z } from 'astro:content'

const experienceCollection = defineCollection({
  schema: z.object({
    dates: z.string(),
    location: z.string(),
    charge: z.string(),
    at: z.string(),
    description: z.string()
  })
})

export const collections = {
  experience: experienceCollection
}
