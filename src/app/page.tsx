import { redirect } from "next/navigation";

const Home = () => {
  redirect("objects");
  return <div />;
};

export default Home;
