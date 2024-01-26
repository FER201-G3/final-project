import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

type ProjectsResponse = {
  items: Project[];
  count: number;
} | null;
const ProjectDaThucHien = () => {
  const API_URL =
    "https://65a729b894c2c5762da6444c.mockapi.io/api/v1/projects?page=1&limit=6";

  const projectsFetcher = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data as ProjectsResponse;
  };

  const { data: projects, isLoading } = useSWR(API_URL, projectsFetcher);

  return (
    <Fragment>
      <div className="container mx-auto my-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Dự án đã thực hiện</h1>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {isLoading ? (
            <div className="flex min-h-[600px] flex-col items-center justify-center">
              Loading...
            </div>
          ) : (
            projects?.items.map((project) => (
              <div key={project.id} className="w-1/4">
                <div className="flex flex-wrap items-center justify-center">
                  <div className="relative w-full pb-[133%]">
                    <img
                      className="f-full absolute h-full object-cover"
                      src={project.thumbnail}
                      alt={project.name}
                    />
                  </div>

                  <Link to={`/project/${project.id}`}>
                    <h2 className="w-full text-start text-xl font-bold text-gray-800">
                      {project.name}
                    </h2>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectDaThucHien;
