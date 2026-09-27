import { NextResponse } from 'next/server';
import { getAllProducts, catalogData } from '@/data/catalog';

interface AdvisoryRule {
  keywords: string[];
  recommendedType: string;
  suggestedIds: string[];
  explanation: string;
}

const KNOWLEDGE_BASE: AdvisoryRule[] = [
  {
    keywords: ['spindle', 'cnc', 'high speed', 'high rpm', 'machining', 'milling'],
    recommendedType: 'Super-Precision Angular Contact',
    suggestedIds: ['7008-CD-P4ADGA', '71910-CD-HCP4A', 'NN-3012-K-SPW33'],
    explanation: 'For high-speed machine tool spindles, Super-Precision Angular Contact Ball Bearings (such as ISO Class 4 / ABEC 7) with ceramic silicon nitride balls minimize centrifugal ball loads and thermal runaway at speeds up to 34,000 r/min.'
  },
  {
    keywords: ['heavy load', 'crusher', 'quarry', 'vibrating screen', 'cement', 'shock', 'misalignment', 'conveyor head'],
    recommendedType: 'Spherical Roller Bearings',
    suggestedIds: ['22212-E', '22314-EK', '23024-CC-W33'],
    explanation: 'Heavy shock loads and shaft deflection require Spherical Roller Bearings (e.g., 22212 E or 22314 EK). Their barrel-shaped symmetrical rollers and brass or steel cages automatically compensate for up to 2° of shaft misalignment without edge stress.'
  },
  {
    keywords: ['electric motor', 'pump', 'general', 'fan', 'low noise', 'standard'],
    recommendedType: 'Deep Groove Ball Bearings',
    suggestedIds: ['6204-2RSH', '6205-2RS1', '6308-2Z'],
    explanation: 'For electric motors and pumps, Deep Groove Ball Bearings (6204-2RSH / 6308-2Z) offer the lowest friction torque, quiet operation (Z3V3 vibration rating), and high limiting speeds up to 20,000 r/min.'
  },
  {
    keywords: ['pillow block', 'housing', 'plummer block', 'mounted', 'agriculture', 'conveyor'],
    recommendedType: 'Mounted Ball Bearing Units & Plummer Blocks',
    suggestedIds: ['UCP-205', 'UCP-208', 'SNL-511-609'],
    explanation: 'For easy field installation on framed machinery, cast iron Pillow Block Units (UCP 205 / UCP 208) with eccentric or grub screw locking collars provide built-in grease nipples and spherical outer rings to accommodate mounting frame inaccuracy.'
  },
  {
    keywords: ['grease', 'lubricant', 'lubrication', 'oil', 'friction'],
    recommendedType: 'Industrial Greases & Automated Lubricators',
    suggestedIds: ['LGMT-2-1', 'LGWA-2-5', 'LAGD-125-WA2'],
    explanation: 'Proper lubricant selection depends on operating temperature and speed factor (ndm). For general applications, JBS LGMT-2 is ideal. For vibrating and high-load environments, use JBS LGWA-2 extreme pressure grease or automated gas-driven dispensers.'
  },
  {
    keywords: ['seal', 'oil seal', 'leakage', 'dust', 'ingress'],
    recommendedType: 'Radial Shaft Seals',
    suggestedIds: ['25X47X7-HMS5-RG', '35X62X7-HMSA10-RG'],
    explanation: 'To prevent lubricant loss and protect against harsh slurry or particulate ingress, HMSA10 dual-lip fluoroelastomer or NBR seals with auxiliary dirt lips provide maximum reliability.'
  }
];

export async function POST(request: Request) {
  try {
    const { query, shaftDiameter, speedRpm, loadType } = await request.json();

    const lowerQuery = (query || '').toLowerCase();
    const allProducts = getAllProducts(catalogData);

    // Find best match in knowledge base
    let matchedRule = KNOWLEDGE_BASE.find(rule =>
      rule.keywords.some(k => lowerQuery.includes(k))
    );

    // Fallback if no specific keyword matched
    if (!matchedRule) {
      if (speedRpm && speedRpm > 10000) {
        matchedRule = KNOWLEDGE_BASE[0]; // Spindle
      } else if (loadType === 'heavy' || loadType === 'shock') {
        matchedRule = KNOWLEDGE_BASE[1]; // Spherical roller
      } else {
        matchedRule = KNOWLEDGE_BASE[2]; // Deep groove
      }
    }

    // Match recommended products from catalog
    let matchedProducts = allProducts.filter(p => matchedRule!.suggestedIds.includes(p.id));

    // If shaft diameter provided, filter or find closest
    if (shaftDiameter && matchedProducts.length > 0) {
      const exactOrClosest = matchedProducts.sort((a, b) =>
        Math.abs((a.boreDiameter || 0) - shaftDiameter) - Math.abs((b.boreDiameter || 0) - shaftDiameter)
      );
      matchedProducts = exactOrClosest;
    }

    return NextResponse.json({
      success: true,
      recommendation: {
        categoryTitle: matchedRule.recommendedType,
        explanation: matchedRule.explanation,
        engineeringTips: [
          'Verify shaft tolerance (typically h6/j6 for normal rotary loads).',
          'Calculate required L10h bearing life based on operating hours (target 20,000+ hours).',
          'Ensure lubrication replenishment interval meets ISO 281 standards.'
        ],
        suggestedProducts: matchedProducts
      }
    });
  } catch (error) {
    console.error('AI Advisor Error:', error);
    return NextResponse.json(
      { error: 'AI Advisor calculation failed.' },
      { status: 500 }
    );
  }
}
