import { email } from './../../../../node_modules/zod/src/v4/core/regexes';
import * as z from "zod";

const createPatientValidationSchema = z.object({
  name: z.string(),
  patient: {
    name: z.string({
        error: "Name is required",
    }),
    email: z.string({
        error: "Invalid email address",
    }),
    address: z.string().optional(),
  }
});
export const UserValidation = {
    createPatientValidationSchema,
}