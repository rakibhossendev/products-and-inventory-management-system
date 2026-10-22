'use client'

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";


export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all required fields.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const { error } = await signUp.email({
        name,
        email,
        password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      router.replace("/user-dashboard");
      router.refresh();
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Something went wrong. Please try again.");
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

          <Link href="/" className="relative flex w-fit items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0E5C33]">
              <LockKeyhole className="size-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Stockwise
            </span>
          </Link>

          <div className="relative my-12">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-emerald-50">
              <ShieldCheck className="size-4" />
              Start your business journey
            </span>

            <h1 className="max-w-sm text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              Everything your business needs, in one place.
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-7 text-emerald-100/85">
              Create your account and take control of your products,
              inventory, sales, and business finances.
            </p>

            <div className="mt-8 space-y-4 text-sm text-emerald-50/95">
              {[
                "Organize products and stock",
                "Record sales and purchases",
                "Understand your business performance",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex size-5 items-center justify-center rounded-full bg-white/15">
                    <Check className="size-3" />
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

        {/* Right: Sign-up form */}
        <section className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
          <div className="w-full max-w-md">
            {/* Mobile brand */}
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-lg font-bold tracking-tight text-[#0E5C33] md:hidden"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-[#0E5C33] text-white">
                <LockKeyhole className="size-5" />
              </span>
              Stockwise
            </Link>

            <div className="mb-7">
              <p className="mb-3 text-sm font-semibold text-[#0E5C33]">
                CREATE YOUR ACCOUNT
              </p>

              <h2 className="text-3xl font-bold tracking-tight">
                Get started
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Create an account to manage your business smarter.
              </p>
            </div>

            <form
              onSubmit={handleUserSignUp}
              className="space-y-4"
            >
              {/* Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-700"
                >
                  Full name
                </Label>

                <div className="relative">
                  <UserRound className="absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-slate-400" />

                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    disabled={isLoading}
                    className="h-12 rounded-xl border-slate-200 pl-11 focus-visible:border-[#0E5C33] focus-visible:ring-[#0E5C33]/20"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700"
                >
                  Email address
                </Label>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-slate-400" />

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    disabled={isLoading}
                    className="h-12 rounded-xl border-slate-200 pl-11 focus-visible:border-[#0E5C33] focus-visible:ring-[#0E5C33]/20"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-700"
                >
                  Password
                </Label>

                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-slate-400" />

                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 6 characters"
                    autoComplete="new-password"
                    minLength={6}
                    required
                    disabled={isLoading}
                    className="h-12 rounded-xl border-slate-200 pl-11 pr-12 focus-visible:border-[#0E5C33] focus-visible:ring-[#0E5C33]/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-[#0E5C33]"
                  >
                    {showPassword ? (
                      <EyeOff className="size-[18px]" />
                    ) : (
                      <Eye className="size-[18px]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm font-semibold text-slate-700"
                >
                  Confirm password
                </Label>

                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-slate-400" />

                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    autoComplete="new-password"
                    minLength={6}
                    required
                    disabled={isLoading}
                    className="h-12 rounded-xl border-slate-200 pl-11 pr-12 focus-visible:border-[#0E5C33] focus-visible:ring-[#0E5C33]/20"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-[#0E5C33]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="size-[18px]" />
                    ) : (
                      <Eye className="size-[18px]" />
                    )}
                  </button>
                </div>
              </div>



              {/* Submit */}
              <Button
                type="submit"
                disabled={isLoading}
                className="h-12 w-full rounded-xl bg-[#0E5C33] font-semibold text-white shadow-sm transition hover:bg-[#094727] focus-visible:ring-[#0E5C33]/20 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <LoaderCircle className="mr-2 size-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create account
                    <ArrowRight className="ml-2 size-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400">
                ALREADY REGISTERED?
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <p className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-semibold text-[#0E5C33] transition hover:underline"
              >
                Sign in
              </Link>
            </p>

            <p className="mt-7 text-center text-xs leading-5 text-slate-400">
              Secure account creation for your business.
            </p>
          </div>
        </section>
      </div>
    </main>
  );

}