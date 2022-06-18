import "./style.css";
import React, { useState } from "react";

function Form({ arrayToFilter, setArrayToFilter, count, setCount }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    id: 0,
  });

  const handleForm = (e) => {
    if (e.target.getAttribute("name") === "title") {
      setForm({
        title: e.target.value,
        description: form.description,
        startDate: form.startDate,
        endDate: form.endDate,
        id: count,
      });
    } else if (e.target.getAttribute("name") === "description") {
      setForm({
        title: form.title,
        description: e.target.value,
        startDate: form.startDate,
        endDate: form.endDate,
        id: count,
      });
    } else if (e.target.getAttribute("name") === "startDate") {
      setForm({
        title: form.title,
        description: form.description,
        startDate: e.target.value,
        endDate: form.endDate,
        id: count,
      });
    } else if (e.target.getAttribute("name") === "endDate") {
      setForm({
        title: form.title,
        description: form.description,
        startDate: form.startDate,
        endDate: e.target.value,
        id: count,
      });
    }
  };

  function settingArray(e) {
    e.preventDefault();
    setCount(count + 1);
    setArrayToFilter([...arrayToFilter, form]);
  }

  return (
    <div id="formContainer">
      <form className="form">
        <h1>Faça seu agendamento</h1>
        <label htmlFor="title" className="labels">
          Título
        </label>
        <input
          type="text"
          id="title"
          className="input"
          name="title"
          value={form.title}
          onChange={(e) => handleForm(e)}
        />

        <label htmlFor="description" className="labels">
          Descrição
        </label>
        <textarea
          id="description"
          className="input"
          name="description"
          value={form.description}
          onChange={(e) => handleForm(e)}
        />

        <label htmlFor="startDate" className="labels">
          Horário de ínicio
        </label>
        <input
          type="datetime-local"
          id="startDate"
          className="input"
          name="startDate"
          value={form.startDate}
          onChange={(e) => handleForm(e)}
        />

        <label htmlFor="endDate" className="labels">
          Horário de fim
        </label>
        <input
          type="datetime-local"
          id="endDate"
          className="input"
          name="endDate"
          value={form.endDate}
          onChange={(e) => handleForm(e)}
        />

        <input
          type="submit"
          id="button"
          className="input"
          onClick={settingArray}
        />
      </form>
    </div>
  );
}

export default Form;
