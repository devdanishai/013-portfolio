import { Nav } from "./Nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#262525]/90 backdrop-blur-sm">
      <div className="relative mx-auto flex h-[10vh] min-h-[60px] max-w-6xl items-center justify-center px-6">
        <Nav />
      </div>
    </header>
  );
}
