import { client } from './sanity'

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface PortfolioSkill {
  _id: string
  name: string
  avatar?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
}

export interface PortfolioProject {
  _id: string
  title?: string
  description?: string
  category?: string
  images?: SanityImage[]
  liveUrl?: string
  skillset?: PortfolioSkill[]
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    description,
    "category": catagory->title,
    images,
    liveUrl,
    "skillset": skillset[]->{
      _id,
      name
    }
  }`

  try {
    const projects = await client.fetch<PortfolioProject[]>(query)
    return projects
  } catch (error) {
    console.error('Error fetching portfolio projects:', error)
    return []
  }
}

export async function getPortfolioProjectById(id: string): Promise<PortfolioProject | null> {
  const query = `*[_type == "project" && _id == $id][0] {
    _id,
    title,
    description,
    "category": catagory->title,
    images,
    liveUrl,
    "skillset": skillset[]->{
      _id,
      name,
      avatar
    }
  }`

  try {
    const project = await client.fetch<PortfolioProject | null>(query, { id })
    return project
  } catch (error) {
    console.error(`Error fetching portfolio project with id ${id}:`, error)
    return null
  }
}

