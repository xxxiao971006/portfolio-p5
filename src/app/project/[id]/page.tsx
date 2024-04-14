import { Project, projects } from "../../../database";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetails({params} : {params: {id: string}}) {
    const projectId = params.id;
    const project = projects.find((project) => project.id === Number(projectId));

    if (!project) return <div>Project not found</div>;
    return (
        <div className="p-4 min-h-screen h-full flex flex-col items-center justify-center pb-14">
            <div className="flex flex-col max-w-3xl w-full space-y-8 items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                {/* <h2 className="text-lg font-semibold mb-2">{project.time}</h2> */}
                <p className="text-white mb-4" >{project.description}</p>
                {/* <img className="max-w-full mb-4" src={project.coverImg} alt={project.title} /> */}
                <Image src={project.coverImg} alt={project.title} width={900} height={500}/>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                        <span key={skill} className="border rounded-full p-1.5 bg-black text-white text-xs ">{skill}</span>
                    ))}
                </div>
                <div className="flex gap-4 mb-4">
                    <Link href={project.hostedLink}>
                        <button className="btn glass bg-blue-500 text-white">View Live</button>
                    </Link>
                    <Link href={project.githubLink}>
                        <button className="btn glass  text-white hover:bg-gray-800">View Source Code</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}