import { SideContact } from "@/components/SideContact";
import { Login } from "@/components/form/Login";

export default function Home() {
  return (
    <main className="grid sm:grid-cols-1 xl:grid-cols-2 min-h-screen items-center gap-32 p-6">
      <div className="h-full w-full flex items-center justify-center">
        <Login></Login>
      </div>
      <SideContact></SideContact>
    </main>
  );
}
