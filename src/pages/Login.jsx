import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ArrowRight, Mail, LockKeyhole, Sparkles } from "lucide-react";
import toast from "react-hot-toast";
import { signIn } from "@/services/auth";

export function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (values) => {
    try {
      await signIn(values);
      toast.success("Welcome back!");
      navigate("/inbox", { replace: true });
    } catch (error) {
      toast.error(error.message || "Unable to sign in.");
    }
  };
  return (
    <main className="auth-page">
      <section className="auth-visual">
        <div className="auth-brand">
          <span className="brand-mark">O</span>
          <span className="brand-name">
            outbox<span>.</span>
          </span>
        </div>
        <div className="auth-visual-copy">
          <span className="auth-pill">
            <Sparkles size={14} /> A calmer way to email
          </span>
          <h1>
            Make space for
            <br />
            <em>great work.</em>
          </h1>
          <p>
            Thoughtful tools for your messages, follow-ups, and everything in
            between.
          </p>
          <div className="auth-quote">
            <div className="quote-avatars">
              <span>OB</span>
              <span>AC</span>
              <span>JS</span>
            </div>
            <div>
              <strong>Less inbox. More impact.</strong>
              <small>Built for the way you work.</small>
            </div>
          </div>
        </div>
        <div className="auth-visual-footer">
          © 2026 Outbox Labs <span>Designed for focus.</span>
        </div>
      </section>
      <section className="auth-form-side">
        <div className="auth-form-wrap">
          <span className="auth-overline">WELCOME BACK</span>
          <h2>Sign in to Outbox</h2>
          <p className="auth-subtitle">Pick up right where you left off.</p>
          <button
            className="google-signin"
            type="button"
            onClick={() =>
              toast("Google sign-in needs OAuth credentials to be configured.")
            }
          >
            <strong className="google-g">G</strong> Continue with Google
          </button>
          <div className="auth-divider">
            <span />
            or continue with email
            <span />
          </div>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <label>Email address</label>
            <div className="auth-input-wrap">
              <Mail size={17} />
              <input
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                {...register("email", {
                  required: "Enter your email address.",
                })}
              />
            </div>
            {errors.email && (
              <small className="auth-error">{errors.email.message}</small>
            )}
            <div className="auth-label-row">
              <label>Password</label>
              <button
                type="button"
                onClick={() =>
                  toast(
                    "Password recovery can be connected to your auth provider.",
                  )
                }
              >
                Forgot password?
              </button>
            </div>
            <div className="auth-input-wrap">
              <LockKeyhole size={17} />
              <input
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                {...register("password", { required: "Enter your password." })}
              />
            </div>
            {errors.password && (
              <small className="auth-error">{errors.password.message}</small>
            )}
            <button className="auth-submit" disabled={isSubmitting}>
              Sign in <ArrowRight size={17} />
            </button>
          </form>
          <p className="auth-switch">
            New to Outbox?{" "}
            <Link to="/signup">
              Create an account <ArrowRight size={14} />
            </Link>
          </p>
          <p className="auth-legal">
            By continuing, you agree to our <a href="#terms">Terms</a> and{" "}
            <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
