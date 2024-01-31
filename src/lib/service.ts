import axios from "axios";
import { parseCookies } from "nookies";

function setupAPI(ctx: any = undefined) {
  const cookies = parseCookies(ctx)
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${cookies['next-auth.session-token']}`
    }
  })

  return api;
}


export const api = setupAPI()