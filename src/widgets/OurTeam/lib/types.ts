interface IPerson {
  src: string;
  link: string;
  title: string;
  subtitle: string;
  description: string;
  animation: {
    hidden: {
      opacity: number;
    };
    visible: (custom: number) => {
      opacity: number;
      transition: {
        delay: number;
      };
    };
  };
}

export type { IPerson };
