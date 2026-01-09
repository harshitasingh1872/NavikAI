# Legal Prudent Fraternity - Complete Documentation

A comprehensive guide to editing, customizing, and maintaining the Legal Prudent Fraternity website.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Page-by-Page Content Guide](#page-by-page-content-guide)
   - [Home Page](#home-page)
   - [About Page](#about-page)
   - [Blog Page](#blog-page)
   - [Legal Aid Page](#legal-aid-page)
   - [Team Section](#team-section)
   - [Contact Page](#contact-page)
4. [How to Add or Update Team Members](#how-to-add-or-update-team-members)
5. [Changing Text Content](#changing-text-content)
6. [Changing Icons](#changing-icons)
7. [Changing Logos & Images](#changing-logos--images)
8. [Updating Links](#updating-links)
9. [Styling & Theming](#styling--theming)
10. [Adding New Pages](#adding-new-pages)
11. [Navigation & Footer](#navigation--footer)
12. [Forms & Validation](#forms--validation)
13. [Creating a Backend](#creating-a-backend)
14. [Deployment](#deployment)
15. [FAQs](#faqs)
16. [Troubleshooting](#troubleshooting)
17. [Module Reference](#module-reference)
18. [Quick Reference Card](#quick-reference-card)

---

## Project Overview

### Technologies Used
- **React 18** - UI Framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Component library
- **Framer Motion** - Animations
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library

### Quick Start
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## File Structure

```
src/
├── assets/           # Images, logos, and static assets
│   └── logo.png      # Main logo file
│   └── team/         # Team member images (create this folder)
├── components/       # Reusable components
│   ├── ui/           # Shadcn UI components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── TeamSection.tsx  # Team members display component
│   └── AnimatedSection.tsx
├── data/             # Data files
│   └── teamMembers.ts   # Team members data (EDIT THIS FOR TEAM)
├── pages/            # Page components
│   ├── Index.tsx     # Home page
│   ├── About.tsx     # About page
│   ├── Blog.tsx      # Blog/Articles page
│   ├── LegalAid.tsx  # Legal Aid page
│   ├── Collaborations.tsx
│   ├── Events.tsx
│   ├── Join.tsx
│   └── Contact.tsx
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── App.tsx           # Main app component with routing
├── main.tsx          # Entry point
└── index.css         # Global styles and CSS variables

public/
├── favicon.png       # Browser tab icon
└── robots.txt        # SEO file

index.html            # HTML template with meta tags
tailwind.config.ts    # Tailwind configuration
```

---

## Page-by-Page Content Guide

### Home Page
**File**: `src/pages/Index.tsx`

#### Hero Section
```tsx
// Line ~50-60: Hero tagline and headline
<span className="text-accent text-sm font-medium">
  Legal Help. Legal Procedure. Legal Empowerment.  // ← Edit tagline here
</span>

<h1>
  Legal Prudent Fraternity  // ← Edit main headline
  <span>Where Legal Minds Unite for Justice</span>  // ← Edit sub-headline
</h1>
```

#### Hero Description
```tsx
// Line ~65-70: Hero description paragraph
<p className="text-lg sm:text-xl text-muted-foreground">
  Dedicated to assisting individuals...  // ← Edit description here
</p>
```

#### Highlight Cards (Core Services)
```tsx
// Line ~7-30: Edit the highlightCards array
const highlightCards = [
  {
    icon: Heart,                                    // ← Change icon
    title: "Advocate Welfare & Legal Assistance",   // ← Change title
    description: "Dedicated support for...",        // ← Change description
    link: "/legal-aid",                             // ← Change link
    linkText: "Get Assistance",                     // ← Change button text
  },
  // ... more cards
];
```

#### Statistics
```tsx
// Line ~32-37: Edit the stats array
const stats = [
  { value: "500+", label: "Community Members" },    // ← Edit value and label
  { value: "200+", label: "Legal Articles" },
  { value: "50+", label: "Legal Aid Cases" },
  { value: "10+", label: "Legal & Social Partners" },  // ← Updated from "University Partners"
];
```

#### How to Update Partner Count
1. Open `src/pages/Index.tsx`
2. Find the `stats` array (around line 32)
3. Change `{ value: "10+", label: "Legal & Social Partners" }` to your desired count
4. Save the file

---

### About Page
**File**: `src/pages/About.tsx`

#### Story Section
```tsx
// Line ~70-85: Our Story paragraphs
<div className="space-y-4 text-muted-foreground">
  <p>Legal Prudent Fraternity was founded with a mission...</p>  // ← Edit story
  <p>Our team of dedicated advocates...</p>
  <p>Through our legal services...</p>
</div>
```

#### Mission & Vision
```tsx
// Line ~115-140: Mission and Vision text
<h3>Our Mission</h3>
<p>To provide accessible legal aid...</p>  // ← Edit mission text

<h3>Our Vision</h3>
<p>To become India's leading platform...</p>  // ← Edit vision text
```

#### Legal Endeavors Section
```tsx
// Line ~45-60: Edit the legalEndeavors array
const legalEndeavors = [
  {
    icon: Gavel,
    title: "High Court Workgrounds",
    description: "Active engagement with High Court proceedings",
  },
  // ... more endeavors
];
```

---

### Blog Page
**File**: `src/pages/Blog.tsx`

The blog page contains article listings and categories. To edit:
1. Find the `articles` or `blogPosts` array
2. Update article titles, descriptions, and links
3. Add new articles by adding objects to the array

---

### Legal Aid Page
**File**: `src/pages/LegalAid.tsx`

This page contains information about legal aid services. Edit the content directly in the JSX sections.

---

### Team Section
**File**: `src/components/TeamSection.tsx` (display component)
**Data File**: `src/data/teamMembers.ts` (EDIT THIS FILE)

The team section is displayed on the Home page. See the detailed guide below for managing team members.

---

### Contact Page
**File**: `src/pages/Contact.tsx`

#### Contact Information
```tsx
// Line ~9-27: Edit the contactInfo array
const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "legalprudentfraternity@gmail.com",  // ← Edit email
    description: "We typically respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Supreme Court, New Delhi",  // ← Edit location
    description: "Operating across India",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 9608762166",  // ← Edit phone number
    description: "Mon-Sat, 10:00 AM - 6:00 PM IST",
  },
];
```

#### Quick Enquiries Section
```tsx
// Line ~155-175: Edit email addresses for each category
<span className="text-foreground font-medium">Legal Aid:</span> legalprudentfraternity@gmail.com
<span className="text-foreground font-medium">Collaborations:</span> legalprudentfraternity@gmail.com
<span className="text-foreground font-medium">Blog Submissions:</span> legalprudentfraternity@gmail.com
```

#### How to Update Contact Details
1. Open `src/pages/Contact.tsx`
2. Find the `contactInfo` array at the top of the file
3. Update the `value` property for email, location, or phone
4. For quick enquiries, search for "Quick Enquiries" in the file and update the emails
5. Save the file

---

## How to Add or Update Team Members

Team member data is stored in a separate, easy-to-edit file for convenience.

### Where Team Data is Stored
**File**: `src/data/teamMembers.ts`

### Current Team Members Structure
```tsx
export const teamMembers: TeamMember[] = [
  {
    id: "shiv-kumar",              // Unique ID (lowercase, use hyphens)
    name: "Shiv Kumar",            // Display name
    role: "Co-Founder",            // Role/title
    description: "Advocate and legal professional...",  // Bio (2-3 sentences)
    image: "/placeholder.svg",     // Profile image path
    socialLinks: {
      linkedin: "#",               // LinkedIn URL
      instagram: "#",              // Instagram URL
      twitter: "#",                // Twitter/X URL
    },
  },
  // ... more members
];
```

### Step-by-Step: Adding a New Team Member

1. **Open the team data file**:
   Open `src/data/teamMembers.ts` in your editor

2. **Add a new member object** to the `teamMembers` array:
```tsx
{
  id: "new-member-name",  // Use lowercase with hyphens
  name: "New Member Name",
  role: "Their Role",
  description: "A brief description of this person and their work (2-3 sentences).",
  image: "/placeholder.svg",  // Will update in step 4
  socialLinks: {
    linkedin: "https://linkedin.com/in/their-profile",
    instagram: "https://instagram.com/their-handle",
    twitter: "https://twitter.com/their-handle",
  },
},
```

3. **Add their profile image**:
   - Create a folder: `src/assets/team/` (if it doesn't exist)
   - Add the image file: `src/assets/team/new-member-name.jpg`
   - Recommended size: 400x400 pixels, square format

4. **Update the image path**:
   - Change `image: "/placeholder.svg"` to `image: "/team/new-member-name.jpg"`
   - Or import it: 
     ```tsx
     // At top of file
     import newMemberImage from "@/assets/team/new-member-name.jpg";
     
     // In the object
     image: newMemberImage,
     ```

5. **Save the file** - the website will update automatically

### Step-by-Step: Updating an Existing Team Member

1. **Open** `src/data/teamMembers.ts`
2. **Find** the team member you want to update
3. **Edit** any of these fields:
   - `name` - Change display name
   - `role` - Change their title/position
   - `description` - Update their bio
   - `image` - Change their profile photo
   - `socialLinks` - Update their social media URLs
4. **Save** the file

### Step-by-Step: Removing a Team Member

1. **Open** `src/data/teamMembers.ts`
2. **Find** the team member object you want to remove
3. **Delete** the entire object (including the curly braces and comma)
4. **Save** the file

### Example: Adding a Complete New Team Member

```tsx
// In src/data/teamMembers.ts, add this to the teamMembers array:

{
  id: "priya-sharma",
  name: "Priya Sharma",
  role: "Legal Advisor",
  description: "Senior advocate specializing in constitutional law with over 15 years of experience in the Supreme Court of India. Passionate about legal aid and access to justice.",
  image: "/placeholder.svg",  // Replace with actual image
  socialLinks: {
    linkedin: "https://linkedin.com/in/priya-sharma",
    instagram: "https://instagram.com/priyasharma_advocate",
    twitter: "https://twitter.com/PriyaSharmaAdv",
  },
},
```

### Tips for Team Member Images
- Use square images (1:1 aspect ratio)
- Recommended size: 400x400 pixels
- Accepted formats: JPG, PNG, WebP
- Keep file sizes under 200KB for fast loading
- Use professional headshots

---

## Changing Text Content

### Page Content
Each page is located in `src/pages/`. Here's how to edit them:

#### Home Page (`src/pages/Index.tsx`)
```tsx
// Hero Section - Look for these sections:
<h1>Your Main Headline Here</h1>
<p>Your description text here</p>

// Features Section
const features = [
  {
    icon: Scale,
    title: "Feature Title",
    description: "Feature description text"
  },
  // Add more features...
];
```

#### About Page (`src/pages/About.tsx`)
```tsx
// Mission, Vision, Values - Find the sections like:
<h2>Our Mission</h2>
<p>Edit mission text here</p>
```

#### Contact Page (`src/pages/Contact.tsx`)
```tsx
// Contact Information
const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "legalprudentfraternity@gmail.com",  // ← Edit email
    description: "We typically respond within 24 hours",
  },
  // ... more contacts
];
```

### Site-wide Text
- **Site Title**: Edit in `index.html` → `<title>` tag
- **Meta Description**: Edit in `index.html` → `<meta name="description">`
- **Brand Name**: Edit in `Navigation.tsx` and `Footer.tsx`

---

## Changing Icons

We use [Lucide Icons](https://lucide.dev/icons/). To change an icon:

### Step 1: Find the Icon
Browse available icons at: https://lucide.dev/icons/

### Step 2: Import the Icon
```tsx
// At the top of your file:
import { Scale, Users, BookOpen, Calendar, Heart, Gavel } from "lucide-react";
```

### Step 3: Use the Icon
```tsx
<Scale className="h-6 w-6 text-accent" />

// Common props:
// className="h-6 w-6"  - Size
// className="text-accent"  - Color (use Tailwind classes)
```

### Common Icons Used
| Icon | Import Name | Usage |
|------|-------------|-------|
| Balance Scale | `Scale` | Legal/Justice |
| Users | `Users` | Community |
| Book | `BookOpen` | Education/Blog |
| Calendar | `Calendar` | Events |
| Mail | `Mail` | Contact |
| Phone | `Phone` | Phone number |
| MapPin | `MapPin` | Location |
| Heart | `Heart` | Welfare/Aid |
| Gavel | `Gavel` | Legal Procedures |
| Handshake | `Handshake` | Collaborations |
| ArrowRight | `ArrowRight` | Buttons/Links |

---

## Changing Logos & Images

### Main Logo
**File Location**: `src/assets/logo.png`

To replace:
1. Add your new logo to `src/assets/` folder
2. Update imports in:
   - `src/components/Navigation.tsx`
   - `src/components/Footer.tsx`

```tsx
// In Navigation.tsx and Footer.tsx:
import logo from "@/assets/logo.png";  // Change filename if needed

<img 
  src={logo} 
  alt="Legal Prudent Fraternity" 
  className="h-12 w-12 rounded-full object-cover"
/>
```

### Favicon (Browser Tab Icon)
**File Location**: `public/favicon.png`

To replace:
1. Replace `public/favicon.png` with your new icon
2. Recommended size: 32x32px or 64x64px
3. Supported formats: PNG, ICO, SVG

### Adding New Images
```tsx
// Option 1: Import from assets (recommended for components)
import myImage from "@/assets/my-image.png";
<img src={myImage} alt="Description" />

// Option 2: Public folder (for static/external use)
// Place in public/ folder
<img src="/my-image.png" alt="Description" />
```

---

## Updating Links

### Navigation Links
**File**: `src/components/Navigation.tsx`

```tsx
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/legal-aid", label: "Legal Aid" },
  { href: "/collaborations", label: "Collaborations" },
  { href: "/events", label: "Events" },
  { href: "/join", label: "Join Us" },
  { href: "/contact", label: "Contact" },
];
```

### Footer Links
**File**: `src/components/Footer.tsx`

```tsx
const footerLinks = {
  quickLinks: [
    { href: "/about", label: "About Us" },
    { href: "/legal-aid", label: "Legal Aid" },
    // Add more...
  ],
  resources: [
    { href: "/blog", label: "Articles" },
    // Add more...
  ],
};
```

### Social Media Links
**File**: `src/components/Footer.tsx`

```tsx
const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/your-page", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/your-handle", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/your-handle", label: "Twitter" },
];
```

### Internal Links (React Router)
```tsx
// Use Link component for internal navigation
import { Link } from "react-router-dom";

<Link to="/about">About Us</Link>
```

### External Links
```tsx
// Use regular anchor tags for external links
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Site
</a>
```

---

## Styling & Theming

### Color System
**File**: `src/index.css`

The site uses CSS custom properties for theming:

```css
:root {
  --background: 222 47% 11%;      /* Main background */
  --foreground: 210 40% 98%;      /* Text color */
  --primary: 217 91% 60%;         /* Primary brand color */
  --secondary: 217 33% 17%;       /* Secondary color */
  --accent: 45 93% 47%;           /* Accent/highlight color */
  --muted: 217 33% 17%;           /* Muted elements */
  --destructive: 0 63% 31%;       /* Error/danger color */
}
```

### How to Change Colors
1. Open `src/index.css`
2. Find the `:root` section
3. Modify the HSL values (Hue Saturation Lightness)

```css
/* Example: Change accent to green */
--accent: 142 76% 36%;  /* Green */

/* Example: Change primary to purple */
--primary: 271 91% 65%;  /* Purple */
```

### Using Colors in Components
```tsx
// Use Tailwind classes with semantic tokens
<div className="bg-background text-foreground">
  <h1 className="text-primary">Primary Text</h1>
  <p className="text-muted-foreground">Muted Text</p>
  <button className="bg-accent text-accent-foreground">Button</button>
</div>
```

### Typography
**File**: `tailwind.config.ts`

```ts
fontFamily: {
  sans: ["Poppins", "sans-serif"],
},
```

To change the font:
1. Install new font: `npm install @fontsource/your-font`
2. Import in `src/main.tsx`
3. Update `tailwind.config.ts`

---

## Adding New Pages

### Step 1: Create the Page Component
Create a new file in `src/pages/`:

```tsx
// src/pages/NewPage.tsx
import AnimatedSection from "@/components/AnimatedSection";
import { GlassCard } from "@/components/ui/glass-card";

const NewPage = () => {
  return (
    <>
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Your Page Title
            </h1>
            <p className="text-muted-foreground">
              Your content here
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default NewPage;
```

### Step 2: Add Route
**File**: `src/App.tsx`

```tsx
import NewPage from "./pages/NewPage";

// Inside Routes:
<Route path="/new-page" element={<NewPage />} />
```

### Step 3: Add to Navigation (Optional)
**File**: `src/components/Navigation.tsx`

```tsx
const navLinks = [
  // ... existing links
  { href: "/new-page", label: "New Page" },
];
```

---

## Navigation & Footer

### Navigation Component
**File**: `src/components/Navigation.tsx`

#### Modify Brand Name
```tsx
<div className="flex flex-col">
  <span className="text-lg font-bold">Your Brand</span>
  <span className="text-xs text-accent">TAGLINE</span>
</div>
```

#### Change Navigation Style
```tsx
// Sticky navigation (current)
<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg">

// Non-sticky alternative
<nav className="w-full bg-background">
```

### Footer Component
**File**: `src/components/Footer.tsx`

#### Modify Contact Information
```tsx
<div className="flex items-center gap-3">
  <Mail className="h-5 w-5" />
  <span>legalprudentfraternity@gmail.com</span>
</div>
```

#### Modify Copyright
```tsx
<p>© {new Date().getFullYear()} Legal Prudent Fraternity. All rights reserved.</p>
```

---

## Forms & Validation

### Contact Form Example
```tsx
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    // Submit logic here (connect to backend)
    toast({
      title: "Success",
      description: "Message sent successfully!"
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        placeholder="Your Name"
        className="w-full p-3 rounded-lg bg-secondary"
      />
      {/* More fields... */}
      <button type="submit" className="bg-accent text-accent-foreground">
        Submit
      </button>
    </form>
  );
};
```

---

## Creating a Backend

### Option 1: Lovable Cloud (Recommended)

Lovable Cloud provides built-in backend functionality with:
- **Database**: PostgreSQL database for storing data
- **Authentication**: User login/signup functionality
- **Storage**: File uploads and storage
- **Edge Functions**: Serverless functions for custom logic

To enable:
1. Click the "Cloud" tab in Lovable
2. Enable Lovable Cloud for your project
3. Use the built-in tools to create tables and functions

### Database Example
```sql
-- Create a table for contact form submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Edge Function Example
```typescript
// supabase/functions/send-email/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  const { to, subject, body } = await req.json();
  
  // Send email logic here
  
  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
});
```

---

## Deployment

### Using Lovable Hosting
1. Click the "Publish" button in the top right
2. Your site will be deployed to a `.lovable.app` subdomain
3. Frontend changes require clicking "Update" to go live
4. Backend changes (edge functions, database) deploy automatically

### Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS settings as instructed
4. SSL is automatically provisioned

---

## FAQs

### How do I update the homepage text?
Open `src/pages/Index.tsx` and edit the text directly in the JSX. Save the file and the changes will appear immediately.

### How do I change the partner count?
In `src/pages/Index.tsx`, find the `stats` array and update the `value` property for the partner count.

### How do I add a new team member?
Open `src/data/teamMembers.ts` and add a new object to the `teamMembers` array following the existing format. See the [Team Members Guide](#how-to-add-or-update-team-members) for details.

### How do I update contact details?
Open `src/pages/Contact.tsx` and update the `contactInfo` array at the top of the file. Also update the quick enquiries section further down.

### How do I change email addresses?
1. Main email: Update in `src/pages/Contact.tsx` → `contactInfo` array
2. Quick enquiries: Search for "Quick Enquiries" in `Contact.tsx`
3. Footer: Update in `src/components/Footer.tsx`

### Can I add more pages?
Yes! Create a new file in `src/pages/`, add a route in `App.tsx`, and optionally add it to the navigation.

### How do I connect forms to a database?
Enable Lovable Cloud and use the built-in database functionality. Create a table and use edge functions to handle form submissions.

---

## Troubleshooting

### Common Issues

#### Page not found after adding new route
- Check that the route is added in `App.tsx`
- Verify the path matches the `Link` href
- Ensure the component is exported correctly

#### Styles not applying
- Check that Tailwind classes are spelled correctly
- Verify CSS variables are defined in `index.css`
- Clear browser cache and hard refresh

#### Images not loading
- Check the file path is correct
- Ensure the image is in the correct folder (`src/assets/` or `public/`)
- Verify the import statement

#### Team member not appearing
- Check the `teamMembers.ts` file for syntax errors
- Ensure the object is properly added to the array
- Verify all required fields are present

---

## Module Reference

### Components
| File | Description |
|------|-------------|
| `Navigation.tsx` | Top navigation bar with mobile menu |
| `Footer.tsx` | Footer with links and contact info |
| `TeamSection.tsx` | Displays team members from data file |
| `AnimatedSection.tsx` | Wrapper for animated content |
| `GlassCard` | Glass-morphism card component |

### Pages
| File | Route | Description |
|------|-------|-------------|
| `Index.tsx` | `/` | Home page |
| `About.tsx` | `/about` | About us page |
| `Blog.tsx` | `/blog` | Blog/Articles page |
| `LegalAid.tsx` | `/legal-aid` | Legal aid services |
| `Contact.tsx` | `/contact` | Contact page |
| `Join.tsx` | `/join` | Membership page |
| `Events.tsx` | `/events` | Events page |
| `Collaborations.tsx` | `/collaborations` | Partnerships page |

### Data Files
| File | Description |
|------|-------------|
| `src/data/teamMembers.ts` | Team member data (names, roles, images, social links) |

---

## Quick Reference Card

### Adding Content
```tsx
// Animated section wrapper
<AnimatedSection delay={0.1}>
  <h2>Your Heading</h2>
  <p>Your paragraph text</p>
</AnimatedSection>
```

### Adding a Button
```tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

<Button variant="hero" size="lg" asChild>
  <Link to="/legal-aid">Get Help</Link>
</Button>
```

### Adding a Card
```tsx
import { GlassCard } from "@/components/ui/glass-card";

<GlassCard hover className="p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</GlassCard>
```

### Adding an Icon
```tsx
import { Heart } from "lucide-react";

<Heart className="h-6 w-6 text-accent" />
```

### Quick Team Member Template
```tsx
// Add to src/data/teamMembers.ts
{
  id: "unique-id",
  name: "Full Name",
  role: "Role Title",
  description: "Bio text here (2-3 sentences).",
  image: "/placeholder.svg",
  socialLinks: {
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
    twitter: "https://twitter.com/username",
  },
},
```

---

## Need Help?

- **Lovable Documentation**: https://docs.lovable.dev
- **Lucide Icons**: https://lucide.dev/icons
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Router**: https://reactrouter.com/docs

---

*Last updated: December 2024*
