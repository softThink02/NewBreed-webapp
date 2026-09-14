import type { MeasurementField, ProcessStage } from "@/lib/types";

/** The five-stage NEWBREED journey, rendered on the homepage and bespoke page. */
export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "Choose or send a design",
    description:
      "Pick a NEWBREED design, or send your own reference, sketch or inspiration.",
  },
  {
    number: "02",
    title: "Share your details",
    description:
      "Tell us who the piece is for, your measurements and your preferences. You do not need to visit Awka — measurements can be submitted remotely.",
  },
  {
    number: "03",
    title: "We create",
    description:
      "Your garment is cut and made to your measurements, in your chosen fabric and colour.",
  },
  {
    number: "04",
    title: "Fit & finish",
    description:
      "We refine the fit and finish every detail before the piece is yours.",
  },
  {
    number: "05",
    title: "Capture the look",
    description:
      "Clients who commission a NEWBREED garment may receive a complimentary professional shoot in their completed outfit.",
  },
];

/**
 * Measurement fields for the request form and measurement guide.
 * Extend this array to add fields — the form and data model adapt automatically.
 */
export const MEASUREMENT_FIELDS: MeasurementField[] = [
  { key: "chest", label: "Chest / Bust", hint: "Around the fullest part of the chest, tape level." },
  { key: "waist", label: "Waist", hint: "Around the natural waistline, where you bend." },
  { key: "hip", label: "Hip", hint: "Around the fullest part of the hips." },
  { key: "shoulder", label: "Shoulder", hint: "Across the back, seam to seam." },
  { key: "sleeve", label: "Sleeve length", hint: "Shoulder seam to wrist bone, arm slightly bent." },
  { key: "neck", label: "Neck", hint: "Around the base of the neck, one finger of ease." },
  { key: "topLength", label: "Top length", hint: "Highest shoulder point to your preferred hem." },
  { key: "trouserLength", label: "Trouser length", hint: "Waist to ankle, along the outside of the leg." },
  { key: "thigh", label: "Thigh", hint: "Around the fullest part of the thigh." },
  { key: "inseam", label: "Inseam", hint: "Top of the inner leg to the ankle." },
];
