import { z } from "zod";

export const CreateList = z.object({
    title: z.string({
        required_error: "Title is Required",
        invalid_type_error: "Title is Required",
    }).min(3, {
        message: "Title is too short",
    }),
    boardId: z.string(),
});