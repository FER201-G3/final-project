import BaseLayout from "@/components/BaseLayout";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const ProjectDetail = () => {
  const params = useParams();
  const projectFetcher = (url: string) =>
    fetch(url).then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      return res.json() as Promise<Project>;
    });

  const { data, isLoading } = useSWR(
    `https://65a729b894c2c5762da6444c.mockapi.io/api/v1/projects/${params.id}`,
    projectFetcher,
  );

  return (
    <BaseLayout>
      <div className="container mx-auto">
        {isLoading ? (
          <div className="flex h-[50vh] items-center justify-center">
            Loading...
          </div>
        ) : (
          <div className="flex min-h-[50vh] flex-col items-center">
            <h1 className="text-center text-4xl font-bold">{data?.name}</h1>
            <small>{data?.createdAt}</small>

            <div className="relative mt-4 h-[50vh] w-full">
              <img
                src={data?.thumbnail}
                alt={data?.name}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mb-8 mt-4">{data?.content}</p>
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export default ProjectDetail;
