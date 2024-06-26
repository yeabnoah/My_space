type Diary = {
  id: number;
  content: string;
  image: string[];
  mood: string;
  theme: string;
};

type DiaryCollection = Diary[];

const getDiaries: DiaryCollection = [
  {
    id: 1,
    content:
      "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here,",
    image: [
      "https://images.unsplash.com/photo-1626387765635-16d0724b49bf?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    mood: "Happy : 😁",
    theme: "primary",
  },
  {
    id: 2,
    content:
      "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here,",
    image: [
      "https://i.pinimg.com/736x/2d/5d/30/2d5d30e77694c012fa18a194640f44e1.jpg",
    ],
    mood: "Happy : 😁",
    theme: "secondary",
  },
  {
    id: 3,
    content:
      "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here,",
    image: [
      "https://i.pinimg.com/736x/2d/5d/30/2d5d30e77694c012fa18a194640f44e1.jpg",
    ],
    mood: "Happy : 😁",
    theme: "pink", // Ensure the theme includes success
  },
  {
    id: 4,
    content:
      "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here,",
    image: [
      "https://i.pinimg.com/736x/2d/5d/30/2d5d30e77694c012fa18a194640f44e1.jpg",
    ],
    mood: "Happy : 😁",
    theme: "success", // Ensure the theme includes success
  },
  {
    id: 5,
    content:
      "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here,",
    image: [
      "https://i.pinimg.com/736x/2d/5d/30/2d5d30e77694c012fa18a194640f44e1.jpg",
    ],
    mood: "Happy : 😁",
    theme: "success", // Ensure the theme includes success
  },
];

export default getDiaries;
