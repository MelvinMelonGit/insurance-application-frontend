// utility to fake a network latency
export default function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}