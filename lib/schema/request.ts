import { z } from "zod";

/**
 * Validation schema for the request flow.
 * Measurements are a keyed record so new measurement fields can be added in
 * lib/content/process.ts without touching this schema.
 */
export const REQUEST_TYPES = [
  { value: "newbreed-design", label: "A NEWBREED design" },
  { value: "own-design", label: "My own design" },
  { value: "custom-idea", label: "A custom idea" },
] as const;

export const requestSchema = z
  .object({
    fullName: z.string().trim().min(2, "Please enter your full name."),
    phone: z
      .string()
      .trim()
      .min(7, "Please enter a phone or WhatsApp number."),
    email: z.string().trim().email("Please enter a valid email address."),
    gender: z.enum(["Female", "Male", "Prefer not to say"], {
      errorMap: () => ({ message: "Please choose an option." }),
    }),
    requestType: z.enum(["newbreed-design", "own-design", "custom-idea"], {
      errorMap: () => ({ message: "Please choose a request type." }),
    }),
    designSlug: z.string().optional(),
    designNotes: z.string().optional(),
    unit: z.enum(["cm", "in"]),
    measurements: z.record(z.string()).optional(),
    measurementNotes: z.string().optional(),
    fabric: z.string().optional(),
    colour: z.string().optional(),
    occasion: z.string().optional(),
    timeframe: z.string().optional(),
    instructions: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.requestType === "newbreed-design" && !data.designSlug) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["designSlug"],
        message: "Please choose a design.",
      });
    }
    if (
      data.requestType !== "newbreed-design" &&
      !data.designNotes?.trim()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["designNotes"],
        message: "Tell us a little about your design or idea.",
      });
    }
  });

export type RequestFormValues = z.infer<typeof requestSchema>;
