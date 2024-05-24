type Diary = {
  id: number;
  content: string;
  image: string;
  mood: string;
  theme: string;
};

type DiaryCollection = Diary[];

const getDiaries: DiaryCollection = [
  {
    id: 1,
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit, purus eu condimentum sodales, lectus purus mollis massa, a tempus tellus arcu sit amet libero.",
    image:
      "https://i.pinimg.com/736x/2d/5d/30/2d5d30e77694c012fa18a194640f44e1.jpg",
    mood: "Happy : 😁",
    theme: "#cdeff1",
  },
];

export default getDiaries;
