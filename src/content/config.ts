import { defineCollection, z } from "astro:content";

const specCollection = defineCollection({
	schema: z.object({}),
});
export const collections = {
	spec: specCollection,
};
