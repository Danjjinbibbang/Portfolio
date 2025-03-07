export type ProjectType = {
  title: string;
  date: string;
  content: string;
  detail: string[];
  url: string;
  skills: string;
};

export const projects: ProjectType[] = [
  {
    title: "제목1",
    date: "2025-03-07",
    content: "내용1",
    detail: ["세부내용1", "세부내용2"],
    url: "링크1",
    skills: "기술1, 기술2",
  },
  {
    title: "제목2",
    date: "2025-03-07",
    content: "내용2",
    detail: ["세부내용1", "세부내용2"],
    url: "링크2",
    skills: "기술1, 기술2",
  },
  {
    title: "제목3",
    date: "2025-03-07",
    content: "내용3",
    detail: ["세부내용1", "세부내용2"],
    url: "링크3",
    skills: "기술1, 기술2",
  },
  {
    title: "제목4",
    date: "2025-03-07",
    content: "내용4",
    detail: ["세부내용1", "세부내용2"],
    url: "링크4",
    skills: "기술1, 기술2",
  },
];
