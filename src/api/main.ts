import {getFact} from "@/api/api";

async function main(): Promise<string> {
  const data = await getFact();
  return data.text;
}

export default {
  main
};
