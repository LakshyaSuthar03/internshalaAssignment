import axios from "axios";
import { useEffect, useState } from "react";
import "../components/Card.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import "./home.css";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Card } from "../components/Card";
import { useNavigate } from "react-router-dom";
interface coin {
  image: string;
  name: string;
  id: number;
  market_cap_rank: number;
  current_price: number;
}

export function Home() {
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);
  const [coins, setCoins] = useState([]);
  const [userInfo, setUserInfo] = useState<any | null>(null);
  const navigate = useNavigate();
  const currencySymbol =
    currency === "inr"
      ? "₹"
      : currency === "eur"
      ? "€"
      : currency === "usd"
      ? "$"
      : "NA";
  const setUserData = () => {
    setUserInfo(localStorage.getItem("name"));
  };
  const logout = () => {
    localStorage.clear();
    confirm("do you really want to log out?") ? navigate("/") : null;
  };
  useEffect(() => {
    const fetchCoins = async () => {
      const data = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=18&page=${page}`
      );
      setCoins(data.data);
    };
    fetchCoins();
    setUserData();
  }, [currency, page]);

  return (
    <>
      <div className="home-header">
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="currency"
          defaultValue="inr"
          row
        >
          <FormControlLabel
            value="inr"
            control={<Radio />}
            label="inr"
            onClick={() => {
              setCurrency("inr");
            }}
          />
          <FormControlLabel
            value="usd"
            control={<Radio />}
            label="usd"
            onClick={() => {
              setCurrency("usd");
            }}
          />
          <FormControlLabel
            value="eur"
            control={<Radio />}
            label="eur"
            onClick={() => {
              setCurrency("eur");
            }}
          />
        </RadioGroup>
        <div className="greet-user">
          {`Welcome ${userInfo}`}
          <Button variant="contained" color="error" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>

      <div className="cardContainer">
        {coins.map((props: coin) => {
          return (
            <Card
              name={props.name}
              img={props.image}
              id={props.id}
              key={props.id}
              rank={props.market_cap_rank}
              price={props.current_price}
              symbol={currencySymbol}
            />
          );
        })}
      </div>
      <div className="paginationBtnContainer">
        <Button
          className="paginationBtn"
          onClick={() => {
            setPage(page <= 1 ? 1 : page - 1);
          }}
        >
          <AiFillCaretLeft />
        </Button>
        {page}

        <Button
          className="paginationBtn"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <AiFillCaretRight />
        </Button>
      </div>
    </>
  );
}
