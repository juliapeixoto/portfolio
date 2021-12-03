import "./style.scss";

interface IExperience {
  start: string;
  end: string;
  name: string;
  subtitle: string;
  description: string;
}

export default function Experience({
  start,
  end,
  name,
  subtitle,
  description,
}: IExperience) {
  return (
    <div className="experience">
      <div className="experience__info">
        <span className="experience__info__date">
          {start} - {end}
        </span>
        <span className="experience__info__title">{name}</span>
        <span className="experience__info__subtitle">{subtitle}</span>
      </div>

      <div className="experience__description">
        <span className="experience__description__text">{description}</span>
      </div>
    </div>
  );
}
