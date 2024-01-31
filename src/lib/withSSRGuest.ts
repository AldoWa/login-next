import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

export function withSSRGuest<T extends { [key: string]: any; }>(fn: GetServerSideProps<T>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<T>> => {
    const { 'nextauth.token': token } = parseCookies(ctx)

    if(token) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false
        }
      }
    }
    
    return await fn(ctx)
  }
}