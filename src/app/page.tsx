import Image from "next/image";
import Thumbnail from "./components/thumbnail";
import { Project, projects } from "../database";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <div>
        <div className="relative h-96 bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="https://i.imghippo.com/files/KE6IL1712644447.gif"
              alt="Cover Image"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl text-white font-bold">Xiao Zhang</h1>
              <p className="text-white text-lg mt-2">
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex min-h-screen flex-col items-center justify-between p-4 pb-14 px-5 md:px-10">
        <h1 className="text-4xl">Recent Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 ">
          {projects.map((project) => (
            <div key={project.id} className="hover:scale-110 m-4">
              <Link href={`/project/${project.id}`} key={project.id}>
                <Thumbnail key={project.id} project={project} />
              </Link>
            </div>
          ))}
        </div>
        <h2 className="text-2xl">More on the way...</h2>
      </div>
    </main>
  );
}
