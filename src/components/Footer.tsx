const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background px-4 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-xs text-gray-400 md:flex-row">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <p className="text-[11px] text-gray-500">
          Built with React, TypeScript, Vite &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}

export default Footer

