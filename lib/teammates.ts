import { client } from './sanity'

export interface TeammateSocialLinks {
  facebook?: string
  twitter?: string
  linkedin?: string
  instagram?: string
  github?: string
  youtube?: string
}

export interface Teammate {
  _id: string
  name: string
  summary: string
  title?: string
  photo: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  socialLinks?: TeammateSocialLinks
}

export async function getTeammates(): Promise<Teammate[]> {
  const query = `*[_type == "teammate"] | order(_createdAt asc) {
    _id,
    name,
    summary,
    title,
    photo {
      asset {
        _ref,
        _type
      }
    },
    socialLinks
  }`

  try {
    const teammates = await client.fetch<Teammate[]>(query)
    return teammates
  } catch (error) {
    console.error('Error fetching teammates:', error)
    return []
  }
}

