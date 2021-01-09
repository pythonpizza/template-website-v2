export type Event = {
  label?: string;
  name?: string;
  title?: string;
  photo?: string;
  link?: string;
  when?: string;
};

export const SCHEDULE: Event[] = [
  {
    label: "Welcome!",
    when: "12/31/2020 3:00:00 PM UTC",
  },
  {
    name: "Speaker 1",
    title: "Talk title here for speaker 1",
    photo: "/speakers/test-image.jpg",
    when: "12/31/2020 5:00:00 PM UTC",
  },
  {
    label: "Dinner!",
    when: "12/31/2020 6:00:00 PM UTC",
  },
  {
    name: "Speaker 2",
    title: "Talk title here for speaker 2",
    photo: "/speakers/test-image.jpg",
    when: "12/31/2020 7:00:00 PM UTC",
  },
  {
    name: "Speaker 3",
    title: "Talk title here for speaker 3",
    photo: "/speakers/test-image.jpg",
    link: "http://google.it",
  },
  {
    label: "Closing 👋",
    when: "12/31/2020 9:00:00 PM UTC",
  },
];
