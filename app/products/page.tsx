import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { products } from "../../data/products";

type Props = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const selectedCategory = resolvedSearchParams?.category;

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const categoryButtons = [
    { label: "全部", href: "/products" },
    { label: "婚禮回禮", href: "/products?category=婚禮回禮" },
    { label: "展會回手禮", href: "/products?category=展會回手禮" },
    { label: "企業禮品", href: "/products?category=企業禮品" },
  ];

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#3b3128]">
      <SiteHeader />

      <section className="border-b border-[#eadfd3] bg-[#f6efe6]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#a67c52]">
            Products
          </p>
          <h1 className="mb-4 text-4xl font-bold text-[#5a4632] md:text-5xl">
            產品系列
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[#6c5846]">
            精選婚禮回禮、展會回手禮及企業活動禮品，
            可按品牌、色系、包裝、文字與活動需求進行客製化。
          </p>

          {selectedCategory && (
            <p className="mt-4 text-sm font-medium text-[#8a6a49]">
              目前分類：{selectedCategory}
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-wrap gap-3">
          {categoryButtons.map((button) => {
            const isActive =
              (button.label === "全部" && !selectedCategory) ||
              button.label === selectedCategory;

            return (
              <Link
                key={button.label}
                href={button.href}
                className={
                  isActive
                    ? "rounded-full bg-[#a67c52] px-5 py-2 text-sm font-medium text-white"
                    : "rounded-full border border-[#d8c8b7] px-5 py-2 text-sm font-medium text-[#5a4632] hover:bg-[#fff9f2]"
                }
              >
                {button.label}
              </Link>
            );
          })}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-[#eadfd3] bg-white p-10 text-center shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold text-[#5a4632]">
              暫時未有此分類產品
            </h2>
            <p className="mb-6 text-sm leading-7 text-[#6c5846]">
              你可以先返回全部產品，或稍後再查看。
            </p>
            <Link
              href="/products"
              className="inline-flex rounded-full bg-[#a67c52] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8e6842]"
            >
              返回全部產品
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
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
                  <h2 className="mb-2 text-xl font-semibold text-[#5a4632]">
                    {product.name}
                  </h2>
                  <p className="mb-3 text-sm leading-7 text-[#6c5846]">
                    {product.shortDescription}
                  </p>
                  <p className="mb-1 text-sm font-semibold text-[#7a5a3b]">
                    {product.price}
                  </p>
                  <p className="mb-1 text-sm text-[#8a7663]">
                    產品號碼：{product.productCode}
                  </p>
                  <p className="mb-5 text-sm text-[#8a7663]">
                    {product.minOrder}
                  </p>

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
        )}
      </section>

      <SiteFooter />
    </main>
  );
}