import { z, defineCollection } from 'astro:content';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const authorDefinition = z
  .object({
    name: z.string(),
    bio: z.string().optional(),
    facebookHandle: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
  })
  .optional();

const postCollection = defineCollection({
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const authorCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    metadata: authorDefinition,
  }),
});

const caseStudyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    client: z.string(),
    title: z.string(),
    description: z.string(),
    summary: z.array(z.string()),
    image: z.string().optional(),
    logo: z.string().optional(),
    service: z.string(),
    testimonial: z
      .object({
        author: z.object({
          name: z.string(),
          role: z.string(),
        }),
        content: z.string(),
      })
      .optional(), // added this block
  }),
});

export const collections = {
  post: postCollection,
  author: authorCollection,
  cases: caseStudyCollection,
};
