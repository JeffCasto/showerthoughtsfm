import axios from 'axios';
const redditURL = 'https://www.reddit.com/r/Showerthoughts/top.json?t=week&limit=100';

export async function getRandomThought(): Promise<string> {
  try {
    const { data } = await axios.get(redditURL, { headers: { 'User-Agent': 'ShowerThoughtsFM/1.0' } });
    const posts = data.data.children;
    const pick = posts[Math.floor(Math.random() * posts.length)];
    return pick?.data?.title ?? 'Your stomach thinks all potatoes are mashed.';
  } catch {
    return 'We eat pizza from the inside out.';
  }
}
