# FIRS Nigeria E-Invoicing Website Design & Style Guide

This document defines the EXACT styling patterns and step-by-step process for creating consistent, professional sections that match the McKinsey/Accenture quality standard established in sections 1-10.

## Critical Success Factors

**NEVER DRIFT** from these patterns. Every section must be identical in structure and styling to maintain professional consistency.

---

## Step-by-Step Section Creation Process

### Phase 1: Preparation and Research
1. **Read the PDF content** first: `/Sectioned/{section-number}.pdf`
2. **Read diagram specifications**: `{section-number}.{SectionName}_Diagrams.md` 
3. **Check existing section** for reference: Always reference sections 1-10 for styling
4. **Create SVG diagrams** based on specifications in `diagrams/` folder
5. **Plan content structure** based on PDF subsections

### Phase 2: HTML Structure Creation
Follow the EXACT template structure below without deviation.

### Phase 3: Content Integration
Extract exact text from PDF and organize into proper HTML structure.

### Phase 4: Quality Check
- Verify navigation consistency
- Test diagram links
- Ensure all CSS classes match established patterns

---

## Mandatory HTML Template Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Section Title] - FIRS Nigeria E-Invoicing Enablement for Enterprises | Bluelight</title>
    <meta name="description" content="[SEO description based on section content]">
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="assets/css/styles.css" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    [EXACT NAVIGATION STRUCTURE - See Below]

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <h1 class="display-4 fw-bold">[NUMBER]. [Section Title]</h1>
                    <p class="lead">[Compelling description from PDF]</p>
                    <div class="mt-4">
                        <a href="#[anchor1]" class="btn btn-light btn-lg me-3">
                            <i class="fas fa-[icon] me-2"></i>
                            [Button Text]
                        </a>
                        <a href="#[anchor2]" class="btn btn-outline-light btn-lg">
                            <i class="fas fa-[icon] me-2"></i>
                            [Button Text]
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 text-center">
                    <i class="fas fa-[relevant-icon] fa-8x text-white opacity-75"></i>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <main class="main-content">
        <div class="container">
            
            <!-- Section Content Goes Here -->
            [CONTENT SECTIONS - See Patterns Below]

            <!-- Navigation -->
            <div class="section-navigation">
                <div class="row">
                    <div class="col-6">
                        <a href="[prev].html" class="btn btn-outline-primary">
                            <i class="fas fa-chevron-left me-2"></i>Previous: [Title]
                        </a>
                    </div>
                    <div class="col-6 text-end">
                        <a href="[next].html" class="btn btn-primary">
                            Next: [Title]<i class="fas fa-chevron-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </main>

    <!-- Footer -->
    <footer class="footer-section">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <p>&copy; 2024 Bluelight Consulting Limited. All rights reserved. | FIRS Nigeria E-Invoicing Enablement for Enterprises</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## EXACT Navigation Structure

**CRITICAL**: Use this EXACT navigation structure. Never modify the dropdown or class names.

