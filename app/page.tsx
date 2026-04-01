import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { products } from "../data/products";

const categories = [
  {
    title: "婚禮回禮",
    description: "適合婚宴、訂婚、迎賓禮及伴娘伴郎小禮。",
    href: "/products?category=婚禮回禮",
  },
  {
    title: "展會回手禮",
    description: "適合展覽、發布會、論壇、品牌展示活動。",
    href: "/products?category=展會回手禮",
  },
  {
    title: "企業禮品",
    description: "適合周年紀念、開幕活動、節日贈禮與商務送禮。",
    href: "/products?category=企業禮品",
  },
];

const featuredProducts = products.slice(0, 3);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#3b3128]">
      <SiteHeader />

      <section className="bg-[#f6efe6]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#a67c52]">
              Wedding • Expo • Corporate Gifts
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl text-[#5a4632]">
              為婚禮、
              <br />
              展會與品牌活動
              <br />
              打造專屬回禮
            </h1>
            <p className="mb-8 max-w-xl text-base leading-8 text-[#6c5846] md:text-lg">
              我們提供婚禮回禮、展會回手禮及企業活動客製化禮品方案，
              由產品選擇、包裝設計到交付安排，為不同場合打造有質感、有記憶點的禮贈體驗。
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-[#a67c52] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8e6842]"
              >
                瀏覽產品系列
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#cdb89f] px-6 py-3 text-sm font-semibold text-[#5a4632] hover:bg-[#fff9f2]"
              >
                立即查詢報價
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] shadow-xl">
            <img
              src="https://picsum.photos/seed/gift-hero/1200/900"
              alt="婚禮與活動回禮"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#a67c52]">
            Categories
          </p>
          <h2 className="text-3xl font-bold text-[#5a4632]">服務類型</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block rounded-3xl border border-[#eadfd3] bg-white/80 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold text-[#5a4632]">{item.title}</h3>
              <p className="text-sm leading-7 text-[#6c5846]">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f3ede4]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#a67c52]">
                Featured
              </p>
              <h2 className="text-3xl font-bold text-[#5a4632]">人氣回禮款式</h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-[#7a5a3b] hover:text-[#5a4632]">
              查看全部 →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-3xl border border-[#eadfd3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden bg-[#f7f2eb]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#a67c52]">
                    {product.category}
                  </p>
                  <h3 className="mb-2 text-xl font-semibold text-[#5a4632]">{product.name}</h3>
                  <p className="mb-3 text-sm leading-7 text-[#6c5846]">{product.shortDescription}</p>
                  <p className="mb-5 text-sm font-semibold text-[#7a5a3b]">{product.price}</p>

                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-block rounded-full bg-[#a67c52] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8e6842]"
                  >
                    查看詳情
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-[32px] shadow-lg">
            <img
              src="https://picsum.photos/seed/process-gift/1200/900"
              alt="客製流程"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#a67c52]">
              Custom Process
            </p>
            <h2 className="mb-5 text-3xl font-bold text-[#5a4632]">
              簡單 4 步，完成專屬回禮訂製
            </h2>
            <div className="space-y-4 text-sm leading-7 text-[#6c5846]">
              <p>1. 告訴我們活動類型、預算、數量與交期。</p>
              <p>2. 挑選產品款式、包裝方向及客製內容。</p>
              <p>3. 確認設計稿與最終報價。</p>
              <p>4. 安排生產、包裝及交付。</p>
            </div>

            <div className="mt-8">
              <Link
                href="/process"
                className="rounded-full border border-[#cdb89f] px-6 py-3 text-sm font-semibold text-[#5a4632] hover:bg-[#fff9f2]"
              >
                了解完整流程
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#5a4632] text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#dbc3a5]">
            Quote Now
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            想為婚禮或活動準備專屬回禮？
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-8 text-[#f2e8dc] md:text-base">
            無論你需要婚禮回禮、展會禮贈品、企業活動伴手禮，
            我們都可以按主題、預算、數量及交期提供合適方案。
          </p>

          <Link
            href="/contact"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold !text-[#3b3128] shadow-sm transition hover:bg-[#f7efe5]"
          >
            立即聯絡我們
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}