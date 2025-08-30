# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a documentation repository for a FIRS (Federal Inland Revenue Service) e-invoicing compliance solution proposal. The project contains markdown files describing diagram specifications for a comprehensive business proposal outlining Bluelight's e-invoicing compliance solutions for Nigerian enterprises.

## Architecture Overview

The documentation describes a four-solution product suite:

1. **SmartAPI** - Deep ERP integration for high-volume enterprises
2. **BlueInvoice** - Browser-based SaaS for medium businesses
3. **Email Connector** - Email-based submission for simple workflows
4. **BlueBox** - Capture technology for legacy systems

All solutions converge into the **SmartAPI Compliance Core** which handles:
- Transformation and validation
- Digital signing and QR generation
- FIRS MBS submission and archiving
- Monitoring and reconciliation

## File Structure

- `1.ExecutiveSummary_Diagrams.md` - High-level solution landscape and overview diagrams
- `2.ProductSuiteOverview_Diagrams.md` - Detailed product flows and capability matrix
- `3.RegulatoryContext_Diagrams.md` - Compliance lifecycle and regulatory framework
- `4.SystemsRequirements_Diagrams.md` - Technical specifications and compatibility matrix
- `General Proposal Draft 0.1.docx` - Main proposal document
- `_Document_Outline.docx` - Document structure outline

## Document Format

The markdown files contain diagram specifications with:
- **Description** - Purpose and context of each diagram
- **Elements to Show** - Detailed breakdown of visual components
- **Style** - Visual formatting and design guidance

Each diagram focuses on different aspects of the e-invoicing compliance solution, from high-level architecture to technical implementation details.

## Common Tasks

When working with this documentation:
- Diagrams should follow enterprise-style formatting with clear visual hierarchy
- Use consistent color coding: Blue for Bluelight components, Gray for client systems, Green for regulators
- Maintain focus on compliance assurance and audit readiness
- Ensure all solution paths lead to FIRS MBS integration