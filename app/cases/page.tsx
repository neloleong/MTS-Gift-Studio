import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
const cases = [
  {
    title: "婚禮香薰回禮套裝",
    description:
      "以米白及淺金色為主調，配搭透明盒、客製貼紙及小卡，營造溫柔細緻的婚禮回禮氛圍。",
    image: "https://picsum.photos/seed/case-wedding/1200/900",
  },
  {
    title: "品牌展會茶包禮贈品",
    description:
      "為展會品牌方設計印有 Logo 及 QR code 的茶包禮品，兼具品牌露出及實用性。",
    image: "https://picsum.photos/seed/case-expo/1200/900",
  },
  {
    title: "企業周年紀念蜂蜜禮盒",
    description:
      "以高級簡約包裝呈現企業周年活動禮贈品，適合嘉賓拜訪及品牌形象提升。",
    image: "https://picsum.photos/seed/case-corporate/1200/900",
  },
];

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#3b3128]">
      <SiteHeader />

      <section className="border-b border-[#eadfd3] bg-[#f6efe6]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#a67c52]">
            Cases
          </p>
          <h1 className="mb-4 text-4xl font-bold text-[#5a4632] md:text-5xl">案例展示</h1>
          <p className="max-w-2xl text-base leading-8 text-[#6c5846]">
            以下為不同場合的回禮及禮品方向示例，方便你更快理解我們可提供的風格與服務。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-3xl border border-[#eadfd3] bg-white shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#f7f2eb]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-3 text-xl font-semibold text-[#5a4632]">{item.title}</h2>
                <p className="text-sm leading-7 text-[#6c5846]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}