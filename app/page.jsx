import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="min-md:hidden" />
        <span className="text-center orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="text-center desc">
        AI-Prompt is a platform for AI-powered prompts. Share your prompts with friends, family, and the world. 
      </p>
      
      <Feed />
    </section>
  );
};

export default Home;
