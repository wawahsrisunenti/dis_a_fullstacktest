import AuthForm from "../src/components/AuthForm";

const LoginPage = () => {
  const handleLogin = (formData) => {
    // Logika untuk mengirim data login ke server
    console.log("Logging in user:", formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm onSubmit={handleLogin} buttonText="Login" />
    </div>
  );
};

export default LoginPage;
