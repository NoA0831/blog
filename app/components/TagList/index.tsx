
import TagListItem from '../TagListItem';
import { Tag } from '../../libs/microcms';

type Props = {
  tags?: Tag[];
  hasLink?: boolean;
};

const TagList: React.FC<Props> = ({ tags, hasLink = true }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap">
      {tags.map((tag) => (
        <li key={tag.id} className="mr-2 mb-2">
          <TagListItem tag={tag} hasLink={hasLink} />
        </li>
      ))}
    </ul>
  );
};

export default TagList;
