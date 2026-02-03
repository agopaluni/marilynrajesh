// Content configuration - Edit this file to update all content on the site
export const siteConfig = {
  name: "Marilyn Rajesh",
  navigation: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  chapters: [
    { id: "intro", label: "Intro" },
    { id: "writing", label: "Writing" },
    { id: "photography", label: "Photography" },
    { id: "radio", label: "Radio" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ],
}

export const introContent = {
  text: `Hello and welcome to my creative space! 
I am Marilyn. Aspiring journalist. Musician. Media professional. Endlessly curious.
This space dives deeper into my many interests and the moments that capture my attention.`,
  ctaText: "Learn More",
  ctaHref: "#about",
  // Replace with actual image path
  heroImage: "/images/marilyn-hero.jpg",
  auxiliaryImages: [
    "/images/aux-1.jpg",
    "/images/aux-2.jpg",
    "/images/aux-3.jpg",
  ],
}

export const writingContent = {
  intro: `Both my creative and academic writing focuses on concise and compelling storytelling through a narrative journalistic format. I am well-experienced in both fiction and non-fiction writing and am passionate about creating work that resonates with the audience. Here are a few of my pieces:`,
  pieces: [
    {
      title: "The Art of Storytelling",
      blurb: "Exploring narrative techniques in modern journalism and creative writing.",
      tags: ["Journalism", "Creative Writing"],
      link: "#", // Replace with actual link
    },
    {
      title: "Cultural Perspectives",
      blurb: "A deep dive into cross-cultural narratives and their impact on contemporary media.",
      tags: ["Culture", "Media Studies"],
      link: "#",
    },
    {
      title: "Voice and Identity",
      blurb: "An examination of personal voice in journalistic writing and storytelling.",
      tags: ["Identity", "Journalism"],
      link: "#",
    },
    {
      title: "Fiction Meets Reality",
      blurb: "Blending fictional techniques with non-fiction storytelling for compelling narratives.",
      tags: ["Fiction", "Non-Fiction"],
      link: "#",
    },
    {
      title: "The Power of Words",
      blurb: "How language shapes perception and drives change in modern media.",
      tags: ["Language", "Media"],
      link: "#",
    },
    {
      title: "Moments in Time",
      blurb: "Capturing fleeting moments through descriptive and evocative prose.",
      tags: ["Creative Writing", "Narrative"],
      link: "#",
    },
  ],
}

export const photographyContent = {
  intro: `Capturing moments through photos has been a newfound passion of mine. I believe it is essential to observe the world around us and take time to appreciate the little details that we often overlook. Here you will find the moments that I appreciate the most, through vibrant storytelling in the form of pictures:`,
  // Replace with actual image paths
  gallery: [
    { src: "/images/photo-1.jpg", alt: "Photography moment 1" },
    { src: "/images/photo-2.jpg", alt: "Photography moment 2" },
    { src: "/images/photo-3.jpg", alt: "Photography moment 3" },
    { src: "/images/photo-4.jpg", alt: "Photography moment 4" },
    { src: "/images/photo-5.jpg", alt: "Photography moment 5" },
    { src: "/images/photo-6.jpg", alt: "Photography moment 6" },
    { src: "/images/photo-7.jpg", alt: "Photography moment 7" },
    { src: "/images/photo-8.jpg", alt: "Photography moment 8" },
    { src: "/images/photo-9.jpg", alt: "Photography moment 9" },
    { src: "/images/photo-10.jpg", alt: "Photography moment 10" },
    { src: "/images/photo-11.jpg", alt: "Photography moment 11" },
    { src: "/images/photo-12.jpg", alt: "Photography moment 12" },
    { src: "/images/photo-13.jpg", alt: "Photography moment 13" },
    { src: "/images/photo-14.jpg", alt: "Photography moment 14" },
    { src: "/images/photo-15.jpg", alt: "Photography moment 15" },
    { src: "/images/photo-16.jpg", alt: "Photography moment 16" },
  ],
}

export const radioContent = {
  intro: `I have spent almost 3 years on student radio and I don't love anything more than curating themed and diverse playlists for an audience every week and sharing bits of my life with listeners. Engaging with my listeners and creating an environment that is rooted in my love for music is something I am able to do through the radio station. Here are a few snippets of my favorite moments ON AIR:`,
  ctaText: "Listen / View Clips",
  ctaLink: "#", // Replace with actual link
  // Replace with actual image paths
  moments: [
    { src: "/images/radio-1.jpg", alt: "Radio moment 1" },
    { src: "/images/radio-2.jpg", alt: "Radio moment 2" },
    { src: "/images/radio-3.jpg", alt: "Radio moment 3" },
  ],
}

export const aboutContent = {
  title: "ABOUT",
  paragraphs: [
    `Marilyn Rajesh is an undergraduate student at Muhlenberg College pursuing a dual degree in Media and Communications & English and Creative Writing. She is an international student who loves traveling and meeting new people.`,
    `Rajesh was born in Kerala, India and has always been fascinated by music and the craft of writing. She wrote her first book at 10 years old and is presently a content creator. She shifted to the US to pursue her undergraduate studies after high school.`,
    `Rajesh is currently pursuing an Honors and is also a Station DJ at her college radio station. She is an artist who loves to share her music with the world through various social media platforms.`,
  ],
}

export const contactContent = {
  title: "Let's Connect",
  subtitle: "I'd love to hear from you. Drop me a message!",
  socials: [
    { label: "Instagram", url: "#", icon: "instagram" }, // Replace with actual URLs
    { label: "LinkedIn", url: "#", icon: "linkedin" },
    { label: "Email", url: "mailto:contact@example.com", icon: "email" },
  ],
}
