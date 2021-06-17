import {Fact} from "@/types/fact";

export async function getFact(): Promise<Fact> {
    return await (await fetch("https://uselessfacts.jsph.pl/random.json?language=en")).json();
}