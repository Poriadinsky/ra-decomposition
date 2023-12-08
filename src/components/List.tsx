import { TListItem, ListItem } from "./ListItem";

interface ListProps {
  items: TListItem[];
  title: string;
  header: string;
}

export const List = ({ items, title, header }: ListProps) => {
  return (
    <ul className={title}>
      {header}
      {items.map((item, index) => (
        <ListItem item={item} title={title} key={index} />
      ))}
    </ul>
  );
};
