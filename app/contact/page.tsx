import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#3b3128]">
      <SiteHeader />

      <section className="border-b border-[#eadfd3] bg-[#f6efe6]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#a67c52]">
            Contact
          </p>
          <h1 className="mb-4 text-4xl font-bold text-[#5a4632] md:text-5xl">
            聯絡我們
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[#6c5846]">
            歡迎填寫以下簡單資料，我們會根據你的活動需要，盡快提供合適建議及報價方向。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-[#eadfd3] bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-[#5a4632]">
              簡單詢價問卷
            </h2>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#5a4632]">
                  聯絡姓名
                </label>
                <input
                  type="text"
                  placeholder="請輸入姓名"
                  className="w-full rounded-2xl border border-[#d8c8b7] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#a67c52]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#5a4632]">
                  聯絡方式
                </label>
                <input
                  type="text"
                  placeholder="WhatsApp / 電話 / Email"
                  className="w-full rounded-2xl border border-[#d8c8b7] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#a67c52]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#5a4632]">
                  活動類型
                </label>
                <select className="w-full rounded-2xl border border-[#d8c8b7] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#a67c52]">
                  <option>婚禮回禮</option>
                  <option>展會回手禮</option>
                  <option>企業禮品</option>
                  <option>其他活動</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#5a4632]">
                  需要數量
                </label>
                <input
                  type="text"
                  placeholder="例如：50份 / 100份"
                  className="w-full rounded-2xl border border-[#d8c8b7] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#a67c52]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#5a4632]">
                  預算範圍
                </label>
                <input
                  type="text"
                  placeholder="例如：每份約 MOP 20-MOP 30"
                  className="w-full rounded-2xl border border-[#d8c8b7] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#a67c52]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#5a4632]">
                  期望交貨日期
                </label>
                <input
                  type="date"
                  className="w-full rounded-2xl border border-[#d8c8b7] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#a67c52]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#5a4632]">
                  備註需求
                </label>
                <textarea
                  rows={5}
                  placeholder="例如：想要中式風格、酒紅色、可加名字吊牌"
                  className="w-full rounded-2xl border border-[#d8c8b7] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#a67c52]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex rounded-full bg-[#a67c52] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8e6842]"
              >
                提交查詢
              </button>
            </form>
          </div>

          <div className="rounded-3xl border border-[#eadfd3] bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-[#5a4632]">
              聯絡方式
            </h2>
            <div className="space-y-3 text-sm leading-8 text-[#6c5846]">
              <p>WhatsApp：+853 6208 0722</p>
              <p>Email：joshleong5@gmail.com</p>
              <p>服務地區：澳門</p>
              <p>查詢時間：隨時</p>
            </div>

            <div className="mt-8 rounded-2xl bg-[#f8f3ec] p-5">
              <h3 className="mb-3 text-lg font-semibold text-[#5a4632]">
                填寫小提示
              </h3>
              <ul className="space-y-2 text-sm leading-7 text-[#6c5846]">
                <li>• 如果已選好款式，可直接填寫產品名稱或產品號碼</li>
                <li>• 如有預算要求，建議一併填寫，方便更快報價</li>
                <li>• 如需客製吊牌、包裝或文字，也可於備註註明</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}