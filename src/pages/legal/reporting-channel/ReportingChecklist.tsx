type ReportingChecklistProps = {
  items: readonly string[];
};

export function ReportingChecklist({ items }: ReportingChecklistProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
}
