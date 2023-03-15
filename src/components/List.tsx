import { ReactNode } from 'react';
('');

interface ListTypes<T> {
  item: T[];
  render: (item: T) => ReactNode;
  batata: string;
}

const List = <T,>({ item, render, batata }: ListTypes<T>) => {
  return (
    <div>
      <ul>
        {item.map((item, i) => (
          <li key={i}> {render(item)}</li>
        ))}
      </ul>
      {batata}
    </div>
  );
};

export default List;
