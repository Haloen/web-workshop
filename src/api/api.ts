import {Quote} from "@/types/quote";

export async function getQuote(): Promise<Quote> {
    return await (await fetch("https://api.quotable.io/random")).json();
}