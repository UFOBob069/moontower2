import { getLatestEpisode } from '@/lib/latest-episode'

export const revalidate = 3600

export async function GET() {
  return Response.json(await getLatestEpisode())
}
