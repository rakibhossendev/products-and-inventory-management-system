
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

// Change this import to match your Better Auth client file.
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);

    const email = String(formData.get("email") ?? "")
      .trim()
      .toLowerCase();

    // Don't trim passwords; spaces can be part of a valid password.
    const password = String(formData.get("password") ?? "");

    if (!email || !password) {
      setError("Please enter both your email and password.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setIsLoading(true);

      const result = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/user-dashboard",
      });

      if (result.error) {
        setError(
          result.error.message ||
            "Unable to sign in. Please check your credentials."
        );
        return;
      }

      router.replace("/user-dashboard");
      router.refresh();
    } catch (err: unknown) {
      console.error("Sign-in error:", err);

      setError(
        "Something went wrong. Please check your internet connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7FAF8] px-4 py-10 text-slate-900">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-green-100/70 blur-3xl" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-emerald-950/5 md:grid-cols-2">
        {/* Left: Brand panel */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-[#0E5C33] p-10 text-white md:flex lg:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/5" />

          <Link
            href="/"
            className="relative flex w-fit items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0E5C33]">
              <LockKeyhole size={23} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Stockwise
            </span>
          </Link>

          <div className="relative my-12">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-emerald-50">
              <ShieldCheck size={15} />
              Your business, organized
            </span>

            <h1 className="max-w-sm text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              Welcome back to smarter business management.
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-7 text-emerald-100/85">
              Manage products, track sales, monitor stock, and keep your
              business finances organized — all in one place.
            </p>

            <div className="mt-8 space-y-4 text-sm text-emerald-50/95">
              {[
                "Keep your inventory under control",
                "Track sales and business expenses",
                "Make informed decisions with reports",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                    <ArrowRight size={12} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="relative text-xs text-emerald-100/70">
            Simple tools. Better business decisions.
          </p>
        </section>

        {/* Right: Login form */}
        <section className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-lg font-bold tracking-tight text-[#0E5C33] md:hidden"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0E5C33] text-white">
                <LockKeyhole size={19} />
              </span>
              Stockwise
            </Link>

            <div className="mb-8">
              <p className="mb-3 text-sm font-semibold text-[#0E5C33]">
                YOUR ACCOUNT
              </p>

              <h2 className="text-3xl font-bold tracking-tight">
                Welcome back
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Sign in to continue managing your business.
              </p>
            </div>

            <form onSubmit={handleSignIn} className="space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    disabled={isLoading}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0E5C33] focus:ring-4 focus:ring-[#0E5C33]/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs font-semibold text-[#0E5C33] transition hover:text-emerald-800"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    disabled={isLoading}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0E5C33] focus:ring-4 focus:ring-[#0E5C33]/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Error message */}
              {error && (
                <div
                  role="alert"
                  aria-live="polite"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700"
                >
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0E5C33] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#094727] focus:outline-none focus:ring-4 focus:ring-[#0E5C33]/20 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in
                    <ArrowRight size={17} />
                  </>
                )}
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400">NEW TO STOCKWISE?</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <p className="text-center text-sm text-slate-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="font-semibold text-[#0E5C33] hover:underline"
              >
                Create account
              </Link>
            </p>

            <p className="mt-8 text-center text-xs leading-5 text-slate-400">
              By signing in, you agree to use your account responsibly and
              keep your login credentials secure.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
