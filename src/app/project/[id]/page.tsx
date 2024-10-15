"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import CommentList from "@/components/CommentList";
import UserAccount from "@/components/UserAccount";

export const runtime = "edge";

const ProjectDetailPage = ({ params }: { params: { id: string } }) => {
    // 使用 params.id，例如通过它来获取项目详情
    const projectDetails = {
        id: params.id, // 使用 params.id
        name: `Project Name ${params.id}`, // 使用 params.id
        rank: "#5 in DeFi",
        description: "Description\nline2\nline3\nline4",
        score: 9.9,
        reviewCount: 5021,
        image: "/placeholder-project-image.png",
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="text-sm breadcrumbs mb-4">
                    <ul className="flex">
                        <li>
                            <Link href="/" className="text-gray-600 hover:text-black">
                                DeFi
                            </Link>
                        </li>
                        <li className="before:content-['>'] before:mx-2 text-black">{projectDetails.name}</li>
                    </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex justify-between items-start">
                        <div className="flex">
                            <div className="w-24 h-24 bg-gray-200 rounded-lg mr-4 overflow-hidden">
                                <Image src={projectDetails.image} alt={projectDetails.name} width={96} height={96} style={{ objectFit: "cover" }} />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-black">{projectDetails.name}</h1>
                                <p className="text-gray-600">{projectDetails.rank}</p>
                                <p className="mt-2 text-gray-800 whitespace-pre-line">{projectDetails.description}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-6xl font-bold text-red-500">{projectDetails.score}</div>
                            <div className="text-sm text-gray-600">{projectDetails.reviewCount} reviews</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <CommentList highlightCount={4} totalCount={200} />
                    </div>
                    <div>
                        <UserAccount />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectDetailPage;
