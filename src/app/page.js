import { getItems } from './getItems'

export default async function Home() {
  const items = await getItems();
  console.log(items);
  return (
    <>
      <div className="row">
        <h1>Hello World!</h1>
      </div>
    </>
  );
}
