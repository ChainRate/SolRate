import { useQuery } from "@tanstack/react-query";
import ky from "ky";

export default function useGetReviewsById(programId: string) {
    return useQuery({
        queryKey: ["reviews", programId],
        queryFn: async () => {
            console.log("Fetching reviews for programId:", programId);
            try {
                const response = await ky
                    .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews/get`, {
                        json: { programId },
                        throwHttpErrors: false,
                    })
                    .json<{
                        message: string;
                        data: {
                            reviewer_account: string;
                            review_url: string;
                        }[];
                    }>();

                if (!response) {
                    throw new Error("An error occurred while fetching the reviews");
                }

                return response;
            } catch (error) {
                console.error("Fetch failed:", error);
                throw error;
            }
        },
    });
}
