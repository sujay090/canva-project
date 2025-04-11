import LoginCard from "../../components/login/LoginCard";
import Image from "next/image";
function Login() {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/canva.png)",
        }}
      />
      <div
        className="inset-0 absolute "
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8), rgba(0,0,0,0.8))",
        }}
      />
      <div className="absolute top-0 left-4 z-10 mt-3">
        <Image
          src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
          alt="canva"
          width={90}
          height={30}
          priority
        />
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-screen ">
        <LoginCard />
      </div>
    </div>
  );
}

export default Login;
