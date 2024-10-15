import { useMutation, useQueryClient } from "@tanstack/react-query";
import ky from "ky";
import { useToast } from "./use-toast";

export default function useSubmitReview(programId: string) {
    const queryClient = useQueryClient();
    const { toast } = useToast();
    return useMutation({
        mutationKey: ["submitReview"],
        mutationFn: async (review: { sendPubKey: string; programId: string; review: string }) => {
            try {
                const response = await ky
                    .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews/submit`, {
                        json: review,
                    })
                    .json();

                if (!response) {
                    throw new Error("An error occurred while submitting your review");
                }

                return response;
            } catch (error: Error | unknown) {
                console.error("Submit review failed:", error);
                toast({
                    title: "Failed to submit review",
                    description: "You do not have valid interactions with this project",
                    style: { backgroundColor: "#ff0000", color: "#fff" },
                });
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["reviews", programId],
            });
        },
    });
}
