import * as React from "react";
import { useState } from "react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "be450410-8797-4e71-aca1-20a023fe0d12");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        e.currentTarget.reset();
      } else {
        setResult("Error submitting form. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { label: "GMAIL", url: "mailto:Jothivasan2001@gmail.com" },
    { label: "LINKEDIN", url: "https://linkedin.com/in/jothivasan/" },
    { label: "GITHUB", url: "https://github.com/jothivasan" },
    { label: "LEETCODE", url: "https://leetcode.com/u/Jothivasan28/" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <div className="relative mb-12">
            <div className="absolute -left-4 top-0 w-px h-full bg-zinc-900" />
            <div className="pl-2 md:pl-6">
              <div className="text-xs text-zinc-500 font-black italic uppercase tracking-[0.3em] mb-4"></div>
              <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-[0.01em] leading-none text-white">
                LET'S <br /> <span className="text-zinc-600">CONNECT</span>
              </h2>
            </div>
          </div>
          <p className="text-zinc-500 text-base md:text-lg mb-12 max-w-md">
            I'm currently focused on building high-performance frontend
            solutions. Let's discuss how I can bring business impact to your
            team.
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="text-[10px] font-black italic text-zinc-600 uppercase tracking-[0.2em] mb-2">
                PHONE
              </h4>
              <a
                href="tel:9994497540"
                className="text-xl md:text-2xl font-black italic uppercase tracking-tight hover:text-[#1DCD9F] transition-colors text-white"
              >
                999 449 7540
              </a>
            </div>
            <div>
              <h4 className="text-[10px] font-black italic text-zinc-600 uppercase tracking-[0.2em] mb-2">
                LOCATION
              </h4>
              <p className="text-xl md:text-2xl font-black italic uppercase tracking-tight text-white">
                CHENNAI, INDIA
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-xs font-black italic uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#050505] border border-zinc-900 p-8 md:p-16">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-[fade-up_0.5s_ease-out]">
              <div className="w-16 h-16 bg-[#1DCD9F] rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-[0.01em] mb-4 text-white">
                MESSAGE RECEIVED
              </h3>
              <p className="text-zinc-500 text-sm max-w-xs">
                I'll get back to you shortly. Looking forward to connecting.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setResult("");
                }}
                className="mt-10 text-[10px] font-black italic uppercase tracking-widest text-zinc-500 hover:text-white transition-colors underline underline-offset-8"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black italic text-zinc-600 uppercase tracking-widest">
                  YOUR NAME
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="EX. JOTHIVASAN"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 text-white font-medium focus:outline-none focus:border-[#1DCD9F] transition-colors placeholder:text-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black italic text-zinc-600 uppercase tracking-widest">
                  EMAIL ADDRESS
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder="EX. HELLO@DOMAIN.COM"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 text-white font-medium focus:outline-none focus:border-[#1DCD9F] transition-colors placeholder:text-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black italic text-zinc-600 uppercase tracking-widest">
                  MESSAGE
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="HOW CAN WE WORK TOGETHER?"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 text-white font-medium focus:outline-none focus:border-[#1DCD9F] transition-colors resize-none placeholder:text-zinc-800"
                ></textarea>
              </div>

              <button
                disabled={isSubmitting}
                className="w-full py-6 bg-white text-black font-black uppercase italic tracking-[0.2em] transition-all duration-300 hover:bg-[#1DCD9F] disabled:bg-zinc-800 disabled:text-zinc-600 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-4"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                {!isSubmitting && (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />
    </div>
  );
};

export default Contact;
