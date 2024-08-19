import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-posts";
import { MainNav } from "@/components/main-nav";
import TopCategories from "@/components/home/top-categories";
import PopularPosts from "@/components/home/popular-posts";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <div className="mt-32">
          <h1 className="font-extrabold text-7xl">Hi, I&apos;m Peam สวัสดีคับ</h1>
      </div>
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>
            <LatestPosts />
        </div>
        <div className="h-screen">
          <div>
            <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
            <TopCategories />
          </div>
          <div className="mt-10 sticky top-0">
            <h1 className="font-bold mb-4">POPULAR POSTS</h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  );
}
