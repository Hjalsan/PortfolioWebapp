import { getAllProjectPaths, getProjectData } from '../../lib/loadProjects';

export async function generateStaticParams() {
  const paths = getAllProjectPaths();
  return paths.map((path) => ({ slug: path.params.slug }));
}

async function getData(slug) {
  return getProjectData(slug);
}

export default async function ProjectPage({ params }) {
  const projectData = await getData((await params).slug);

  return (
    <div className="flex justify-around p-10">
      {/* Left Column: Title, Date, Body */}
      <div style={{width: "600px"}}>
        <h1 className="text-hjalmarBlue text-4xl font-medium">{projectData.title}</h1>
        <h1 className="text-hjalmarBlue text-xl font-bold mb-5">{projectData.date}</h1>
        <p className="text-lg">{projectData.content}</p>
      </div>
      
      {/* Right Column: Media */}
      <div style={{width: "600px"}} className="overflow-y-auto">
        {projectData.media.map((src, index) => (
          <img key={index} src={src} alt={`Media ${index + 1}`} className="my-4 w-full" />
        ))}
      </div>
    </div>
  );
}
