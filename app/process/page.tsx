import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
const steps = [
  {
    title: "1. 提供需求",
    description:
      "告訴我們活動類型、數量、預算、交期及想要的整體感覺，例如婚禮浪漫風、企業商務風或展會年輕化風格。",
  },
  {
    title: "2. 挑選產品",
    description:
      "根據你的活動需要，挑選合適的禮品款式、包裝方向、配色及客製內容，例如 Logo、名字、日期、祝福語等。",
  },
  {
    title: "3. 確認設計與報價",
    description:
      "我們會整理建議方案、設計方向及最終報價，待你確認後安排生產及包裝。",
  },
  {
    title: "4. 生產與交付",
    description:
      "確認後進入生產期，完成後按約定方式安排自取、配送或活動前交付。",
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#3b3128]">
      <SiteHeader />

      <section className="border-b border-[#eadfd3] bg-[#f6efe6]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#a67c52]">
            Process
          </p>
          <h1 className="mb-4 text-4xl font-bold text-[#5a4632] md:text-5xl">訂製流程</h1>
          <p className="max-w-2xl text-base leading-8 text-[#6c5846]">
            我們希望把訂製流程做得清晰直接，讓你更容易安排活動採購時間表。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-[#eadfd3] bg-white p-8 shadow-sm"
            >
              <h2 className="mb-3 text-2xl font-semibold text-[#5a4632]">{step.title}</h2>
              <p className="text-sm leading-8 text-[#6c5846]">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}