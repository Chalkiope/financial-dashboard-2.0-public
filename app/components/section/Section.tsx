import { ReactElement } from "react";
import s from "./Section.module.scss";

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactElement;
}) => {
  return (
    <section>
      <h2 className={s.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
};
