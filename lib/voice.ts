
const voiceClient = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY! });

export async function synthesize(text: string): Promise<Buffer> {
  const audio = await voiceClient.generate({
    text,
    voice: 'Adam',
    model_id: 'eleven_multilingual_v2',
    output_format: 'mp3',
    voice_settings: { stability: 0.55, similarity_boost: 0.8 },
  });
  return Buffer.from(audio);
}