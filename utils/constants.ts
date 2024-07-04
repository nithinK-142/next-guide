export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

export interface Prop {
  anime: AnimeProp;
  index: number;
}

export interface Props {
  data: AnimeProp[];
}

export const stagger = 0.25;

export const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
