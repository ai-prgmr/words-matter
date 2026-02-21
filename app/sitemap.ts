export const dynamic = 'force-static'
import { MetadataRoute } from 'next';
import { blogPosts } from './blog/page';
import { caseStudies } from './case-studies/page';
import { servicesData } from './services/page';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://wordsmatter.in';

    // Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/blog',
        '/case-studies',
        '/contact',
        '/services'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Blog Routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Dynamic Case Study Routes
    const caseStudyRoutes = caseStudies.map((study) => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9, // Case studies are high-value conversions
    }));

    // Dynamic Services Routes
    const serviceRoutes = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.9, // Services are high-value conversions
    }));

    return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes, ...serviceRoutes];
}
