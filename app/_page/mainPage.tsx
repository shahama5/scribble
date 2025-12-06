"use client";
import React, { useState, useEffect } from "react";
import Card from "../components/card";
import Header from "../_layout/Header";
import ModalEdit from "../components/modalEdit";
import { noteApi } from "@/src/api/config/notesApi";

const MainPage = () => {
  const [cards, setCards] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTag, setNewTag] = useState("");


  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (card: any) => {
    setSelectedCard({ ...card }); // clone to avoid direct mutation
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await noteApi.getAllNotes();

      if (response.success) {
        setCards(response.data);
        setFiltered(response.data);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  const addNewNote = async (note: any) => {
    try {
      const response = await noteApi.createNote({
        title: note.title,
        text: note.text,
        tags: note.tags || [],
      });

      if (response.success) {
        const updated = [response.data, ...cards];
        setCards(updated);
        setFiltered(updated);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error creating note:", error);
      return false;
    }
  };

  const deleteNote = async (id: string) => {
    try {
      const response = await noteApi.deleteNote(id);

      if (response.success) {
        const updated = cards.filter((card: any) => card._id !== id);
        setCards(updated);
        setFiltered(updated);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error deleting note:", error);
      return false;
    }
  };

  const saveUpdatedNote = async () => {
    try {
      const response = await noteApi.updateNote(selectedCard._id, {
        title: selectedCard.title,
        text: selectedCard.text,
        tags: selectedCard.tags,
      });

      if (response.success) {
        const updated = cards.map((item: any) =>
          item._id === selectedCard._id ? response.data : item
        );

        setCards(updated);
        setFiltered(updated);

        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-gray-500 text-lg">Loading notes...</div>
      </div>
    );
  }

  return (
    <div>
      <Header
        allCards={cards}
        onAddNote={addNewNote}
        onSearchResult={setFiltered}
      />

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            {/* <h2 className="text-xl font-bold mb-4">Edit Note</h2> */}

            {/* Title */}
            <input
              className="w-full border-b border-gray-300 outline-none pb-2 mb-3"
              value={selectedCard?.title}
              onChange={(e) =>
                setSelectedCard({ ...selectedCard, title: e.target.value })
              }
            />

            {/* Text */}
            <textarea
              className="w-full outline-none resize-none"
              value={selectedCard?.text}
              onChange={(e) =>
                setSelectedCard({ ...selectedCard, text: e.target.value })
              }
            />

            {/* ADD TAG */}
<div className="flex items-center gap-2 mb-3">
  <input
    className="border px-2 py-1 rounded w-full"
    placeholder="Add tag"
    value={newTag}
    onChange={(e) => setNewTag(e.target.value)}
  />

  <button
    className="px-3 py-1 bg-gray-600 text-white rounded"
    onClick={() => {
      if (!newTag.trim()) return;

      setSelectedCard({
        ...selectedCard,
        tags: [...selectedCard.tags, newTag]
      });

      setNewTag("");
    }}
  >
    Add
  </button>
</div>

            <ModalEdit
              selectedCard={selectedCard}
              onRemoveTag={(tag: string) => {
                const updated = selectedCard.tags.filter((t: any) => t !== tag);
                setSelectedCard({ ...selectedCard, tags: updated });
              }}
            />

            <div className="flex justify-between mt-4">

              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-gray-300 text-white rounded"
                onClick={saveUpdatedNote}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CARDS */}
      <div className="grid grid-cols-4 gap-4 p-4 px-45 pt-20">
        {filtered.length === 0 ? (
          <div className="col-span-4 text-center text-gray-500 py-12">
            No notes found. Create your first note!
          </div>
        ) : (
          filtered.map((item: any) => (
            <Card
              key={item._id}
              {...item}
              tags = {item.tags ||[]}
              description={item.text}
              onClick={() => openModal(item)}
              onDelete={() => deleteNote(item._id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MainPage;
