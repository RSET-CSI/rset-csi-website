export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About Us", link: "#about" },
  { name: "Team", link: "#team" },
  { name: "Events", link: "#events" },
  { name: "Gallery", link: "#gallery" },
];

//About

export const thumbnails = {
  1: "/images/1.jpeg",
  2: "/images/2.jpg",
  3: "/images/3.jpeg",
  4: "/images/4.jpeg",
};

//MeetTheTeam
interface TeamMember {
  src: string;
  name: string;
}

interface Team {
  name: string;
  lead?: { src: string; name: string };
  members: TeamMember[];
}

export const teams: Team[] = [
  {
    name: "Core Team",
    members: [
      { src: "/images/c1.jpg", name: "President<br />Niya Poulose" },
      { src: "/images/c2.JPG", name: "Vice President<br />Thomas John" },
      { src: "/images/c3.jpg", name: "Secretary<br />Savio Sunny" },
      { src: "/images/c4.jpg", name: "Joint Secretary<br />Theresa Jose" },
      { src: "/images/c5.jpg", name: "Treasurer<br />Niyatha V S" },
    ],
  },
  {
    name: "Technical Team",
    lead: {
      src: "/images/techlead.png",
      name: "Geevarghese Regi<br /> ( Lead )",
    },
    members: [
      { src: "/images/tech1.jpg", name: "George Emmanuel Thomas" },
      { src: "/images/tech2.jpg", name: "Alan Joseph" },
      { src: "/images/tech3.jpeg", name: "Reuben Simon" },
      { src: "/images/tech4.jpg", name: "Ashley K Alex" },
      { src: "/images/tech5.jpg", name: "Abhishek Joby" },
    ],
  },
  {
    name: "Marketing Team",
    lead: {
      src: "/images/marklead.jpeg",
      name: "Nikitha Sarah John<br /> ( Lead )",
    },
    members: [
      { src: "/images/mark1.jpg", name: "Basil Sabu" },
      { src: "/images/mark2.jpeg", name: "Sagar S" },
      { src: "/images/mark3.jpeg", name: "Janet Eldo" },
    ],
  },
  {
    name: "Operations Team",
    lead: { src: "/images/oplead.jpg", name: "Ebin Jose<br /> ( Lead )" },
    members: [
      { src: "/images/op1.PNG", name: "Arya K" },
      { src: "/images/op2.JPG", name: "Suraj Panickar" },
      { src: "/images/op3.jpg", name: "Gayatri Binoj" },
    ],
  },
  {
    name: "Documentation Team",
    lead: { src: "/images/doclead.jpg", name: "Priya Anto<br /> ( Lead )" },
    members: [
      { src: "/images/doc1.jpg", name: "P S Ashna Parveen" },
      { src: "/images/doc2.jpg", name: "Anushri Dileep" },
      { src: "/images/doc3.jpg", name: "Eby J Kavungal" },
    ],
  },
  {
    name: "Creative Team",
    lead: { src: "/images/crlead.jpeg", name: "David Justin<br /> ( Lead )" },
    members: [
      { src: "/images/cr1.webp", name: "Adith S" },
      { src: "/images/cr2.jpg", name: "J V Keerthi" },
      { src: "/images/cr3.jpg", name: "Jose Chemmanoor" },
      { src: "/images/cr4.jpg", name: "Madhav Menon" },
    ],
  },
  {
    name: "Coordinators",
    members: [
      { src: "/images/cord1.jpg", name: "Coordinator<br />Dr. Tripti C" },
      {
        src: "/images/cord2.jpg",
        name: "Associate Coordinator<br />Ms. Bency Wilson",
      },
    ],
  },
];

//Events
export const upcomingEvents = [
  {
    id: 1,
    title: "Coder of the Month (February)",
    description: "Coming Soon...",
    imageUrl: "/images/up1.jpeg",
    link: "https://your-link-here.com",
  },
  // Add more upcoming events as needed
];

