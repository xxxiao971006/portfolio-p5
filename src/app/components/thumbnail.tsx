import Image from "next/image";
import { Project } from "../../database";

// { project }: { project: Project }

export default function Thumbnail({ project }: { project: Project }) {
  return (
    <div className="w-full max-w-xl h-full mx-auto bg-black shadow-md rounded-lg overflow-hidden border-4">
      <div className="relative h-60 w-full">
        <Image
          src={project.coverImg}
          alt="Project Image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div className="p-4 ">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <div
              key={index}
              className="inline-block py-1 px-2 text-xs text-gray-700 bg-gray-200 rounded-full"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}