```html
<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container">
        <a class="navbar-brand" href="index.html">
            <i class="fas fa-file-invoice-dollar me-2"></i>
            FIRS Nigeria E-Invoicing Enablement
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-list me-2"></i>Document Sections
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="index.html">1. Executive Summary</a></li>
                        <li><a class="dropdown-item" href="2.html">2. Product Suite Overview</a></li>
                        <li><a class="dropdown-item" href="3.html">3. Regulatory Context and Compliance</a></li>
                        <li><a class="dropdown-item" href="4.html">4. Systems Architecture Overview</a></li>
                        <li><a class="dropdown-item" href="5.html">5. Security Architecture</a></li>
                        <li><a class="dropdown-item" href="6.html">6. Data Mapping and Transformation</a></li>
                        <li><a class="dropdown-item" href="7.html">7. Integration Methods</a></li>
                        <li><a class="dropdown-item" href="8.html">8. Receipt Processing and Validation</a></li>
                        <li><a class="dropdown-item" href="9.html">9. Tracking and Monitoring</a></li>
                        <li><a class="dropdown-item" href="10.html">10. Onboarding Support and Training</a></li>
                        <li><a class="dropdown-item" href="11.html">11. Implementation Methodology</a></li>
                        <li><a class="dropdown-item" href="12.html">12. Detailed Scope of Work</a></li>
                        <li><a class="dropdown-item [ACTIVE CLASS ONLY FOR CURRENT SECTION]" href="13.html">13. Key Technical Requirements Coverage</a></li>
                        <li><a class="dropdown-item" href="14.html">14. Systems Requirements by Option</a></li>
                        <li><a class="dropdown-item" href="15.html">15. Risk Management Approach</a></li>
                        <li><a class="dropdown-item" href="16.html">16. Delivery and Cutover Plan</a></li>
                        <li><a class="dropdown-item" href="17.html">17. Operations Runbook</a></li>
                        <li><a class="dropdown-item" href="18.html">18. Case Studies</a></li>
                        <li><a class="dropdown-item" href="19.html">19. Proposal Requirements Mapping</a></li>
                        <li><a class="dropdown-item" href="20.html">20. Appendices</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

---

## Content Section Patterns

### Pattern 1: Content Section with Feature Cards

```html
<section id="[section-id]" class="content-section">
    <div class="section-header">
        <h2><i class="fas fa-[icon] text-primary me-3"></i>[Section Number] [Section Title]</h2>
        <p class="section-subtitle">[Compelling description from PDF content]</p>
    </div>
    
    <div class="row g-4">
        <div class="col-md-6">
            <div class="feature-card">
                <i class="fas fa-[icon] fa-2x text-primary mb-3"></i>
                <h5>[Feature Title]</h5>
                <p>[Feature description from PDF]</p>
            </div>
        </div>
        <!-- Repeat for more cards -->
    </div>
</section>
```

### Pattern 2: Statistics/Performance Cards

```html
<div class="row g-4 text-center">
    <div class="col-lg-4 col-md-6">
        <div class="stat-card">
            <i class="fas fa-[icon] fa-2x text-primary mb-3"></i>
            <div class="stat-number">[Number/Metric]</div>
            <div class="stat-label">[Metric Description]</div>
        </div>
    </div>
    <!-- Repeat for more stats -->
</div>
```

### Pattern 3: Benefits List

```html
<div class="key-points">
    <h4><i class="fas fa-[icon] me-2"></i>[List Title]</h4>
    <ul class="benefits-list">
        <li><i class="fas fa-[icon] text-primary me-2"></i>[Benefit text]</li>
        <li><i class="fas fa-[icon] text-success me-2"></i>[Benefit text]</li>
        <li><i class="fas fa-[icon] text-warning me-2"></i>[Benefit text]</li>
    </ul>
</div>
```

### Pattern 4: Benefit Cards

```html
<div class="row g-4">
    <div class="col-md-6">
        <div class="benefit-card">
            <i class="fas fa-[icon] fa-2x text-success mb-3"></i>
            <h5>[Benefit Title]</h5>
            <p>[Benefit description]</p>
        </div>
    </div>
    <!-- Repeat for more benefit cards -->
</div>
```

### Pattern 5: Diagram Integration

```html
<div class="diagram-container">
    <div class="diagram-title">
        <i class="fas fa-[icon] me-2"></i>
        [Diagram Title from Specifications]
    </div>
    <img src="diagrams/[diagram-filename].svg" alt="[Alt Text]" class="img-fluid">
    <p class="diagram-subtitle">[Caption explaining the diagram]</p>
