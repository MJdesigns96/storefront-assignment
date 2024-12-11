import ItemsListItems from "./components/getItems";

export default async function Home() {
  // organize the db conneciton for the items into directories so that it is easier and cleaner to connect and such then save the items to a state var
  return (
    <>
      <div className="row">
        <h1>Hello World!</h1>
       
      </div>
      <div className="row">
         <ItemsListItems />
      </div>
    </>
  );
}
