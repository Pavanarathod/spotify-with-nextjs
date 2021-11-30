import { getProviders, signIn } from "next-auth/react";

const Login = ({ providers }) => {
  return (
    <div className="bg-gray-800 h-screen flex flex-col items-center space-y-3 justify-center">
      <img
        src="https://links.papareact.com/9xl"
        alt="spotify"
        className="h-32"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="px-5 py-2 bg-[#18D860] rounded-full shadow text-white font-semibold"
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
