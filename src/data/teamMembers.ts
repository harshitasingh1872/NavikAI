// Team Members Data
// This file contains the team members data for easy editing and maintenance
// To add a new team member, simply add a new object to the teamMembers array below

import AbhishekhImg from "@/assets/team/abhishekh-dey.jpg";
import ShivImg from "@/assets/team/shiv-kumar.jpg";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string; // Path to profile image (place images in src/assets/team/)
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    email?: string; // ← ADD THIS LINE
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "shiv-kumar",
    name: "Shiv Kumar",
    role: "Co-Founder",
    description:
      "Advocate and legal professional actively engaged in legal aid initiatives and on-ground legal assistance, focusing on legal procedures, advocate welfare, and practical legal solutions.",
    image: ShivImg, // Replace with actual image: src/assets/team/shiv-kumar.jpg
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/adv-shiv-k-732b7ba9/", // Replace with actual LinkedIn URL
      instagram: "https://www.instagram.com/shiv_kumar_shiv/", // Replace with actual Instagram URL
      // twitter: "#",
      email: "shiv@legalprudent.in", // ← ADD
    },
  },
  {
    id: "abhishekh-dey",
    name: "Abhishekh Dey",
    role: "Co-Founder",
    description:
      "IT professional and community builder focused on developing legal services, procedural clarity, and public legal awareness through digital platforms.",
    image: AbhishekhImg, // Replace with actual image: src/assets/team/abhishekh-dey.jpg
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/abhishekh-dey/", // Replace with actual LinkedIn URL
      instagram: "https://www.instagram.com/abhishekh_dey", // Replace with actual Instagram URL
      twitter: "https://x.com/abhishekh_dey", // Replace with actual Twitter/X URL
      email: "abhishekh@legalprudent.in", // ← ADD
      
    },
  },
];

// ==========================================
// HOW TO ADD A NEW TEAM MEMBER
// ==========================================
// 
// 1. Add a new object to the teamMembers array above
// 2. Follow this template:
//
// {
//   id: "unique-id",           // Unique identifier (use lowercase with hyphens)
//   name: "Full Name",         // Display name
//   role: "Role/Title",        // Position or role
//   description: "Bio text",   // Short description (2-3 sentences)
//   image: "/path/to/image",   // Image path (place in src/assets/team/)
//   socialLinks: {
//     linkedin: "https://linkedin.com/in/username",
//     instagram: "https://instagram.com/username",
//     twitter: "https://twitter.com/username",
//   },
// },
//
// 3. Add the profile image to src/assets/team/ folder
// 4. Update the image path in the object
// 
// ==========================================