</div>
```

---

## SVG Diagram Creation Guidelines

### 1. Read Diagram Specifications
- Always read the corresponding `{SectionNumber}.{SectionName}_Diagrams.md` file
- Extract exact requirements for each diagram
- Note the visual elements, flow directions, and content requirements

### 2. SVG Structure Standards
```xml
<svg viewBox="0 0 1400 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      /* Professional styling with consistent fonts and colors */
      .title-text { font-family: 'Arial', sans-serif; font-size: 18px; font-weight: bold; fill: #2c5aa0; }
      .section-text { font-family: 'Arial', sans-serif; font-size: 14px; fill: #333; }
      .desc-text { font-family: 'Arial', sans-serif; font-size: 10px; fill: #666; }
    </style>
    <!-- Arrows and markers -->
  </defs>
  
  <!-- Content goes here -->
</svg>
```

### 3. Color Scheme Standards
- **Primary Blue**: `#2c5aa0` (titles, primary elements)
- **Success Green**: `#28a745` (positive outcomes, benefits)
- **Warning Orange**: `#ff9800` (caution, attention items)  
- **Info Blue**: `#17a2b8` (informational elements)
- **Secondary Gray**: `#6c757d` (supporting text)
- **Background Light**: `#f8f9fa` (containers)

### 4. Save Location
- All diagrams must be saved in `/diagrams/` folder
- Use descriptive filenames: `section-topic-diagram.svg`
- Test diagram displays correctly in HTML

---

## CSS Classes Reference

### Essential Classes (DO NOT MODIFY)
- `hero-section` - Hero background with gradient
- `main-content` - Main content wrapper
- `content-section` - Individual content sections
- `section-header` - Section title and subtitle container
- `section-subtitle` - Subtitle styling
- `feature-card` - Standard feature cards
- `stat-card` - Statistics display cards
- `benefit-card` - Benefit highlight cards
- `diagram-container` - Diagram wrapper styling
- `diagram-title` - Diagram title styling
- `diagram-subtitle` - Diagram caption styling
- `key-points` - Important points sections
- `benefits-list` - List with icons
- `section-navigation` - Bottom navigation
- `footer-section` - Footer styling

---

## Content Extraction Guidelines

### 1. PDF Text Processing
- Extract exact text from PDF sections
- Maintain bullet point structure
- Convert technical content to engaging descriptions
- Preserve all metrics, numbers, and specifications

### 2. Content Organization
- Use PDF section structure as HTML section structure
- Create compelling section subtitles
- Break long text into digestible paragraphs
- Add appropriate icons for visual hierarchy

### 3. Technical Content Standards
- All technical specifications must be accurate
- Performance metrics displayed prominently in stat cards
- Security features highlighted with appropriate icons
- Integration capabilities clearly presented

---

## Quality Checklist

Before completing any section, verify:

### Structure Compliance
- [ ] Uses exact HTML template structure
- [ ] Navigation dropdown is identical to reference sections
- [ ] Hero section has numbered title (e.g., "13. Section Title")  
- [ ] Hero section has proper buttons and icon
- [ ] Main content wrapped in `<main class="main-content">`
- [ ] CSS path is `assets/css/styles.css`

### Content Quality
- [ ] All PDF content accurately represented
- [ ] Section subtitles are compelling and descriptive
- [ ] Icons match content context
- [ ] Technical specifications preserved exactly
- [ ] Professional language maintained throughout

### Diagram Integration
- [ ] All required diagrams created and saved in `/diagrams/`
- [ ] Diagram file paths correct in HTML
- [ ] Diagram titles match specifications
- [ ] Professional SVG styling applied
- [ ] Alt text provided for accessibility

### Visual Consistency
- [ ] Feature cards use `fa-2x` icons with `mb-3` spacing
- [ ] Color scheme matches established patterns
- [ ] Typography consistent with other sections
- [ ] Grid layouts use Bootstrap classes correctly
- [ ] Navigation and footer identical to reference sections

---

## Common Mistakes to Avoid

1. **Wrong CSS Path**: Must be `assets/css/styles.css` not `styles.css`
2. **Wrong Hero Class**: Must be `hero-section` not `hero-section bg-light`
3. **Missing Main Wrapper**: Must wrap content in `<main class="main-content">`
4. **Inconsistent Navigation**: Must use exact dropdown structure from reference sections
5. **Wrong Icon Sizes**: Feature cards must use `fa-2x` icons
6. **Missing Section Numbers**: Hero titles must include number (e.g., "13. Title")
7. **Diagram Path Errors**: Must use correct `/diagrams/filename.svg` paths
8. **CSS Class Deviation**: Never create custom classes, use established ones

---

## Success Metrics

A properly created section will:
- Look identical in structure and styling to sections 1-10
- Load without any CSS or path errors
- Display all diagrams correctly
- Maintain professional McKinsey/Accenture visual quality
- Pass all checklist items above
- Provide clear, engaging user experience

---

**Remember**: Consistency is key. When in doubt, reference sections 1-10 for exact patterns. Never improvise or deviate from these established standards.