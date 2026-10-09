import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ArrowRight, LockKeyhole, Mail, UserRound } from "lucide-react";
import toast from "react-hot-toast";
import { signUp } from "@/services/auth";

export function SignupPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (values) => {
    try {
      await signUp(values);
      toast.success("Your demo account is ready!");
      navigate("/inbox", { replace: true });
    } catch (error) {
      toast.error(error.message || "Unable to create your account.");
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
          <span className="auth-pill">YOUR WORK, IN FLOW</span>
          <h1>
            A little less
            <br />
            <em>noise.</em>
          </h1>
          <p>
            Schedule with intention. Follow up with confidence. Get back to what
            matters.
          </p>
        </div>
        <div className="auth-visual-footer">
          © 2026 Outbox Labs <span>Designed for focus.</span>
        </div>
      </section>
      <section className="auth-form-side">
        <div className="auth-form-wrap">
          <span className="auth-overline">GET STARTED — IT'S FREE</span>
          <h2>Create your account</h2>
          <p className="auth-subtitle">
            Your more organized inbox starts here.
          </p>
          <form
            className="auth-form signup-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>Full name</label>
            <div className="auth-input-wrap">
              <UserRound size={17} />
              <input
                placeholder="Oliver Brown"
                autoComplete="name"
                {...register("name", { required: "Enter your name." })}
              />
            </div>
            {errors.name && (
              <small className="auth-error">{errors.name.message}</small>
            )}
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
            <label>Password</label>
            <div className="auth-input-wrap">
              <LockKeyhole size={17} />
              <input
                type="password"
                placeholder="At least 8 characters"
                autoComplete="new-password"
                {...register("password", {
                  required: "Create a password.",
                  minLength: {
                    value: 8,
                    message: "Use at least 8 characters.",
                  },
                })}
              />
            </div>
            {errors.password && (
              <small className="auth-error">{errors.password.message}</small>
            )}
            <button className="auth-submit" disabled={isSubmitting}>
              Create account <ArrowRight size={17} />
            </button>
          </form>
          <p className="auth-switch">
            Already have an account?{" "}
            <Link to="/login">
              Sign in <ArrowRight size={14} />
            </Link>
          </p>
          <p className="auth-legal">
            Demo UI only: connect a backend provider for secure account
            creation.
          </p>
        </div>
      </section>
    </main>
  );
}
