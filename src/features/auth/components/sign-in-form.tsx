import { SignInFormContainer } from "@/features/auth/components/sign-in-form-container";
import { t } from "i18next";
import { EyeClosedIcon, EyeIcon } from "lucide-react";

export const SignInForm = () => {
  const {
    form,
    showPassword,
    loading,
    handleInputChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleSubmit,
  } = SignInFormContainer();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full"
    >
      

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {t("auth.email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleInputChange}
          autoComplete="off"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-xs focus:ring-3 focus:ring-blue-300 focus:border-blue-500 p-2"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          {t("auth.password")}
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            required
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-xs focus:ring-3 focus:ring-blue-300 focus:border-blue-500 p-2"
          />
          <button
            type="button"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? (
              <EyeClosedIcon />
            ) : (
              <EyeIcon />
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className={`w-full py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-hidden focus:ring-3 focus:ring-blue-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full"></div>
          </div>
        ) : (
          t("auth.submit")
        )}
      </button>
    </form>
  );
};