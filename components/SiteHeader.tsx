import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e7ddd0] bg-[#f8f5ef]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-wide text-[#5a4632]">
          MTS Gift Studio
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-[#a67c52]">
            首頁
          </Link>
          <Link href="/products" className="text-sm font-medium hover:text-[#a67c52]">
            產品系列
          </Link>
          <Link href="/process" className="text-sm font-medium hover:text-[#a67c52]">
            訂製流程
          </Link>
          <Link href="/cases" className="text-sm font-medium hover:text-[#a67c52]">
            案例展示
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#a67c52]">
            關於我們
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-[#a67c52]">
            聯絡我們
          </Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-[#a67c52] px-4 py-2 text-sm font-semibold text-white hover:bg-[#8e6842]"
        >
          立即查詢
        </Link>
      </div>
    </header>
  );
}