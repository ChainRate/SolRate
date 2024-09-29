import React from 'react';
import Link from 'next/link';

interface ProjectListProps {
  title: string; // 为 title 添加类型
}

const ProjectList: React.FC<ProjectListProps> = ({ title }) => {
  const projects = [
    { id: 1, name: 'Name 1', change: 2, score: 9.9 },
    { id: 2, name: 'Name 2', change: 2, score: 9.9 },
    { id: 3, name: 'Name 3', change: -2, score: 9.9 },
    { id: 4, name: 'Name 4', change: 2, score: 9.9 },
    { id: 5, name: 'Name 5', change: -2, score: 9.9 },
    { id: 6, name: 'Name 6', change: -2, score: 9.9 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <h2 className="text-2xl font-bold mb-6 text-black">{title}</h2>
      <table className="w-full">
        <thead>
          <tr className="text-sm text-black">
            <th className="text-left font-normal py-3 pl-4">Rank</th>
            <th className="text-left font-normal py-3">Name</th>
            <th className="text-left font-normal py-3">Changes</th>
            <th className="text-right font-normal py-3 pr-4">Score</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project.id} className="border-t border-gray-100">
              <td className="py-4 pl-4 text-black">{index + 1}</td>
              <td className="py-4">
                <Link href={`/project/${project.id}`} className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <span className="text-black">{project.name}</span>
                </Link>
              </td>
              <td className={`py-4 ${project.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {project.change > 0 ? '▲' : '▼'} {Math.abs(project.change)}
              </td>
              <td className="py-4 pr-4">
                <div className="flex items-center justify-end">
                  <span className="font-bold text-black text-lg mr-2">{project.score}</span>
                  <span className="text-xs text-gray-400">5021 reviews</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-6">
        <a href="#" className="text-black hover:underline text-sm">More →</a>
      </div>
    </div>
  );
};

export default ProjectList;
