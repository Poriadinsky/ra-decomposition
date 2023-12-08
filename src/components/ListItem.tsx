export type TListItem = {
  img?: string;
  alt?: string;
  caption?: string;
  description?: string;
  link?: string;
  button?: string;
};

interface ListItemProps {
  item: TListItem;
  title: string;
}

export const ListItem = ({ item, title }: ListItemProps) => {
  const { img, alt, caption, description, link, button } = item;

  return (
    <li className={`card card-${title}`}>
      <img src={img} alt={alt} className={`card-img-${title}`} />
      <a href={link}>{caption}</a>
      <span className="description">{description}</span>
      <button className={`button-${title}`}>{button}</button>
    </li>
  );
};
