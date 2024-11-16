"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProjectsList({ className }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div className={className}>
      <div className="grid grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Link key={index} href={`/projects/${encodeURIComponent(project.slug)}`}>
            <div
              style={{ width: '200px', height: '200px' }}
              className="relative shadow group"
            >
              {/* Project Icon */}
              <img
                className="w-full h-full object-cover"
                src={project.icon}
                alt={`${project.title} icon`}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-hjalmarBlue opacity-0 transition-opacity duration-200 group-hover:opacity-80"
              ></div>

              {/* Project Title */}
              <h2
                className="absolute inset-0 flex justify-center items-center text-4xl text-white font-bold text-center break-words opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none"
              >
                {project.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
