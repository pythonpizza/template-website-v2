export type Event = {
  label?: string;
  name?: string;
  title?: string;
  photo?: string;
  when?: string;
};

export const SCHEDULE: Event[] = [
  {
    label: "Welcome!",
    when: "12/31/2020 3:00:00 PM UTC",
  },
  {
    name: "Marielle Dado",
    title: "Python Pizza Pet 🐈 & Plant Parade 🪴!",
    photo: "/speakers/test-image.jpg",
    when: "12/31/2020 5:00:00 PM UTC",
  },
  {
    label: "Dinner!",
    when: "12/31/2020 6:00:00 PM UTC",
  },
  {
    name: "Jason C. McDonald",
    title: "Whose Method Is It Anyway 🪆 ?",
    photo: "/speakers/test-image.jpg",
    when: "12/31/2020 7:00:00 PM UTC",
  },
  {
    name: "Dr. Jing Xie",
    title:
      "Storytelling for data scientists: 4 things to skyrocket 🚀 your presentation skills",
    photo: "/speakers/test-image.jpg",
  },
];
