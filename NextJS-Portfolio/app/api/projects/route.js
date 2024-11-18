import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'app/data/projects');

export async function GET() {
  const filenames = fs.readdirSync(projectsDirectory);
  const projects = filenames.map((filename) => {
    const filepath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filepath, 'utf8');
    const { data } = matter(fileContents);
    return { title: data.title, icon: data.icon, slug: filename.replace(/\.md$/, '') };
  });

  return new Response(JSON.stringify(projects), {
    headers: { 'Content-Type': 'application/json' },
  });
}