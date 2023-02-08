import "./Card.css";
interface props {
  img: string;
  name: String;
  id: number;
  rank: number;
  price: number;
  symbol: String;
}
export function Card(props: props) {
  return props.img ? (
    <>
      <div className="card" key={props.id}>
        <div>{props.rank}</div>
        <img src={props.img} />
        <div>{props.name}</div>
        <div>{`${props.symbol} ${props.price}`}</div>
      </div>
    </>
  ) : (
    <></>
  );
}
