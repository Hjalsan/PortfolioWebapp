import { 
  getAllProjectPaths, 
  getProjectData, 
  getPreviousProjectLink, 
  getNextProjectLink 
} from '../../lib/loadProjects';

export async function generateStaticParams() {
  const paths = getAllProjectPaths();
  return paths.map((path) => ({ slug: path.params.slug }));
}

export async function generateMetadata({ params }) {
  const projectData = getProjectData((await params).slug);
  return {
    title: projectData.title,
  };
}

// Fetch project data and navigation links
async function getData(slug) {
  const projectData = getProjectData(slug);
  const previousLink = getPreviousProjectLink(slug);
  const nextLink = getNextProjectLink(slug);
  return { ...projectData, previousLink, nextLink };
}

export default async function ProjectPage({ params }) {
  const { title, date, content, media, previousLink, nextLink } = await getData((await params).slug);

  return (
    <div className="flex flex-col justify-around">
      {/* Back Button */}
      <a
        href="/"
        className="fixed top-4 left-4 bg-hjalmarBlue text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-200"
      >
        Back
      </a>

      {/* Project Content */}
      <div className="flex justify-around w-full">
        {/* Left Column: Title, Date, Body */}
        <div style={{ width: "600px" }} className="flex flex-col my-10 h-full">
          <h1 className="text-hjalmarBlue text-4xl font-medium">{title}</h1>
          <h2 className="text-hjalmarBlue text-xl font-bold mb-5">{date}</h2>
          <p className="text-lg">{content}</p>

          <div className="h-full">

            <div className="flex justify-between">
              {previousLink ? (
                <a href={previousLink} className="text-hjalmarBlue text-lg font-medium hover:underline">
                  &larr; Previous Project
                </a>
              ) : ( <span /> )}
              {nextLink ? (
                <a href={nextLink} className="text-hjalmarBlue text-lg font-medium hover:underline">
                  Next Project &rarr;
                </a>
              ) : ( <span /> )}
            </div>
          </div>
        </div>

        {/* Right Column: Media */}
        <div style={{ width: "700px" }} className="overflow-y-auto h-[calc(100vh-80px)] my-10">
            {media.map((src, index) => (
              <img key={index} src={src} alt={`Media ${index + 1}`} className="w-full" />
            ))}
        </div>
      </div>
    </div>
  );
}
