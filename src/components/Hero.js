import React, { useEffect, useState } from "react";
import axios from "axios";
import { Divider } from "antd";
import Text from "antd/lib/typography/Text";
import "./Result.css";

const Hero = (props) => {
  const [hero, setHero] = useState("");
  const [img, setImg] = useState("");
  const [bio, setBio] = useState("");
  let [appearance, setApperance] = useState("");
  let [powerstats, setPowerstats] = useState("");
  const [conn, setConn] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.superheroapi.com/api.php/2892825827616713" +
          props.match.url
      )
      .then((res) => {
        setHero(res.data);
        setImg(res.data.image);
        setApperance(res.data.appearance);
        setPowerstats(res.data.powerstats);
        setBio(res.data.biography);
        setConn(res.data.connections);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main">
      <h1>Your SuperHero</h1>
      <div className="details">
        <img src={img.url} alt="character image" width="20%" />
        <br />
        <div className="intro">
          <Text type="success">Full-Name : - &nbsp; &nbsp;</Text> {hero.name}
          <br />
          <Text type="success">gender : - </Text> &nbsp; &nbsp;{" "}
          {appearance.gender} <br />
          <Text type="success">Height : - </Text> &nbsp; &nbsp;
          {appearance.height}
          <br />
          <Text type="success">Weight : - </Text> &nbsp; &nbsp;
          {appearance.weight} <br />
          <Text type="success">Publisher : - </Text> &nbsp; &nbsp;
          {bio.publisher} <br />
          <br />
          <h2>
            <Text type="success">Description: -</Text>
          </h2>
          <p>
            I am {hero.name} and my relations {conn.relatives} are and my
            powerstats are listed{" "}
          </p>
          <ul>
            <li>intelligence: - {powerstats.intelligence}</li>
            <li>Strength: - {powerstats.strength}</li>
            <li>Speed: -{powerstats.speed}</li>
            <li>Power: -{powerstats.power}</li>
            <li>Durability: -{powerstats.durability}</li>
            <li>Combat: -{powerstats.combat}</li>
          </ul>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Hero;
