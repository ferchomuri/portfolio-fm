export const PROFILE_SOURCE = {
  fullName: "Fernando Murillo",
  title: "Senior Frontend Engineer",
  location: "Quito, Ecuador",
  email: "ferchomuriem@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/fernando-murillo/",
    github: "https://github.com/ferchomuri",
  },
  photo: {
    src: "/fernando.webp",
    alt: "Fernando Murillo",
  },
} as const;

export type Profile = typeof PROFILE_SOURCE;
