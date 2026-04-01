import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#e7ddd0] bg-[#f3ede4]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-xl font-bold text-[#5a4632]">Grace Gift Studio</h3>
          <p className="text-sm leading-7 text-[#6c5846]">
            專注婚禮、展會、品牌活動及企業禮贈品設計，
            提供從產品挑選、包裝設計到交付安排的一站式客製化服務。
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-base font-semibold text-[#5a4632]">網站導覽</h4>
          <div className="flex flex-col gap-2 text-sm text-[#6c5846]">
            <Link href="/">首頁</Link>
            <Link href="/products">產品系列</Link>
            <Link href="/process">訂製流程</Link>
            <Link href="/cases">案例展示</Link>
            <Link href="/about">關於我們</Link>
            <Link href="/contact">聯絡我們</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-base font-semibold text-[#5a4632]">聯絡方式</h4>
          <div className="space-y-2 text-sm text-[#6c5846]">
            <p>WhatsApp：+853 6208 0722</p>
            <p>Email：joshleong5@gmail.com</p>
            <p>服務地區：澳門</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e7ddd0] px-6 py-4 text-center text-sm text-[#7a6755]">
        © 2026 MTS Gift Studio. All rights reserved.
      </div>
    </footer>
  );
}