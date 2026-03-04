import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-background px-4 py-20"
    >
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">项目展示</h2>
            <p className="mt-3 text-sm text-gray-300 md:text-base">
              通过项目卡片展示项目名称、截图、简介、技术栈与访问链接。
            </p>
          </div>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-md shadow-black/40"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60" />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-4">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex w-fit items-center gap-1 text-xs font-medium text-sky-400 hover:text-sky-300"
                  >
                    查看项目
                    <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

