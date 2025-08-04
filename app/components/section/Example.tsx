
export default function ExampleSection() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="space-y-3">
        <h3 className="text-strong flex items-center gap-4 text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="shrink-0 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] size-6 stroke-[1.5] text-default"
          >
            <path d="M9.75 20.25L14.25 3.75M18.25 7.75L22.25 12L18.25 16.25M5.75 16.25L1.75 12L5.75 7.75" />
          </svg>
          Queue workers
        </h3>
        <p className="text-pretty">
          Create queue workers to run background tasks, such as sending emails,
          processing images, or provisioning resources.
        </p>
      </div>

      <div className="relative h-80 cursor-default font-sans text-sm tracking-normal select-none">
        <div className="absolute inset-0 left-1/2 w-[560px] origin-top -translate-x-1/2 scale-75 sm:scale-100">
          <div
            className="-mt-8 -ml-8 size-full pt-8 pl-8"
            style={{
              maskImage:
                "linear-gradient(to bottom, #000 50%, transparent 100%), linear-gradient(to right, #000 80%, transparent 100%)",
              WebkitMaskComposite: "intersect",
            }}
          >
            {/* Card */}
            <div className="origin-top-left translate-y-12 rotate-[-5deg] skew-x-[10deg] text-[13px]">
              <div className="bg-default w-[520px] space-y-10 rounded-lg p-6 shadow-[0_0_0_1px_#00000022,0_0_24px_#00000011]">
                <div className="space-y-1">
                  <p className="text-strong font-medium">Background processes</p>
                  <p>Create background processes that run continuously on your application.</p>
                </div>

                {/* Process Cards */}
                <div className="-space-y-px rounded-lg">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="flex h-10 items-center space-x-2 border border-[#ff9a24] bg-[#ffe6c8] py-2 pr-1 pl-3"
                      style={{
                        backgroundImage:
                          "url('data:image/svg+xml,%3Csvg width=\"5\" height=\"5\" viewBox=\"0 0 5 5\" stroke-width=\"0.5\" stroke=\"%23ff9a24\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M-1 5L5 -1M3 6L6 3\"/%3E%3C/svg%3E')",
                      }}
                    />
                  ))}

                  {[1, 1, 1].map((processCount, idx) => (
                    <ProcessRow key={idx} processCount={processCount} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute inset-0 origin-top-left translate-y-12 rotate-[-5deg] skew-x-[10deg] text-[13px]">
            <div className="absolute top-[106px] left-[24px]">
              <FloatingProcessRow command="queue:work" processes={3} offset="-18px" />
              <FloatingProcessRow command="horizon" processes={1} offset="28px" />
              <FloatingProcessRow command="nightwatch:agent" processes={1} offset="74px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessRow({ processCount }: { processCount: number }) {
  return (
    <div className="border-weak flex h-10 items-center justify-between space-x-2 border py-2 pr-1 pl-3">
      <p className="text-strong flex items-center gap-3 font-mono">
        <CommandIcon />
        <span className="flex items-center gap-2">
          <span className="text-[#eb8610]">php artisan</span>
          queue:work
        </span>
      </p>
      <div className="flex items-center gap-3">
        <p>
          <span className="text-strong">{processCount}</span> process
        </p>
        <HoverIcon />
      </div>
    </div>
  );
}

function FloatingProcessRow({ command, processes, offset }: { command: string; processes: number; offset: string }) {
  return (
    <div
      className="bg-white absolute left-[18px] z-20 flex h-10 w-[470px] items-center justify-between space-x-2 rounded-md py-2 pr-1 pl-3 shadow-[0_0_0_1px_#00000022,0_8px_16px_#00000022] transition duration-300 will-change-transform hover:translate-x-1 hover:-translate-y-1 hover:shadow-[0_0_0_1px_#00000022,0_8px_16px_#00000011]"
      style={{ top: offset }}
    >
      <p className="text-strong flex items-center gap-3 font-mono">
        <CommandIcon />
        <span className="flex items-center gap-2">
          <span className="text-[#eb8610]">php artisan</span>
          {command}
        </span>
      </p>
      <div className="flex items-center gap-3">
        <p>
          <span className="text-strong">{processes}</span> {processes > 1 ? "processes" : "process"}
        </p>
        <HoverIcon />
      </div>
    </div>
  );
}

function CommandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="shrink-0 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] size-4 stroke-[2.25] text-icon-weak"
    >
      <path d="M9.75 20.25L14.25 3.75M18.25 7.75L22.25 12L18.25 16.25M5.75 16.25L1.75 12L5.75 7.75" />
    </svg>
  );
}

function HoverIcon() {
  return (
    <div className="text-icon-alpha hover:bg-weak hover:text-icon-strong flex size-8 items-center justify-center rounded-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="shrink-0 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] size-6 stroke-[1.5]"
      >
        <path d="M5 12H5.01M12 12H12.01M19 12H19.01" strokeWidth="2.5" />
      </svg>
    </div>
  );
}
