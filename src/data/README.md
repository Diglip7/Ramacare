# Subcategory Content Data

This directory contains **comprehensive content data for ALL sections** on subcategory treatment pages.

## Files

- `subcategoryContent.js` - **Main data file** containing content for ALL sections of subcategory pages
- `categoryContent.js` - Data file containing content for category pages (e.g., Ayurveda, dental, etc.)

## Complete Section Coverage

This data file includes content for **ALL sections** on subcategory pages:

1. ✅ **Hero Section** - Hero description
2. ✅ **Overview Section** - Title, left cards, root causes, quick facts, approach cards
3. ✅ **Healing Journey / Process** - Step-by-step treatment process
4. ✅ **Benefits Section** - Benefits with percentages, comparison data
5. ✅ **Pricing / Investment** - Treatment packages and pricing
6. ✅ **FAQ / Common Questions** - Frequently asked questions and resources
7. ✅ **Patient Testimonials** - Success stories, filters, statistics
8. ✅ **Payment & Insurance** - Payment options and insurance information

## Usage

### Getting Content for a Subcategory Page

```javascript
import { getSubcategoryContent } from '../../../../data/subcategoryContent';

export default function MyTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Panchakarma Treatment';
  
  // Get ALL content data for this subcategory
  const content = getSubcategoryContent('ayurveda-dubai', 'panchakarma-treatment');
  
  return (
    <Layout>
      {/* Hero Section */}
      <TreatmentHero 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        description={content?.hero?.description}
      />
      
      {/* Overview Section */}
      <TreatmentOverview 
        subcategoryName={subcategoryName}
        content={content?.overview}
      />
      
      {/* Healing Journey / Process Section */}
      <HealingJourney 
        content={content?.healingJourney}
      />
      
      {/* Benefits Section */}
      <TreatmentBenefits 
        content={content?.benefits}
      />
      
      {/* Testimonials Section */}
      <PatientTestimonials 
        content={content?.testimonials}
      />
      
      {/* Pricing / Investment Section */}
      <PricingPackages 
        content={content?.pricing}
      />
      
      {/* Payment & Insurance Section */}
      <PaymentInsurance 
        content={content?.paymentInsurance}
      />
      
      {/* FAQ Section */}
      <FAQSection 
        content={content?.faq}
      />
      
      <BookConsultation />
    </Layout>
  );
}
```

### Complete Content Structure

Each subcategory entry includes **ALL sections**:

```javascript
'category-name-dubai-subcategory-name': {
  // 1. Hero Section
  hero: {
    description: 'Hero section description text'
  },
  
  // 2. Overview Section
  overview: {
    title: 'Overview section title',
    leftCards: [...],
    rootCauses: [...],
    quickFacts: [...],
    approachCards: [...]
  },
  
  // 3. Healing Journey / Process Section
  healingJourney: {
    title: 'Process section title',
    description: 'Process description',
    steps: [
      {
        id: 1,
        number: '01',
        title: 'Step title',
        duration: 'Duration',
        description: 'Step description',
        keyActivities: ['Activity 1', 'Activity 2'],
        side: 'right' // or 'left'
      }
      // ... more steps
    ]
  },
  
  // 4. Benefits Section
  benefits: {
    title: 'Benefits section title',
    description: 'Benefits description',
    benefits: [
      {
        id: 1,
        title: 'Benefit title',
        percentage: 85,
        description: 'Benefit description'
      }
      // ... more benefits
    ],
    comparisonData: [
      {
        feature: 'Feature name',
        ayurvedic: 'Ayurvedic perspective',
        conventional: 'Conventional perspective'
      }
      // ... more comparisons
    ]
  },
  
  // 5. Pricing / Investment Section
  pricing: {
    title: 'Pricing section title',
    description: 'Pricing description',
    packages: [
      {
        id: 1,
        title: 'Package name',
        subtitle: 'Package subtitle',
        duration: 'Duration',
        features: ['Feature 1', 'Feature 2'],
        pricing: 'Pricing information',
        isPopular: false // or true
      }
      // ... more packages
    ]
  },
  
  // 6. FAQ Section
  faq: {
    title: 'FAQ section title',
    description: 'FAQ description',
    faqs: [
      {
        id: 1,
        question: 'Question text',
        answer: 'Answer text'
      }
      // ... more FAQs
    ],
    resources: [
      {
        id: 1,
        text: 'Resource name',
        bgColor: 'bg-[#ECFDF5]'
      }
      // ... more resources
    ]
  },
  
  // 7. Testimonials Section
  testimonials: {
    title: 'Testimonials section title',
    description: 'Testimonials description',
    filters: [
      { id: 'all', label: 'All Stories' }
      // ... more filters
    ],
    testimonials: [
      {
        id: 1,
        name: 'Patient name',
        age: 34,
        location: 'Location',
        rating: 5,
        testimonial: 'Testimonial text',
        condition: 'Condition',
        duration: 'Duration',
        result: 'Result',
        category: 'category',
        date: 'Date'
      }
      // ... more testimonials
    ],
    stats: [
      {
        id: 1,
        number: '4.8/5',
        label1: 'Label 1',
        label2: 'Label 2',
        target: 4.9
      }
      // ... more stats
    ]
  },
  
  // 8. Payment & Insurance Section
  paymentInsurance: {
    paymentOptions: [
      'Payment option 1',
      'Payment option 2'
      // ... more options
    ],
    insuranceOptions: [
      'Insurance option 1',
      'Insurance option 2'
      // ... more options
    ]
  }
}
```

## Adding New Subcategory Content

1. Open `subcategoryContent.js`
2. Find the appropriate category section
3. Add a new entry following the structure above
4. Use the key format: `'category-name-dubai-subcategory-name'`
5. Fill in all content fields

### Key Format Examples

- Ayurveda: `'ayurveda-dubai-panchakarma-treatment'`
- Aesthetic Dermatology: `'aesthetic-dermatology-dubai-hair-treatment'`
- dental: `'dental-dubai-teeth-whitening'`
- Physiotherapy: `'physiotherapy-dubai-scoliosis-treatment'`
- General Physician: `'general-physician-dubai-diabetes-mellitus-care-dubai'`
- Facial: `'facial-dubai-signature-hydra-facial'`

## Current Coverage

Currently includes **complete content** (all 8 sections) for:
- ✅ Ayurveda - Ayurvedic Hairfall Treatment (complete example)
- ✅ Ayurveda - Panchakarma Treatment (complete example)
- ⏳ Remaining 40+ subcategories to be added following the same structure

## Adding New Subcategory Content

1. Open `subcategoryContent.js`
2. Find the appropriate category section
3. Add a new entry following the **complete structure** above
4. Use the key format: `'category-name-dubai-subcategory-name'`
5. Fill in **ALL 8 sections** with relevant content

### Key Format Examples

- Ayurveda: `'ayurveda-dubai-panchakarma-treatment'`
- Aesthetic Dermatology: `'aesthetic-dermatology-dubai-hair-treatment'`
- dental: `'dental-dubai-teeth-whitening'`
- Physiotherapy: `'physiotherapy-dubai-scoliosis-treatment'`
- General Physician: `'general-physician-dubai-diabetes-mellitus-care-dubai'`
- Facial: `'facial-dubai-signature-hydra-facial'`

## Important Notes

- ✅ **All 8 sections** must be included for each subcategory
- ✅ Components will use default content if specific content is not provided
- ✅ The `getSubcategoryContent()` function returns `null` if content doesn't exist, allowing graceful fallback to defaults
- ✅ Content can be partially provided - missing fields will use component defaults
- ✅ This is a **single comprehensive file** - no need for multiple files

