import { Globe, ChevronDown, User } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-gray-900 text-white text-sm">
      <div className="container mx-auto px-4 py-2 flex flex-col items-center justify-between gap-2 md:flex-row lg:px-20">
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-1 ">
            <Globe className="w-5" />
            <span>English</span>
            <ChevronDown />
          </button>
          <button className="flex items-center gap-1 ">
            <span role="img" aria-label="US Flag">
              🇺🇸
            </span>
            <span>USD</span>
            <ChevronDown />
          </button>
        </div>

        <div className="order-first md:order-none">
          <p>Flash Sale Live – 30% Off Everything</p>
        </div>

        <div className="hidden md:flex">
          <a href="/login" className="flex items-center gap-2 ">
            <User className="w-5" />
            <span>Login / Register</span>
          </a>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button className="flex items-center gap-1 ">
            <Globe className="w-5" />
            <span>English</span>
            <ChevronDown />
          </button>
          <button className="flex items-center gap-1 ">
            <span role="img" aria-label="US Flag">
              🇺🇸
            </span>
            <span>USD</span>
            <ChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}
