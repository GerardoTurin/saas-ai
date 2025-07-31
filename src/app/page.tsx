import { prisma } from "@/lib/db";

const HomePage = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className="flex items-center justify-center h-screen">
      {
        JSON.stringify(users, null, 2)
      }
    </div>
  );
}

export default HomePage;