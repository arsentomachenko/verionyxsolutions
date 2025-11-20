# Sanity CMS Integration Setup

This project is integrated with Sanity CMS to manage portfolio projects dynamically.

## Prerequisites

1. A Sanity account (sign up at [sanity.io](https://www.sanity.io))
2. A Sanity project created

## Setup Instructions

### 1. Create a Sanity Project

If you haven't already, create a new Sanity project:
- Go to [sanity.io](https://www.sanity.io)
- Create a new project
- Note your Project ID and Dataset name (usually "production")

### 2. Configure Environment Variables

Create a `.env.local` file in the root of `next_patrix` directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
```

Replace `your-project-id-here` with your actual Sanity project ID.

### 3. Create the Project Schema in Sanity

In your Sanity Studio, create a schema file for projects. The schema should match the following structure:

**File: `schemas/project.js`** (or `.ts` if using TypeScript)

```javascript
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}
```

### 4. Add Projects in Sanity Studio

1. Open your Sanity Studio
2. Navigate to the "Project" content type
3. Add your portfolio projects with:
   - Title
   - Category (e.g., "websites", "design", "mockup")
   - Image (upload an image)
   - Optional: Description and Slug

### 5. Verify the Integration

1. Make sure your `.env.local` file has the correct credentials
2. Restart your Next.js development server:
   ```bash
   npm run dev
   ```
3. Navigate to the portfolio section on your website
4. Projects from Sanity should now appear

## Project Structure

- `lib/sanity.ts` - Sanity client configuration
- `lib/portfolio.ts` - Functions to fetch portfolio projects
- `components/PortfolioSection.tsx` - Component that displays projects from Sanity

## Troubleshooting

### Projects not showing up?

1. Check that your `.env.local` file has the correct `NEXT_PUBLIC_SANITY_PROJECT_ID`
2. Verify that you have published projects in Sanity Studio
3. Check the browser console for any errors
4. Make sure your Sanity project has the correct dataset name

### Images not loading?

1. Verify that images are uploaded in Sanity Studio
2. Check that `next.config.js` has the correct image domain configuration
3. Ensure images are published (not just saved as drafts)

## Fallback Behavior

If no projects are found in Sanity, the component will fall back to displaying 9 default placeholder projects using local images from `/public/images/portfolio/`.

