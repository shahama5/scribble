import axiosConfig from "./axiosConfig";

export const noteApi = {
  getAllNotes: async function () {
    const res = await axiosConfig.get("/notes/get-all");
    return res.data;  
  },

  createNote: async function (data: { title: string; text: string; tags?: string[] }) {
    const res = await axiosConfig.post("/notes/create", data);
    return res.data;  
  },

  deleteNote: async function (id: string) {
    const res = await axiosConfig.delete(`/notes/delete/${id}`);
    return res.data;  
  },

  updateNote: async function (id: string, data: { title?: string; text?: string; tags?: string[] }) {
    const res = await axiosConfig.put(`/notes/update/${id}`, data);
    return res.data;  
  },
};
