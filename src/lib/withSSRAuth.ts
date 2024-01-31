import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from "nookies";

export function withSSRAuth<T extends { [key: string]: any; }>(fn: GetServerSideProps<T>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<T>> => {
    const { 'nextauth.token': token } = parseCookies(ctx)

    if(!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
    
    try{
      return await fn(ctx)
    } catch(err) {
      destroyCookie(ctx, 'nextauth.token')
  
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }
  }
}