import { getInTouchConfig } from '../../configs/get-in-touch.config';
import { GetInTouchConfig } from '../../configs/types';

interface GetInTouchProps {
  config?: GetInTouchConfig;
}

export function GetInTouch({ config = getInTouchConfig }: GetInTouchProps) {
  return (
    <section className="bg-grays-G6">
      <div className="py-4xl md:py-[4.69rem] w-full max-w-screen-2xl mx-auto px-[25px] md:px-[30px] xl:px-[75px] 4xl:px-0 pt-0 md:pt-0 lg:pt-[4.69rem]">
        <div className="flex items-center gap-y-6 md:gap-y-[46px] lg:flex-row lg:items-stretch lg:justify-between flex-col">
          <div
            id="standard-web-lead-form"
            aria-hidden="true"
            className="h-0 order-0 md:-mb-[46px] lg:mb-0 lg:order-first"
          />
          <div className="flex max-w-[740px] flex-col gap-6 px-5 py-8 lg:basis-[45%] lg:p-0 2xl:basis-[47%] order-2 lg:order-1">
            <h2 className="whitespace-pre-line text-accent text-4xl font-bold">
              {config.title}
            </h2>
            <p className="whitespace-pre-line text-neutral-500">
              {config.subtitle}
            </p>
            <div className="inline-grid grid-cols-1 gap-x-16 gap-y-8 pt-3 md:grid-cols-2 lg:pb-8">
              {config.benefits.map((benefit, index) => (
                <div key={index} className="">
                  <div className="mb-1 flex items-start gap-6 md:items-start md:mb-0">
                    <div className="h-[47px] w-px md:h-[47px] bg-[#D9D9D9]" />
                    <p className="whitespace-pre-line font-display-serif text-sh2 font-light text-primary01-50">
                      {benefit.number}
                    </p>
                  </div>
                  <p className="whitespace-pre-line font-body-p text-b2 md:font-body-p md:text-b1 ml-6 text-neutral01-75">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="relative w-full md:py-[3.22rem] lg:basis-[45%] lg:rounded-2xl lg:bg-none! lg:py-0 2xl:basis-[44%] order-1"
            style={{
              backgroundImage:
                "linear-gradient(rgba(250, 249, 246, 0.6), rgba(250, 249, 246, 0.6)), url(/_next/static/media/dot_background_texture.a53a5269.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "repeat"
            }}
          >
            <div className="sticky top-0">
              <div>
                <div
                  className="mx-auto grid max-w-158.75 grid-cols-1 gap-3xl rounded-xl p-6 shadow-[0px_2px_20px_0px_rgba(86,65,46,0.10)] md:p-10 bg-white text-neutral01-100"
                  id="form-builder-section"
                >
                  <div>
                    <h3 className="whitespace-pre-line font-display-sans text-mh1.75 md:font-display-sans md:text-h3 mb-md">
                      {config.form.title}
                    </h3>
                    <p className="whitespace-pre-line font-body-p text-mb1 md:font-body-p md:text-b2">
                      {config.form.description}
                    </p>
                  </div>
                  <form className="grid grid-cols-1 gap-3xl" action="#">
                    <div>
                      <div className="gap-4 flex flex-col">
                        {config.form.fields.map((field) => (
                          <div key={field.id} className={`w-full ${field.type === 'radio' ? 'data-[test-id=input-fieldset-' + field.id + ']' : 'data-[test-id=input-fieldset-' + field.id + ']'}`}>
                            {field.type === 'radio' && field.options ? (
                              <div className="flex rounded-md font-body-p text-neutral01-100 flex-col">
                                <label
                                  className="whitespace-pre-line font-body-p text-mb1 md:font-body-p md:text-b1 cursor-pointer pb-1.25"
                                  htmlFor={field.id}
                                >
                                  {field.label}
                                </label>
                                <div className="flex items-center gap-6">
                                  {field.options.map((option, optionIndex) => (
                                    <label
                                      key={option.value}
                                      htmlFor={`${field.id}-${optionIndex}`}
                                      className="cursor-pointer font-bold px-lg py-sm transition-all border border-solid rounded inline-flex justify-center items-center gap-[0.62rem] focus:outline-none focus:ring-0 font-body-p relative text-primary01-75 border-primary01-25 hover:bg-primary01-25 hover:text-primary01-75 bg-white"
                                    >
                                      <input
                                        type="radio"
                                        id={`${field.id}-${optionIndex}`}
                                        data-test-id={`${field.id}-${option.label}`}
                                        className="pointer-events-none absolute top-0 appearance-none [clip:rect(0,0,0,0)]"
                                        name={field.id}
                                        defaultValue={option.value}
                                      />
                                      <span className="whitespace-pre-line cursor-pointer p-4">
                                        {option.label}
                                      </span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <div className="flex rounded-md font-body-p text-neutral01-100 flex-col relative">
                                <label
                                  className="whitespace-pre-line font-body-p text-mb1 md:font-body-p md:text-b1 cursor-pointer pb-[0.3125rem]"
                                  htmlFor={field.id}
                                >
                                  {field.label}
                                </label>
                                <input
                                  type={field.type}
                                  id={field.id}
                                  placeholder={field.placeholder}
                                  data-test-id={`text-field-${field.id}`}
                                  className="w-full rounded-lg border border-grays-G7 p-[0.9rem] placeholder:font-body-single transition-all duration-75 focus:ring-0 placeholder:text-b1 [&::placeholder]:!text-grays-G5 !bg-white autofill-light text-b1 focus:border-secondary01-50 focus:shadow-[0_0_0_1px_theme(colors.secondary01.50)]"
                                  name={field.id}
                                  defaultValue=""
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex w-auto justify-between gap-3">
                      <div />
                      <div>
                        <button
                          className="rounded px-[1.88rem] py-md leading-[18px] fit-content border hover:shadow-[0px_5px_10px_rgba(0,0,0,0.2)] transition-all duration-150 min-w-[6.25rem] max-w-[17.625rem] border-transparent text-white cursor-pointer bg-primary01-75 hover:bg-primary01-100 active:bg-red-950 active:border-red-950"
                          type="button"
                          data-test-id="form-next-button"
                        >
                          <span className="whitespace-pre-line font-display-sans text-button">
                            {config.form.submitButtonText}
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-center gap-2">
                      <div className="h-1 w-14 rounded-full transition-all duration-200 ease-in-out bg-primary01-75" />
                      <div className="h-1 w-14 rounded-full bg-grays-G5 transition-all duration-200 ease-in-out" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
