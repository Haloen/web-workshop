import {getQuote} from "@/api/api";

async function main(): Promise<string> {
  const data = await getQuote();
  return `"${data.content}" ~ ${data.author}`;
}

export default {
  main
};
