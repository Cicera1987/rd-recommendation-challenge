export default function PageTemplate({ leftContent, rightContent }) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-bg-custom-gradient font-sans">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <img src="/rdstation.PNG" alt="RD Station" className="h-8 w-auto" />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 px-8 py-6 w-full max-w-[89%] mx-auto">
        <div>{leftContent}</div>
        <div>{rightContent}</div>
      </main>

      <footer className="bg-water border-t p-4 text-[12px] text-center text-gray">
        <div className="flex items-center justify-center gap-2">
          <img src="/rdstation.PNG" alt="RD Station" className="h-6" />
          <span>© 2025 RD Station. 13.021.784/0001-86</span>
        </div>
      </footer>
    </div>
  );
}
