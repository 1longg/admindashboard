import Header from "@Components/Header";
import SideBar from "@Components/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full">
      <SideBar />
      <div className="flex flex-1 w-full flex-col ">
        <Header />
        {children}
      </div>
    </div>
  );
}
