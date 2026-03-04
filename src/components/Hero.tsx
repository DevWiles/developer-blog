const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center bg-gradient-to-b from-black via-background to-black px-4 pt-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80">
          Frontend Developer
        </p>
        <h1 className="mt-4 bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
          打造有质感的 Web 体验
        </h1>
        <p className="mt-6 text-base text-gray-300 sm:text-lg">
          使用 React、TypeScript 与 Tailwind CSS
          构建现代、性能优先的个人作品与产品界面。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-sky-500 to-purple-500 px-6 py-2 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:brightness-110"
          >
            查看项目
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-2 text-sm font-medium text-gray-200 transition hover:border-sky-400 hover:text-white"
          >
            联系我
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

