import * as z from "zod";

export const CategorySchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  parentCategoryId: z.string().optional(),
});

export type CategorySchema = z.infer<typeof CategorySchema>;
