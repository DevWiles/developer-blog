const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background px-4 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-xs text-gray-400 md:flex-row">
        <p>© {new Date().getFullYear()} Wiles Portfolio. All rights reserved.</p>
        <p className="text-[11px] text-gray-500">
            Guangdong University of Technology, Guangzhou, Guangdong, China
        </p>
      </div>
    </footer>
  )
}

export default Footer

