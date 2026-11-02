export default function ProjectVisual({ project }) {
  return (
    <div className={`project-art project-art--${project.color}`}>
      <span className="project-art__index">PROJECT / {project.number}</span>
      <div className="project-art__window">
        <div className="window-bar">
          <i />
          <i />
          <i />
          <span>sankhare.dev/{project.title.toLowerCase().replace(" ", "-")}</span>
        </div>
        <div className="window-body">
          <span>{project.category}</span>
          <strong>{project.title.slice(0, 2).toUpperCase()}</strong>
          <div className="window-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <span className="project-art__metric">{project.metric}</span>
    </div>
  );
}
