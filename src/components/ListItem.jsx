import { Link } from "react-router-dom";

const getTime = (note) => {
  return new Date(note).toLocaleDateString();
};

const getTitle = (note) => {
  const title = note.body.split("\n")[0];
  if (title.length > 45) {
    return title.slice(0, 45);
  }
  return title;
};

const getContent = (note) => {
  const title = getTitle(note);
  let content = note.body.replaceAll("\n", "");
  content = content.replaceAll(title, "");

  if (content.length > 45) {
    return content.slice(0, 45) + "...";
  } else {
    return content;
  }
};

const ListItem = ({ note }) => {
  const title = getTitle(note);
  const time = getTime(note?.updated);
  const content = getContent(note);
  return (
    <Link to={`/note/${note?.id}`}>
      <div className="notes-list-item">
        <h3>{title}</h3>
        <p>
          <span>{time}</span>- {content}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
