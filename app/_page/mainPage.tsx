"use client";
import React, { useState } from "react";
import Card from "../components/card";
import ModalEdit from "../components/modalEdit";
import AddTag from "../components/AddTag";
import Header from "../_layout/Header";

const cardStaticData = [
  { title: "Yoga", description: "attended yoga today and im feeling good today", tags: [] },
  { title: "zumba", description: "had so much fun during zumba class met my old friend reena , my heart is so full ", tags: [] },
  { title: "zumba", description: "had so much fun during zumba class met my old friend reena , my heart is so full ", tags: [] },
  { title: "zumba", description: "had so much fun during zumba class met my old friend reena , my heart is so full ", tags: [] },
];

const MainPage = () => {
  const [cards, setCards] = useState(cardStaticData);
  const [filtered, setFiltered] = useState(cardStaticData);

  const addNewNote = (note: any) => {
    const updated = [note, ...cards];
    setCards(updated);
    setFiltered(updated);
  };

  return (
    <div>
      <Header 
        allCards={cards}
        onAddNote={addNewNote}
        onSearchResult={setFiltered}
      />

      <div className="grid grid-cols-4 gap-4 p-4 px-45">
        {filtered.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
