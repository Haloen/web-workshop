import {User} from "@/types/user";
import {getRepo, getUser} from "@/api/api";

async function main(): Promise<string> {
  const name = "Haloen";
  const data: User = await getUser(name);
  const repos = await getRepo(name);
  const repoNames = repos.map(repo => repo.name).join(", ");
  return `${data.login}'s repos are [${repoNames}]`;
}

export default {
  main
};
