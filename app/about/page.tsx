import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#3b3128]">
      <SiteHeader />

      <section className="border-b border-[#eadfd3] bg-[#f6efe6]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#a67c52]">
            About Us
          </p>
          <h1 className="mb-4 text-4xl font-bold text-[#5a4632] md:text-5xl">關於我們</h1>
          <p className="max-w-2xl text-base leading-8 text-[#6c5846]">
            我們專注提供婚禮、展會、品牌活動及企業禮贈品的客製化方案，
            希望讓每一份回禮都不只是「送禮」，而是活動記憶與品牌感受的一部分。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="rounded-3xl border border-[#eadfd3] bg-white p-10 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-[#5a4632]">我們的服務理念</h2>
          <div className="space-y-4 text-sm leading-8 text-[#6c5846]">
            <p>
              我們相信，一份設計得宜的回禮，可以把婚禮的溫度、展會的品牌印象，
              甚至企業活動的專業感，準確地傳遞到每一位賓客手中。
            </p>
            <p>
              因此，我們不只提供產品，更重視整體呈現，包括包裝、色系、視覺風格、
              文字細節及交付流程，務求令禮品真正配合你的場合。
            </p>
            <p>
              無論你是準備婚禮、品牌活動、展覽、發布會或企業送禮，
              我們都希望成為你可靠的客製化禮品夥伴。
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}