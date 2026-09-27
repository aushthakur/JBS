import { NextResponse } from 'next/server';
import { getAllProducts, catalogData } from '@/data/catalog';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q')?.toLowerCase() || '';
    const brand = searchParams.get('brand')?.toLowerCase();
    const type = searchParams.get('type')?.toLowerCase();
    const minBore = searchParams.get('minBore') ? parseFloat(searchParams.get('minBore')!) : null;
    const maxBore = searchParams.get('maxBore') ? parseFloat(searchParams.get('maxBore')!) : null;
    const minOD = searchParams.get('minOD') ? parseFloat(searchParams.get('minOD')!) : null;
    const maxOD = searchParams.get('maxOD') ? parseFloat(searchParams.get('maxOD')!) : null;

    let products = getAllProducts(catalogData);

    if (query) {
      products = products.filter(p =>
        p.designation.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        (p.shortDescription && p.shortDescription.toLowerCase().includes(query))
      );
    }

    if (brand) {
      products = products.filter(p => p.brand.toLowerCase() === brand);
    }

    if (type) {
      products = products.filter(p => p.type.toLowerCase().includes(type));
    }

    if (minBore !== null) {
      products = products.filter(p => p.boreDiameter !== undefined && p.boreDiameter >= minBore);
    }
    if (maxBore !== null) {
      products = products.filter(p => p.boreDiameter !== undefined && p.boreDiameter <= maxBore);
    }

    if (minOD !== null) {
      products = products.filter(p => p.outsideDiameter !== undefined && p.outsideDiameter >= minOD);
    }
    if (maxOD !== null) {
      products = products.filter(p => p.outsideDiameter !== undefined && p.outsideDiameter <= maxOD);
    }

    return NextResponse.json({
      total: products.length,
      products
    });
  } catch (error) {
    console.error('Products API Error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve products' },
      { status: 500 }
    );
  }
}
