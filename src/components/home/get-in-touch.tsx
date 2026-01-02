import { getInTouchConfig } from '../../configs/get-in-touch.config';
import { GetInTouchConfig } from '../../configs/types';

interface GetInTouchProps {
  config?: GetInTouchConfig;
}

export function GetInTouch({ config = getInTouchConfig }: GetInTouchProps) {
  return (
    <section className="bg-[#ffffff]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-20 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT CONTENT */}
          <div className="lg:w-1/2">
            <h2 className="text-accent text-4xl lg:text-5xl font-semibold mb-6">
              {config.title}
            </h2>

            <p className="text-[#6B6B6B] mb-6 max-w-xl">
              {config.subtitle}
            </p>

            <p className="text-[#6B6B6B] mb-10">
              During the consultation, you will:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {config.benefits.map((benefit) => (
                <div key={benefit.number}>
                  <div className="flex items-start gap-6">
                    <div className="h-12 w-px bg-[#D9D9D9]" />
                    <span className="text-accent text-4xl font-light">
                      {benefit.number}
                    </span>
                  </div>
                  <p className="mt-4 ml-7 text-[#4B4B4B] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:w-1/2">
            <div
              className="rounded-2xl p-10 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <h3 className="text-2xl font-semibold mb-2">
                {config.form.title}
              </h3>
              <p className="text-[#6B6B6B] mb-8">
                {config.form.description}
              </p>

              <form className="space-y-6">
                {/* RADIO */}
                <div>
                  <label className="block text-sm font-medium mb-6">
                    Are you a student or a guardian?
                  </label>
                  <div className="flex gap-4">
                    {["Student", "Guardian"].map((label) => (
                      <label
                        key={label}
                        className="cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="role"
                          className="peer hidden"
                        />
                        <span className="px-6 py-3 border rounded-md text-accent border-[#E5E5E5] peer-checked:bg-accent peer-checked:text-white peer-checked:border-accent transition">
                          {label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* INPUTS */}
                {config.form.fields
                  .filter((f) => f.type !== "radio")
                  .map((field) => (
                    <div key={field.id}>
                      <label className="block text-sm font-medium mb-1">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full rounded-md border border-[#E5E5E5] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  ))}

                {/* BUTTON */}
                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    className="bg-accent text-white px-10 py-3 rounded-md hover:bg-[#5F0909] transition"
                  >
                    {config.form.submitButtonText}
                  </button>
                </div>

                {/* PROGRESS
                <div className="flex justify-center gap-3 pt-4">
                  <span className="h-1 w-14 rounded-full bg-accent" />
                  <span className="h-1 w-14 rounded-full bg-[#D9D9D9]" />
                  <span className="h-1 w-14 rounded-full bg-[#D9D9D9]" />
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