export const pastEvents = [
  {
    id: 1,
    title: "From Scratch",
    description:
      "A hands-on Scratch workshop. The event was exclusively for the first years from all branches. ",
    imageUrl: "/images/pe1.jpg",
  },
  {
    id: 2,
    title: "Min to Win",
    description:
      "An engaging jam session for 1st-year students to enhance their spontaneous speaking skills.",
    imageUrl: "/images/pe2.jpg",
  },
  {
    id: 3,
    title: "GitHub Workshop",
    description:
      "The purpose of this online meet was to provide participants with valuable insights into GitHub.",
    imageUrl: "/images/pe3.jpg",
  },
  {
    id: 4,
    title: "Coding 101",
    description: "A special coding challenge tailored for first-year students.",
    imageUrl: "/images/pe4.jpg",
  },
  {
    id: 5,
    title: "Say Cheese",
    description:
      "This one-hour extravaganza celebrated creativity, spontaneity, and the art of capturing moments through the lens.",
    imageUrl: "/images/pe5.jpg",
  },
  {
    id: 6,
    title: "Cyber Sense",
    description:
      "An insightful seminar featuring Geevarghese Regi as the resource person, who delved into the fundamentals of cybersecurity.",
    imageUrl: "/images/pe6.jpg",
  },
  {
    id: 8,
    title: "ByteWise",
    description: "An an exciting technical quiz competition.",
    imageUrl: "/images/pe8.jpg",
  },
  {
    id: 9,
    title: "Coder of the Month November",
    description:
      "A coding challenge, open to all students from various branches.",
    imageUrl: "/images/pe9.jpg",
  },
  {
    id: 10,
    title: "TechFemme",
    description:
      "A one week long quiz competion was conducted as part of Woman's Day",
    imageUrl: "/images/pe10.png",
  },
  {
    id: 11,
    title: "Coder of the Month March",
    description:
      "A coding challenge, open to all students from various branches.",
    imageUrl: "/images/pe11.jpeg",
  },
  {
    id: 12,
    title: "ML 101",
    description:
      "An online hands-on workshop that helped the participants to delve deep into the realms of NLP and Deep Learning.",
    imageUrl: "/images/pe12.png",
  },
  {
    id: 13,
    title: "Coder of the Month Aaugust",
    description:
      "A coding challenge, open to all students from various branches.",
    imageUrl: "/images/pe13.jpeg",
  },
  {
    id: 14,
    title: "NeuroVerse",
    description:
      "A session on the cutting-edge world of AI and machine learning. The session was handled by Mr. Nandakishor M",
    imageUrl: "/images/pe14.jpg",
  },
  {
    id: 15,
    title: "GridStory",
    description:
      "The competition tasked participants with crafting a compelling story using AI-generated images.",
    imageUrl: "/images/pe15.jpg",
  },
  {
    id: 16,
    title: "Machaane Pani Paali",
    description:
      "An online, hands-on workshop. The event aimed to introduce participants to MachanScript, a new programming language developed by George Emmanuel Thomas.",
    imageUrl: "/images/pe16.jpg",
  },
  {
    id: 17,
    title: "Inauguration of Techna XV",
    description:
      "Inauguration of Techna XV the launch of the 15 years anniversary celebration of the RSET CSI SB ,TECHNA 15 and the launch of our official website.",
    imageUrl: "/images/pe17.jpg",
  },
  {
    id: 18,
    title: "Code-a-pookalam",
    description:
      "As part of the Onam festivities, the CSI RSET Student Branch organized Code-a-Pookalam, an innovative event aimed at blending coding skills with artistic vision to celebrate Kerala's heritage. Open to students from all years and other colleges, this unique competition invited participants to create a digital pookalam (floral design) using code",
    imageUrl: "/images/pe18.jpg",
  },
  {
    id: 19,
    title: "Mavelikk Oru Portfolio",
    description:
      "As part of the Onam celebrations, CSI RSET Student Branch hosted 'Mavelikk Oru Portfolio', a creative design event that invited participants to craft a unique portfolio for Maveli, the legendary king. Open to students from all years and other colleges",
    imageUrl: "/images/pe19.jpg",
  },
  {
    id: 20,
    title: "Hear It From Your Senior",
    description:
      "As part of Homecoming Week 2.0, the CSI RSET Student Branch hosted 'Hear It from Your Senior', an inspiring online event on September 21, 2024, featuring alumnus Ajoe Joseph. He shared his journey, tech industry experiences, and practical advice, inspiring first-year students as they began their engineering paths within the CSI RSET community.",
    imageUrl: "/images/pe20.jpg",
  },
  {
    id: 21,
    title: "Mastering C",
    description:
      "On October 4, 2024, as part of Homecoming Week 2.0, CSI RSET SB organized an offline C programming workshop, 'Mastering C', led by Savio Sunny of S7 AD. Designed for first-year students, the workshop covered essential programming concepts with hands-on exercises, helping participants build confidence and enhance their coding and problem-solving skills.",
    imageUrl: "/images/pe21.jpg",
  },
  {
    id: 22,
    title: "Frame by Frame",
    description:
      "On October 18, 2024, CSI RSET SB hosted 'Frame by Frame', a hands-on video editing workshop led by Milan Joe Baby at Zuse Lab. Participants learned essential editing techniques, software tools, and creative tips, equipping them with foundational skills for producing high-quality digital content for projects and media platforms.",
    imageUrl: "/images/pe22.jpg",
  },
  {
    id: 23,
    title: "Engineering Beyond Classrooms",
    description:
      "On November 15, 2024, CSI RSET SB hosted 'Engineering Beyond Classroom', led by Shaino Sajimon at the Multimedia Hall. The session explored real-world applications of engineering, bridging theory and practice to inspire creative problem-solving and innovative thinking, and was highly appreciated for promoting experiential learning.",
    imageUrl: "/images/pe23.jpg",
  },
  {
    id: 24,
    title: "Ciper Cross",
    description:
      "Unleash your inner coder and solve a mind-bending crossword with clues derived from the outputs of given input codes.",
    imageUrl: "/images/pe24.jpg",
  },
];

//Gallery

export const images = [
  "/images/g1.jpg",
  "/images/g2.jpg",
  "/images/g3.jpg",
  "/images/g4.jpg",
  "/images/g5.jpg",
  "/images/g6.jpeg",
  "/images/g7.jpeg",
  "/images/g8.jpeg",
  "/images/g9.jpeg",
  "/images/g10.jpeg",
  "/images/g11.jpg",
  "/images/g12.jpg",
  "/images/g13.jpeg",
  "/images/g14.jpeg",
];
