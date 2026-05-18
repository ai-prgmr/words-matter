import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'content/blog');

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  position: string;
  authorUrl: string;
  content: string;
};

export function getAllBlogs(): BlogPost[] {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        slug,
        category: matterResult.data.category || '',
        title: matterResult.data.title || '',
        excerpt: matterResult.data.excerpt || '',
        author: matterResult.data.author || '',
        date: matterResult.data.date || '',
        imageUrl: matterResult.data.imageUrl || '',
        position: matterResult.data.position || '',
        authorUrl: matterResult.data.authorUrl || '',
        content: matterResult.content,
      };
    });
  
  // Sort posts by date (optional)
  return allBlogsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  const blogs = getAllBlogs();
  return blogs.find((blog) => blog.slug === slug);
}
