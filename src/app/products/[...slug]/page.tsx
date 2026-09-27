import Link from 'next/link';
import { notFound } from 'next/navigation';
import { findCategoryBySlugPath, getAllProducts, Category, Product } from '@/data/catalog';
import CategoryClientView from './CategoryClientView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function CategoryOrProductPage({ params }: PageProps) {
  const { slug } = await params;
  const category = findCategoryBySlugPath(slug);

  if (!category) {
    notFound();
  }

  // Build breadcrumbs
  const breadcrumbs: { name: string; href: string }[] = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' }
  ];

  let currentHref = '/products';
  let walker: Category | undefined = undefined;

  for (let i = 0; i < slug.length; i++) {
    const segment = slug[i];
    currentHref += `/${segment}`;
    const subCat = findCategoryBySlugPath(slug.slice(0, i + 1));
    const name = subCat ? subCat.name : segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    breadcrumbs.push({ name, href: currentHref });
  }

  // Determine if this category or its subcategories have products
  const directProducts = category.products || [];
  const allSubProducts = getAllProducts(category);

  return (
    <div className="dynamic-category-page">
      {/* 1. HERO BANNER: Matches media_1790505967648.png */}
      <section className="bearing-hero-banner">
        <div className="container">
          <div className="hero-breadcrumb">
            {breadcrumbs.map((b, i) => (
              <span key={b.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Link href={b.href}>{b.name}</Link>
                {i < breadcrumbs.length - 1 && <span>/</span>}
              </span>
            ))}
          </div>
          <h1>{category.name}</h1>
        </div>
      </section>

      {/* 2. SUB-HERO EDITORIAL */}
      <section className="sub-hero-editorial">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-left">
              <h2>{category.name} &ndash; Engineered Reliability</h2>
            </div>
            <div className="editorial-right">
              <p>
                {category.editorialText || category.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client View for Filtering, Subcategories, Specifications Table & Diagrams */}
      <CategoryClientView
        category={category}
        directProducts={directProducts}
        allSubProducts={allSubProducts}
        currentHref={currentHref}
      />
    </div>
  );
}
