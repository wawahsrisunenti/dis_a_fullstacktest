import AuthForm from "../src/components/AuthForm";

const RegisterPage = () => {
  const handleRegister = (formData) => {
    // Logika untuk mengirim data registrasi ke server
    console.log("Registering user:", formData);
  };

  return (
    <div>
      <h1>Register</h1>
      <AuthForm
        onSubmit={handleRegister}
        buttonText="Register"
        isRegisterForm
      />
    </div>
  );
};

export default RegisterPage;
