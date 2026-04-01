import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import { getProductBySlug, products } from "../../../data/products";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#3b3128]">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-6">
          <Link
            href="/products"
            className="text-sm font-medium text-[#8a6a49] hover:text-[#5a4632]"
          >
            ← 返回產品系列
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="overflow-hidden rounded-[32px] border border-[#eadfd3] bg-white shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#a67c52]">
              {product.category}
            </p>

            <h1 className="mb-4 text-4xl font-bold text-[#5a4632]">
              {product.name}
            </h1>

            <p className="mb-4 text-base leading-8 text-[#6c5846]">
              {product.description}
            </p>

            <p className="mb-2 text-lg font-semibold text-[#7a5a3b]">
              {product.price}
            </p>

            <p className="mb-2 text-sm text-[#8a7663]">
              產品號碼：{product.productCode}
            </p>

            <p className="mb-8 text-sm text-[#8a7663]">
              {product.minOrder}
            </p>

            <div className="mb-8 rounded-3xl border border-[#eadfd3] bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold text-[#5a4632]">
                產品特色
              </h2>

              <ul className="space-y-3 text-sm leading-7 text-[#6c5846]">
                {product.features.map((feature: string) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#a67c52] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8e6842]"
              >
                查詢報價
              </Link>

              <Link
                href="/process"
                className="rounded-full border border-[#cdb89f] px-6 py-3 text-sm font-semibold text-[#5a4632] hover:bg-[#fff9f2]"
              >
                查看訂製流程
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}