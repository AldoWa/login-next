import { Wrapper } from "@/components/Wrapper";
import { Login } from "@/components/form/Login";
import { withSSRGuest } from "@/lib/withSSRGuest";

export default function Home() {
  return (
    <Wrapper>
      <Login></Login>
    </Wrapper>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})