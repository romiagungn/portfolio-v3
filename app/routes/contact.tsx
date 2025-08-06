import type { FC } from "react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { Instagram, Linkedin, MailIcon, Twitter } from "lucide-react";
import { PageLayout } from "~/components/layout/PageLayout";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log("Form submission received:", data);

  return { success: true, message: "Pesan Anda telah terkirim!" };
}

interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  as?: "input" | "textarea";
  rows?: number;
}
const FormInput: FC<FormInputProps> = ({ label, as = "input", ...props }) => {
  const commonClasses =
    "w-full bg-transparent border dark:border-neutral-700 rounded-lg py-3 px-4 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#BFF163] focus:border-transparent transition-colors";
  const InputComponent = as === "textarea" ? "textarea" : "input";

  return (
    <div className="w-full">
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-neutral-400 mb-2"
      >
        {label}
      </label>
      <InputComponent id={props.name} className={commonClasses} {...props} />
    </div>
  );
};

export default function ContactPage() {
  return (
    <PageLayout className="min-h-screen py-32 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm font-medium text-[#BFF163]">
          <span>CONNECT WITH ME</span>
        </div>
        <h1 className="mt-4 font-bold tracking-tight max-w-2xl text-6xl">
          Let&apos;s start a project together
        </h1>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Kolom Kiri: Formulir Kontak */}
          <Form method="post" className="space-y-8">
            <FormInput
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Enter fullname"
              required
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="*****@mail.com"
              required
            />
            <FormInput
              label="Message"
              name="message"
              as="textarea"
              rows={5}
              placeholder="Enter messages"
              required
            />
            <button
              type="submit"
              className="rounded-full border dark:border-neutral-600 px-8 py-3 text-base font-medium hover:bg-primary-dark hover:text-white dark:hover:bg-neutral-800 transition-colors"
            >
              Submit
            </button>
          </Form>

          {/* Kolom Kanan: Kartu Info */}
          <div className="flex flex-col">
            <div className="rounded-2xl dark:bg-neutral-900 border dark:border-neutral-800 p-8">
              <div className="flex items-center gap-2">
                <span className="text-sm dark:text-neutral-300">
                  Available for work
                </span>
              </div>
              <img
                src="/images/avatar.png"
                alt="Foto profil"
                className="w-24 h-24 rounded-full object-cover my-6"
              />
              <p className="dark:text-neutral-300 leading-relaxed">
                My inbox is always open. Whether you have a project or just want
                to say Hi. I would love to hear from you. Feel free to contact
                me and I&apos;ll get back to you.
              </p>
              <div className="mt-6 flex gap-6 text-neutral-500">
                <Link
                  to="#"
                  className="dark:hover:text-white transition-colors"
                >
                  <Linkedin />
                </Link>
                <Link
                  to="#"
                  className="dark:hover:text-white transition-colors"
                >
                  <Instagram />
                </Link>
                <Link
                  to="mailto:email@example.com"
                  className="dark:hover:text-white transition-colors"
                >
                  <MailIcon />
                </Link>
                <Link
                  to="#"
                  className="dark:hover:text-white transition-colors"
                >
                  <Twitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
