import React from "react";
import { useState } from "react";
import SimpleCard from "./SimpleCard"
import { CardGenerator } from "../../Services/CardGenerator";
import { useEffect } from "react";

const CardBank =()=>{

    const [cardName, setCardName] = useState("")
    const [cardCost, setCardCost] = useState("")
    const [cardList, setCardList] = useState([])

    

    useEffect(()=>{
        let cards = []
        for(let i = 0; i<=49; i++){
            const card = new CardGenerator().generateCard();
            cards.push(card)
        } 
        setCardList(cards)
      },[])

    let name = []
    let cost = []

    for(let i = 0; i<cardList.length; i++){
        name.push(cardList[i].name)
        cost.push(cardList[i].cost)
    }

    console.log(name)
    console.log(cost)

    function nameAndCost(
        
    )

    return(
        <ul>
            <li></li>
        </ul>
    )
}
export default CardBank;