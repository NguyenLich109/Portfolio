import Home from "./Home";

export const metadata = {
  title: "Portfolio",
  images: "/images/home.jpg",
  description: "Portfolio CV online",
  openGraph: {
    title: "Portfolio",
    images: "/images/home.jpg",
    description: "Portfolio CV online",
  },
};

export default function PageHome() {
  return (
    <>
      <Home></Home>
    </>
  );
}
