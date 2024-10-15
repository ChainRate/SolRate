"use client";

import React from "react";
import StarRating from "./StarRating";
import useGetReviewsById from "@/hooks/useGetReviewsById";
import { PROGRAM_ID } from "@/lib/const";
import { faker } from "@faker-js/faker";

interface Comment {
    date: string;
    rating: number;
    weight: number;
    review_url: string;
}

const CommentItem: React.FC<Comment> = ({ date, rating, weight, review_url }) => (
    <div className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
        <div className="flex justify-between items-center mb-1">
            <div>
                <span className="font-semibold text-sm text-black capitalize">
                    {faker.word.adjective()} {faker.person.fullName()}
                </span>
                <span className="text-gray-600 ml-2 text-xs">{date}</span>
            </div>
            <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">Weight: {weight}</div>
        </div>
        <StarRating rating={rating} size="small" />
        <p className="text-gray-800 text-xs mt-1 line-clamp-3">{review_url}</p>
        <div className="flex justify-end space-x-4 mt-1">
            <button className="text-gray-600 text-xs flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                </svg>
                20
            </button>
            <button className="text-gray-600 text-xs flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                </svg>
                20
            </button>
        </div>
    </div>
);

const CommentList: React.FC = () => {
    // const generateComments = (count: number): Comment[] => {
    //   return Array.from({ length: count }, (_, index) => ({
    //     name: `User ${index + 1}`,
    //     date: "2024-9-28",
    //     rating: Math.floor(Math.random() * 5) + 1,
    //     weight: Number((Math.random() * 2 + 7).toFixed(1)),
    //     content: "Very good project. Well prepared and good user experience. This is one of my favorite projects on Solana. Very good project. Well prepared and good user experience. This is one of my favorite projects on Solana."
    //   }));
    // };

    // const highlightComments = generateComments(highlightCount);
    // const allComments = generateComments(totalCount);

    const { data, isPending } = useGetReviewsById(PROGRAM_ID);

    console.log(data);

    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <h2 className="text-xl font-bold mb-4 text-black">All Comment</h2>
                <div className="max-h-[600px] overflow-y-auto">
                    {isPending ? (
                        <p className="text-black">Loading comments...</p>
                    ) : (
                        data?.data.map((comment, index) => (
                            <CommentItem key={index} review_url={comment.review_url} date={new Date().toDateString()} rating={5} weight={5} />
                        ))
                    )}
                </div>
            </div>

            {/* <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4 text-black">All Comment /{totalCount}</h2>
        <div className="max-h-[600px] overflow-y-auto">
          {allComments.map((comment, index) => (
            <CommentItem key={index} {...comment} />
          ))}
        </div>
      </div> */}
        </>
    );
};

export default CommentList;
