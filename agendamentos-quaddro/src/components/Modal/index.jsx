import Modal from "react-modal";
import "./style.css";

function EditModal({
  arrayToFilter,
  modalIsOpen,
  setModalIsOpen,
  meuObjeto,
  Teste,
  setTeste,
  count,
}) {
  Modal.setAppElement("#root");
  function closeModal() {
    setModalIsOpen(false);
  }
  const handleTeste = (e) => {
    if (e.target.getAttribute("name") === "title") {
      setTeste({
        title: e.target.value,
        description: Teste.description,
        startDate: Teste.startDate,
        endDate: Teste.endDate,
        id: count,
      });
    } else if (e.target.getAttribute("name") === "description") {
      setTeste({
        title: Teste.title,
        description: e.target.value,
        startDate: Teste.startDate,
        endDate: Teste.endDate,
        id: count,
      });
    } else if (e.target.getAttribute("name") === "startDate") {
      setTeste({
        title: Teste.title,
        description: Teste.description,
        startDate: e.target.value,
        endDate: Teste.endDate,
        id: count,
      });
    } else if (e.target.getAttribute("name") === "endDate") {
      setTeste({
        title: Teste.title,
        description: Teste.description,
        startDate: Teste.startDate,
        endDate: e.target.value,
        id: count,
      });
    }
  };
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} id="modal">
      <form className="modalForm">
        <h2>editar agendamento</h2>
        <label htmlFor="title" className="labels Modal">
          Título
        </label>
        <input
          type="text"
          id="title"
          className="input InputModal"
          name="title"
          value={Teste.title}
          onChange={(e) => handleTeste(e)}
        />

        <label htmlFor="description" className="labels Modal">
          Descrição
        </label>
        <textarea
          id="description"
          className="input InputModal"
          name="description"
          value={Teste.description}
          onChange={(e) => handleTeste(e)}
        />

        <label htmlFor="startDate" className="labels Modal">
          Horário de ínicio
        </label>
        <input
          type="datetime-local"
          id="startDate"
          className="input InputModal"
          name="startDate"
          value={Teste.startDate}
          onChange={(e) => handleTeste(e)}
        />

        <label htmlFor="endDate" className="labels Modal">
          Horário de fim
        </label>
        <input
          type="datetime-local"
          id="endDate"
          className="input InputModal"
          name="endDate"
          value={Teste.endDate}
          onChange={(e) => handleTeste(e)}
        />

        <input
          type="submit"
          id="button"
          className="input"
          onClick={(e) => {
            e.preventDefault();

            const meuId = meuObjeto;

            const spreadArray = [...arrayToFilter];

            spreadArray[meuId].title = Teste.title;
            spreadArray[meuId].description = Teste.description;
            spreadArray[meuId].startDate = Teste.startDate;
            spreadArray[meuId].endDate = Teste.endDate;
            closeModal();
          }}
        />
      </form>
      <button className="closeButton" onClick={closeModal}>
        fechar
      </button>
    </Modal>
  );
}

export default EditModal;
