import { defineCollection, z } from 'astro:content'

const aboutMeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string()
  })
})

const experienceCollection = defineCollection({
  type: 'data',
  schema: z.object({
    dates: z.string(),
    location: z.string(),
    charge: z.string(),
    at: z.string(),
    description: z.string()
  })
})

export const collections = {
  experience: experienceCollection,
  aboutMe: aboutMeCollection
}
